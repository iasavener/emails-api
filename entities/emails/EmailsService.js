const imaps = require('imap-simple');
const {simpleParser} = require('mailparser');
const moment = require('moment');
const AppError = require('../../helpers/AppError');
const Utils = require('../../utils/Utils');
const Config = require('../../config');
const MongoService = require('../../helpers/mongodb/MongoService');
const { Employee } = require('../../helpers/sql/associations');
const nodemailer = require('nodemailer');
const { Project } = require('../../helpers/sql/associations');

const EmailsService = {
    //Coge los correos del servidor de mails
    getEmailsFromServer: async (employeeId, email, password, folder = 'INBOX', lastKnownUID, status = 'ALL') => {
        const config = {
            imap: {
                user: email,
                password,
                host:  Config.IMAP_EMAIL_SERVER,
                port: 993,
                tls: true,
                authTimeout: 3000
            }
        };
        const connection = await imaps.connect(config);
        const boxes = await connection.getBoxes();

        const flattenedBoxes = Utils.flattenBoxes(boxes);
        
        const matchedFolder = flattenedBoxes.find(box => box.name === folder);
        if (!matchedFolder) throw AppError(403, 'No tienes acceso a la carpeta');

        await connection.openBox(`INBOX.${matchedFolder.name}`);
        const searchCriteria = lastKnownUID ? [['UID', `${lastKnownUID + 1}:`]] : [status]

        const fetchOptions = {
            bodies: '',
            markSeen: false,
            // struct: true //para obtener la estructura del mensaje
        };

        const results = await connection.search(searchCriteria, fetchOptions);

        const emails = await Promise.all(results.map (async res => {
            const email = await simpleParser(res.parts[0].body);
            const from =  email.from.value[0].address;
            const subject = email.subject;
            const date = moment(email.date).format('DD-MM-YYYY');
            const to = email.to.text;
            const flags = res.attributes.flags;
            const read = flags.includes('\\Seen');//si el email está leido, es true
            const uid = res.attributes.uid;
            const body = email.text ? email.text.replace(/--[\s\S]*/, '') : '';
            const attachments = email.attachments.map(att => ({
                filename: att.filename,
                contentType: att.contentType,
                size: att.size,
                content: att.content.toString('base64')
            }));
            // project_id: await classifyEmail()
            

            return { uid, subject, from, date, to, read, body,  attachments };
        }))
 

        return emails.filter(email => email !== null).map((email)=> {
                return {
                    employee_id: employeeId,
                    from: email.from,
                    subject: email.subject,
                    date: email.date,
                    uid: email.uid,
                    read: email.read,
                    body: email.body
                }
            })
        
    },
    //Actualizamos los mails leidos
    syncReadEmailsForEmployee: async (employeeId, email, password) => {
        console.log(`Sincronizando emails leídos para el empleado ${employeeId}`);
        try {
            const serverEmails = await EmailsService.getEmailsFromServer(employeeId, email, password, 'INBOX', null, 'UNSEEN');
            const serverUnreadEmailsUid = serverEmails.map(email => email.uid);
            console.log('Correos no leidos desde el servidor: ', serverUnreadEmailsUid.length);
           
         

            let storedEmails = await MongoService.countEmails(employeeId);
            let storedUnreadEmails = await MongoService.countUnReadEmails(employeeId);
            console.log('Correos almacenados en la base de datos: ', storedEmails);
            console.log('Correos almacenados en la base de datos no leídos: ', storedUnreadEmails);

         
            const updatedDocuments =  await MongoService.setReadEmails(employeeId, serverUnreadEmailsUid);
            console.log('Correos a actualizar como leidos: ', updatedDocuments.modifiedCount);
            
            
            
            storedEmails = await MongoService.countEmails(employeeId);
            storedUnreadEmails = await MongoService.countUnReadEmails(employeeId);
            console.log('Correos almacenados en la base de datos: ', storedEmails);
            console.log('Correos almacenados en la base de datos no leídos: ', storedUnreadEmails);

        } catch (error) {
            console.error('Error sincronizando los estados de lectura', error);
        }
    },
    //sincronizar emails
    syncAllEmailsForEmployee: async (employeeId, email, password) => {
        console.log(`Sincronizando emails para el empleado ${employeeId}`);
      
        const lastExecution = await MongoService.getLastExecution(employeeId);
        let lastKnownUID = lastExecution?.last_known_uid;

        if (lastExecution) {
            console.log(`La ultima vez que se sincronizaron los correos para ${employeeId} fue el ${lastExecution.createdAt}`)
        } else {
            console.log('Nunca se han sincronizado los correos de este empleado')
        }

        if (lastKnownUID) {
            console.log(`El último correo sincronizado fue el UID: ${lastKnownUID}`)
        }

        const response = await EmailsService.getEmailsFromServer(employeeId, email, password, 'INBOX',lastKnownUID);
        if (response.length > 0) {
            console.log(`Se han obtenido ${response.length} correos`);
            await MongoService.insertEmails(response);
            console.log(`Se añadieron ${response.length} correos nuevos para ${employeeId}`)

            lastKnownUID = response.reduce((max, item) => item.uid > max ? item.uid : max, 0);
            await MongoService.saveExecution(employeeId, lastKnownUID);
            console.log(`Ultimo UID actualizado para ${employeeId} es ${lastKnownUID}`)
        }else {
            console.log(`No se encontraron correos nuevos para ${employeeId}`);

        }
        
    },

    syncEmails: async (employee) => {
        console.log(`Iniciando sincronizacion de correos para ${employee.name} ${employee.last_name}`);
        const employeeCredentialsInformation = await MongoService.getEmployee(employee.id);

        await EmailsService.syncAllEmailsForEmployee(employee.id, employee.email, employeeCredentialsInformation.password);
       
        await EmailsService.syncReadEmailsForEmployee(employee.id, employee.email, employeeCredentialsInformation.password);

        return {};       
    },

    getEmails: async (employee, query) => {
        const emails = await MongoService.getEmails(employee.id, query.page, query.page_size);       
        
        return emails;
    },


    discardEmail: async (employee, uid) => {
        await MongoService.discardEmail(employee.id, uid);       
        return {};
    },

    saveEmail: async (employee, uid, data) => {
        if (data.project_id) {
            const project = await Project.findOne({id: data.project_id})
            await MongoService.updateProjectAssigned(employee.id, uid, data.project_id, project.dataValues.name);
        }
        await MongoService.saveEmail(employee.id, uid);       
        return {};
    },

    notify: async (data, file) => {

        const { to, subject } = data;
        const notificationsSettings = await MongoService.getNotificationsSettings();
        const contentHTML = `<p>Hola</p>`;
        
        const transporter = nodemailer.createTransport({
            host: Config.IMAP_EMAIL_SERVER,
            port: 465,
            secure: true,
            auth: {
                user:  notificationsSettings.email,
                pass: notificationsSettings.password
            },
            tls: {
                rejectUnauthorized: false
            }
        });
    
        let attachments = [];
        if (file && file.buffer) {
            attachments = [{
                filename: file.originalname,
                content: file.buffer,
                contentType: file.mimetype
            }];
        }

        for (const recipient of JSON.parse(to)) {
            const employee = await Employee.findOne({where:{id: recipient}});
            await transporter.sendMail({
                from:  notificationsSettings.email,
                to: employee.dataValues.email,
                subject: subject || 'Prueba',
                html: `${contentHTML}<br><br>${notificationsSettings.signature}`,
                attachments: attachments
            });
    
            console.log(`Mensaje enviado correctamente a ${employee.id}`);

        }
        return {}

    }
};

module.exports = EmailsService;
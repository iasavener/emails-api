const imaps = require('imap-simple');
const {simpleParser} = require('mailparser');
const moment = require('moment');
const AppError = require('../../helpers/AppError');
const Utils = require('../../utils/Utils');
const Database = require('../../Database');
const Config = require('../../config');
const MongoService = require('../../database/MongoService');

const EmailsService = {
    //Coge los correos del servidor de mails
    getEmailsFromServer: async (user, folder = 'INBOX', lastKnownUID, status = 'ALL') => {
        const config = {
            imap: {
                user:  "cristian.estrada@savener.es",
                password: "?Z8jh623q",
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
            project_id: await classifyEmail()
            

            return { uid, subject, from, date, to, read, body,  attachments };
        }))
 

        return emails.filter(email => email !== null).map((email)=> {
                return {
                    user_id: user.id,
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
    syncReadEmailsForUser: async (user) => {
        console.log(`Sincronizando emails leídos para el usuario ${user.name} ${user.last_name}`);
        try {
            const serverEmails = await EmailsService.getEmailsFromServer(user, 'INBOX', null, 'UNSEEN');
            const serverUnreadEmailsUid = serverEmails.map(email => email.uid);
            console.log('Correos no leidos desde el servidor: ', serverUnreadEmailsUid.length);
           
         

            let storedEmails = await MongoService.countEmails(user.id);
            let storedUnreadEmails = await MongoService.countUnReadEmails(user.id);
            console.log('Correos almacenados en la base de datos: ', storedEmails);
            console.log('Correos almacenados en la base de datos no leídos: ', storedUnreadEmails);

         
            const updatedDocuments =  await MongoService.setReadEmails(user.id, serverUnreadEmailsUid);
            console.log('Correos a actualizar como leidos: ', updatedDocuments.modifiedCount);
            
            
            
            storedEmails = await MongoService.countEmails(user.id);
            storedUnreadEmails = await MongoService.countUnReadEmails(user.id);
            console.log('Correos almacenados en la base de datos: ', storedEmails);
            console.log('Correos almacenados en la base de datos no leídos: ', storedUnreadEmails);

        } catch (error) {
            console.error('Error sincronizando los estados de lectura', error);
        }
    },
    //sincronizar emails
    syncAllEmailsForUser: async (user) => {
        console.log(`Sincronizando emails para el usuario ${user.name} ${user.last_name}`);
      
        const lastExecution = await MongoService.getLastExecution(user.id);
        let lastKnownUID = lastExecution?.last_known_uid;

        if (lastExecution) {
            console.log(`La ultima vez que se sincronizaron los correos para ${user.name} ${user.last_name} fue el ${lastExecution.createdAt}`)
        } else {
            console.log('Nunca se han sincronizado los correos de este usuario')
        }

        if (lastKnownUID) {
            console.log(`El último correo sincronizado fue el UID: ${lastKnownUID}`)
        }

        const response = await EmailsService.getEmailsFromServer(user,'INBOX',lastKnownUID);
        if (response.length > 0) {
            await MongoService.saveEmail(response);
            console.log(`Se añadieron ${response.length} correos nuevos para ${user.name} ${user.last_name}`)

            lastKnownUID = response.reduce((max, email) => email.uid > max ? email.uid : max, 0);
            await MongoService.saveExecution(user.id, lastKnownUID);
            console.log(`Ultimo UID actualizado para ${user.name} ${user.last_name} es ${lastKnownUID}`)
        }else {
            console.log(`No se encontraron correos nuevos para ${user.name} ${user.last_name}`);

        }
        
    },

    syncEmails: async (user) => {
        console.log(user);
        console.log(`Iniciando sincronizacion de correos para ${user.name} ${user.last_name}`);
        await EmailsService.syncAllEmailsForUser(user);
       
        await EmailsService.syncReadEmailsForUser(user);

        return {};       
    },

    getEmails: async (user, query) => {
        const emails = await MongoService.getEmails(user.id, query.page, query.page_size);       
        
        return emails;
    },


    discardEmail: async (user, uid) => {
        await MongoService.discardEmail(user.id, uid);       
        return {};
    },

    saveEmail: async (user, uid) => {
        await MongoService.saveEmail(user.id, uid);       
        return {};
    }
};

module.exports = EmailsService;
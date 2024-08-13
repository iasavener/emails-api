const Config = require('../../config');
const MongoService = require('../../helpers/mongodb/MongoService');
const { Employee } = require('../../helpers/sql/associations');
const nodemailer = require('nodemailer');
const { Project } = require('../../helpers/sql/associations');

const EmailsService = {    

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
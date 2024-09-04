const Config = require("../../config");
const MongoService = require("../../helpers/mongodb/MongoService");
const { Employee, SupportArea } = require("../../helpers/sql/associations");
const nodemailer = require("nodemailer");
const { Project } = require("../../helpers/sql/associations");

const EmailsService = {
  getEmails: async (employee, query) => {
    const emails = await MongoService.getEmails(
      employee.id,
      query.page,
      query.page_size
    );

    return emails;
  },

  discardEmail: async (employee, uid) => {
    await MongoService.discardEmail(employee.id, uid);
    return {};
  },

  saveEmail: async (employee, uid, data) => {
    if (data.project_id) {
      const project = await Project.findOne({ id: data.project_id });
      await MongoService.updateProjectAssigned(
        employee.id,
        uid,
        data.project_id,
        project.dataValues.name
      );
    }
    await MongoService.saveEmail(employee.id, uid);
    return {};
  },

  notify: async (data, file) => {
    
    const to = JSON.parse(data.to);
    console.log(to)

    const category = data.category;
    console.log(category)

    const metadata = data.metadata ?JSON.parse(data.metadata) : null;
    console.log(metadata)
    let subject = null;
 

    const notificationsSettings = await MongoService.getNotificationsSettings();

    const transporter = nodemailer.createTransport({
      host: Config.IMAP_EMAIL_SERVER,
      port: 465,
      secure: true,
      auth: {
        user: notificationsSettings.email,
        pass: notificationsSettings.password,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    let contentHTML = `<p>Hola</p>`;
    let attachments = [];

    if (file && file.buffer) {
      attachments = [
        {
          filename: file.originalname,
          content: file.buffer,
          contentType: file.mimetype,
        },
      ];
    }

    if (category === "documentation") {
      subject = data.subject;
    } else if (category === "employee_assigned_to_project") {
      subject = "Empleado asignado a proeycto";
    } else if (category === "workpackage_assigned_to_project") {
      subject = `Work Package ${metadata.workppackage} asignado al proyecto ${metadata.project}`;
    } else if (category === "support") {
      if (metadata.id === 1) {
        subject = "Nuevo ticket de soporte recibido para General";
        contentHTML = `${metadata.employee} ha abierto un nuevo ticket: ${metadata.resume}. Puedes visualizar la incidencia dentro de la plataforma`;
      }
      if (metadata.id === 2) {
        subject =
          "Nuevo ticket de soporte recibido para Inteligencia artificial";
          contentHTML = `${metadata.employee} ha abierto un nuevo ticket: ${metadata.resume}. Puedes visualizar la incidencia dentro de la plataforma`;
      }
      if (metadata.id === 3) {
        subject = "Nuevo ticket de soporte recibido para IT";
        contentHTML = `${metadata.employee} ha abierto un nuevo ticket: ${metadata.resume}. Puedes visualizar la incidencia dentro de la plataforma`;
      }
      if (metadata.id === 4) {
        subject = "Nuevo ticket de soporte recibido para Recursos Humanos";
        contentHTML = `${metadata.employee} ha abierto un nuevo ticket: ${metadata.resume}. Puedes visualizar la incidencia dentro de la plataforma`;
      }
      if (metadata.id === 5) {
        subject = "Nuevo ticket de soporte recibido para Operaciones";
        contentHTML = `${metadata.employee} ha abierto un nuevo ticket: ${metadata.resume}. Puedes visualizar la incidencia dentro de la plataforma`;
      }
      if (metadata.id === 6) {
        subject = "Nuevo ticket de soporte recibido para Otras Areas";
        contentHTML = `${metadata.employee} ha abierto un nuevo ticket: ${metadata.resume}. Puedes visualizar la incidencia dentro de la plataforma`;
      }
    } else if (category === "support_migration") {
        subject = "Ticket de soporte migrado";
        const employee = await Employee.findOne({ where: { id: metadata.migrated_by } });
        const ids = [metadata.new_area, metadata.original_area]
        const areas = await SupportArea.findAll({where: {id: ids}});
        const orderedAreas = ids.map(id => areas.find(area => area.id === id));
        const areaOrigen = orderedAreas[1]?.name;
        const areaDestinarion = orderedAreas[0]?.name;
        contentHTML = `${employee.dataValues.name} ${employee.dataValues.last_name} ha migrado un ticket desde ${areaOrigen} hacia ${areaDestinarion}. Puedes visualizarlo dentro de la plataforma`;

    } else if (category === "support_reject") {
        subject = "Ticket de soporte rechazado";
        contentHTML = `Se ha rechazado el ticket por el siguiente motivo: ${metadata.reason}`;
    } else if (category === "support_accept") {
        subject = "Ticket de soporte aprobado";
        contentHTML = `Se ha aprobado el ticket`;
    } else if (category === 'support_working') {
        subject = "Actualizacion de estado de ticket";
        contentHTML = `Estamos trabajando en el caso de su ticket`;
    } else if (category === 'support_finish') {
        subject = "Ticket finalizado";
        contentHTML = `Su ticket ha sido finalizado. ${metadata.information}`;
    }

    for (const recipient of to) {
        let email = recipient;
        if (typeof email === 'number' || (typeof email === 'string' && !isNaN(email))){
            const employee = await Employee.findOne({ where: { id: recipient } });
            email = employee.dataValues.email;
        } 

        // await transporter.sendMail({
        //     from: notificationsSettings.email,
        //     to: email,
        //     subject: subject || 'Prueba',
        //     html: `${contentHTML}<br><br>${notificationsSettings.signature}`,
        //     attachments: attachments
        // });
        console.log(`Mensaje enviado correctamente a ${email}`);

    }

    return {};
  },
};

module.exports = EmailsService;

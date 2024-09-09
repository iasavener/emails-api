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
      query.page_size,
      query.project_id
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

    const category = data.category;

    const metadata = data.metadata ?JSON.parse(data.metadata) : null;
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
    } else if (category === 'pm_assigned_to_project') {
        subject = "PM asignado al proyecto";
        contentHTML = `Se le ha asignado al proyecto ${metadata.project_name}`;
    } else  if (category === 'old_pm_assigned_to_project') {
        subject = "PM quitado del proyecto";
        contentHTML = `Se le ha quitado del proyecto ${metadata.project_name}`;
    } else if (category === 'employee_assigned_to_project') {
        subject = "Asignación a proyecto";
        contentHTML = `Se le ha asignado al proyecto ${metadata.project_name}`;
    } else if(category === 'employee_assigned_to_project_dt_dgp') {
        subject = "Empleado asignado a proyecto";
        contentHTML = `${metadata.project_manager.name} ${metadata.project_manager.last_name} ha añadido a ${metadata.employee.name} ${metadata.employee.last_name} al proyecto ${metadata.project_name}`;
        } else if (category === 'employee_stand_by_to_project') {
        subject = "Empleado suspendido del proyecto";
        contentHTML = `Se le ha suspendido del proyecto ${metadata.project_name}`;
    } else if (category === 'employee_deleted_to_project') {
        subject = "Empleado eliminado del proyecto";
        contentHTML = `Se le ha eliminado del proyecto ${metadata.project_name}`;
    } else if (category === 'time_allocation_request_to_project') {
        subject = "Solicitudes de horas";
        contentHTML = `Tienes solicitudes de horas para gestionar el proyecto ${metadata.project_name}`;
    } else if (category === 'time_allocation_request_accepted') {
        subject = "Solicitudes de horas aceptadas";
        contentHTML = `Se han aceptado la/s solicitudes de horas del proyecto ${metadata.project_name}`;
    } else if (category === 'time_allocation_request_rejected') {
        subject = "Solicitudes de horas rechazadas";
        contentHTML = `Se han rechazado la/s solicitudes de horas del proyecto ${metadata.project_name}. ${metadata.rejection_reason}`;
    } else if (category === 'update_status') {
        subject = `Se ha cambiado el estado del ${metadata.name}`;
        contentHTML = `Se ha cambiado el estado del ${metadata.name} a ${metadata.status}`;
    } else if (category === 'saverteca_request_received') {
      subject = `${metadata.employee} ha solitidao acceso a la Saverteca`;
      contentHTML = `<p>${metadata.employee} ha solicitado acceso al proyecto ${metadata.project} de la Saverteca.</p><p>Motivo: ${metadata.reason}</p>`;
    } else if (category === 'saverteca_request_completed') {
      subject = `Solicitud de acceso a Saverteca aprobada`;
      contentHTML = `<p>Se ha aprobado tu solicitado de acceso al proyecto ${metadata.project} de la Saverteca.</p>`;
    } else if (category === 'saverteca_request_rejected') {
      subject = `Solicitud de acceso a Saverteca rechazada`;
      contentHTML = `<p>Se ha rechazado tu solicitado de acceso al proyecto ${metadata.project} de la Saverteca.</p><p>Motivo: ${metadata.rejection_reason || '-'}</p>`;
    } else if (category === 'software_installation_request_received') {
      subject = `${metadata.employee} ha solitidao la instalación de software`;
      contentHTML = `<p>${metadata.employee} ha solicitado la instalación de la versión ${metadata.software} de ${metadata.software} en el equipo de trabajo ${metadata.workstation}.</p><p>Motivo: ${metadata.reason}</p>`;
    } else if (category === 'software_installation_request_completed') {
      subject = `Solicitud de instalación de software aprobada`;
      contentHTML = `<p>Se ha aprobado la instalación de la versión ${metadata.version} de ${metadata.software} en el equipo ${metadata.workstation} solicitada.</p>`;
    } else if (category === 'software_installation_request_rejected') {
      subject = `Solicitud de instalación de software rechada`;
      contentHTML = `<p>Se ha rechazado la instalación de la versión ${metadata.version} de ${metadata.software} en el equipo ${metadata.workstation} solicitada.</p><p>Motivo: ${metadata.rejection_reason || '-'}</p>`;
    } else if (category === 'work_tool_request_rejected') {
      subject = `Solicitud de equipo de trabajo rechazada`;
      contentHTML = `<p>Se ha rechazado tu solicitado del equipo de trabajo ${metadata.work_tool} para el project ${metadata.project} para la fecha ${metadata.date}.</p><p>Motivo: ${metadata.rejection_reason || '-'}</p>`;
    } else if (category === 'work_tool_request_received') {
      subject = `${metadata.employee} ha solitidao un equipo de trabajo`;
      contentHTML = `<p>${metadata.employee} ha solicitado el equipo de trabajo ${metadata.work_tool} (${metadata.quantity}) para el proyecto ${metadata.project} para ${metadata.location} para la fecha ${metadata.date}.</p><p>Motivo: ${metadata.reason}</p>`;
    } else if (category === 'work_tool_request_completed') {
      subject = `Solicitud de equipo de trabajo aprobada`;
      contentHTML = `<p>Se ha aprobado la solicitud del equipo de trabajo ${metadata.work_tool} para el proyecto ${metadata.project} para la fecha ${metadata.date} solicitada.</p>`;
    } 

    for (const recipient of to) {
        let email = recipient;
        if (typeof email === 'number' || (typeof email === 'string' && !isNaN(email))){
            const employee = await Employee.findOne({ where: { id: recipient } });
            email = employee.dataValues.email;
        } 

        // await transporter.sendMail({
        //   from: notificationsSettings.email,
        //   to: email,
        //   subject: subject || 'Prueba',
        //   html: `${contentHTML}<br><br>${notificationsSettings.signature}`,
        //   attachments: attachments
        // });
        console.log(`Mensaje enviado correctamente a ${email}`);

    }

    return {};
  },

  getEmailConfiguration: async (employeeId) => {
    const employee = await Employee.findOne({
        attributes: ['id', 'name', 'last_name', 'email_configuration'],
        
    });
    return {email_configuration: employee.email_configuration};
  },

  
  updateEmailConfiguration: async (employee, data) => {
    await Employee.update(
      {updated_by: employee.id, email_configuration: data.email_configuration},
      {where: {id: employee.id}});
    return {};
  },
};

module.exports = EmailsService;

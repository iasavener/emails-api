const mongoose = require("mongoose");
const Config = require('../../config');
const { Email } = require('./models/Email');
const { Employee } = require('./models/Employee');
const { NotificationsSettings } = require('./models/NotificationsSettings');
const { encryptFields, decryptFields } = require('./MongoUtils');

const Execution = require('./models/Execution');

const MongoService = {
    init: async () => {
      await MongoService.connect();
      mongoose.connection.on("disconnected", () => console.log("disconnected"));
      mongoose.connection.on("connected", () => console.log("connected"));
      mongoose.connection.on("connecting", () => console.log("connecting"));
      mongoose.connection.on("disconnecting", () => console.log("disconnecting"));
    },
  
    connect: async () => {
      try {
        console.log(`Conectando a la BD`, {
          host: `${Config.MONGO_URI}`,
        });
  
        await mongoose.connect(`${Config.MONGO_URI}`);
      } catch (err) {
        console.error(
          `Error al conectar a la BD, retrying in 5 sec`,
          {
            err: err.message,
          }
        );
        setTimeout(MongoService.connect, 5000);
      }
    },
  
    disconnect: () => {
      mongoose.connection.close();
    },

    createEmployee: async (employeeId, password, signature) => {
      try {
        const employee = {
          employee_id: employeeId,
          password,
          signature
        };
        const encryptedEmployee = encryptFields(employee, ['password']);

        await Employee.create(encryptedEmployee);

      } catch (err){
        console.error('Error al guardar el empleado', err);
        throw err;
      }
    },

    updateEmployee: async (employee_id, data) => {
      return await Employee.updateOne( {employee_id}, {$set: data});
    },

    insertEmails: async (emailData) => {
      
      try {
        const encryptedEmails = emailData.map((email) => encryptFields(email, ['from','subject', 'body']));

        await Email.insertMany(encryptedEmails);

      } catch (err){
        console.error('Error al guardar los correos electronicos', err);
        throw err;

      }
    },
    
    getEmails: async (employee_id, page = 1, limit = 10) => {
      const skip = (page - 1) * limit;

      const totalItems = await Email.countDocuments({
          employee_id,
          $or: [
            { saved: { $exists: false }, discarded: { $exists: false } },
            { saved: { $exists: false }, discarded: false },
            { saved: false, discarded: { $exists: false } },
            { saved: false, discarded: false }
        ]
      });

      const emails = await Email.find({
        employee_id,
        $or: [
            { saved: { $exists: false }, discarded: { $exists: false } },
            { saved: { $exists: false }, discarded: false },
            { saved: false, discarded: { $exists: false } },
            { saved: false, discarded: false }
        ]
      })
          .skip(skip)
          .limit(limit);

      const decryptedEmails = emails.map((email) => decryptFields(email.toObject(), ["from", "subject", "body"]));

      return {
          total_items: totalItems,
          items: decryptedEmails
      };
    },

    discardEmail: async (employee_id, uid) => {
      return await Email.updateOne( {uid, employee_id}, {$set: {discarded: true}});
    },
    
    saveEmail: async (employee_id, uid) => {
      return await Email.updateOne( {uid, employee_id}, {$set: {saved: true}});
    },
  
    setEmails: async (employee_id, emails) => {
      return   await Email.insertMany(emails.map(email => ({...email, employee_id})), {ordered: false});
    },

    getUnreadEmails: async (employee_id) => {
      return await Email.find({employee_id, read:false});
    },

    setReadEmails: async (employee_id, uids) => {
      return await Email.updateMany( {employee_id, read:false, uid: {$nin: uids}}, {$set: {read: true}});
    },

    countEmails: (employee_id) => {
      return Email.countDocuments({employee_id});
    },
    countUnReadEmails: (employee_id) => {
      return Email.countDocuments({employee_id, read: false});
    },

    saveExecution: (employee_id, lastKnownUid) => {
      return new Execution({employee_id, last_known_uid: lastKnownUid}).save();
    },

    getLastExecution: async (employee_id) => {
      return await Execution.findOne({employee_id}).sort({date: -1});
    },
  
    getEmployees: async () => {
      return await Employee.find();
    },

    getEmployee: async (employeeId) => {
      return await Employee.find({employee_id: employeeId});
    },

    getNotificationsSettings: async () => {
      const notificationsSettings = await NotificationsSettings.findOne();
      return decryptFields(notificationsSettings, ["email", "password"]);

    }
};

module.exports = MongoService;
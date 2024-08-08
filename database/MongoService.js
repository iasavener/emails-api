const mongoose = require("mongoose");
const Config = require('../config');
const {Email, encryptFields, decryptFields} = require('./models/Email');
const Execution = require('./models/Execution');
const { discardEmail } = require("../entities/emails/EmailsService");



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

    saveEmail: async (emailData) => {
      
      try {
        const encryptedEmails = emailData.map((email) => encryptFields(email));

        await Email.insertMany(encryptedEmails);

      } catch (err){
        console.error('Error al guardar los correos electronicos', err);
        throw err;

      }
    },
    
    getEmails: async (user_id, page = 1, limit = 10) => {
      const skip = (page - 1) * limit;

      const totalItems = await Email.countDocuments({
          user_id,
          $or: [
            { saved: { $exists: false }, discarded: { $exists: false } },
            { saved: { $exists: false }, discarded: false },
            { saved: false, discarded: { $exists: false } },
            { saved: false, discarded: false }
        ]
      });

      const emails = await Email.find({
        user_id,
        $or: [
            { saved: { $exists: false }, discarded: { $exists: false } },
            { saved: { $exists: false }, discarded: false },
            { saved: false, discarded: { $exists: false } },
            { saved: false, discarded: false }
        ]
      })
          .skip(skip)
          .limit(limit);

      const decryptedEmails = emails.map((email) => decryptFields(email.toObject()));

      return {
          total_items: totalItems,
          items: decryptedEmails
      };
    },

    discardEmail: async (user_id, uid) => {
      return await Email.updateOne( {uid, user_id}, {$set: {discarded: true}});
    },
    
    saveEmail: async (user_id, uid) => {
      console.log(user_id, uid)
      return await Email.updateOne( {uid, user_id}, {$set: {saved: true}});
    },
  
    setEmails: async (user_id, emails) => {
      return   await Email.insertMany(emails.map(email => ({...email, user_id})), {ordered: false});
    },

    getUnreadEmails: async (user_id) => {
      return await Email.find({user_id, read:false});
    },

    setReadEmails: async (user_id, uids) => {
      return await Email.updateMany( {user_id, read:false, uid: {$nin: uids}}, {$set: {read: true}});
    },

    countEmails: (user_id) => {
      return Email.countDocuments({user_id});
    },
    countUnReadEmails: (user_id) => {
      return Email.countDocuments({user_id, read: false});
    },

    saveExecution: (user_id, lastKnownUid) => {
      return new Execution({user_id, last_known_uid: lastKnownUid}).save();
    },

    getLastExecution: async (user_id) => {
      return await Execution.findOne({user_id}).sort({date: -1});
    },
};

module.exports = MongoService;
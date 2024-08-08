/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const mongooseDelete = require("mongoose-delete");
const CryptoJS = require('crypto-js');
mongoose.set("debug", false);


const EmailSchema = new mongoose.Schema(
  {
    user_id: String,
    from: String,
    to: String,
    subject: String,
    date: String,
    uid: String,
    read: Boolean,
    body: String,
    suggested_project_id: String,
    suggested_project_name: String,
    project_id: String,
    project_name: String,
    saved: Boolean,
    discarded: Boolean
  },
  {
    strict: false,
    timestamps: true,
  }
);

//secret key
const secretKey = 'mi-clave-secreta';

//encriptar los campos
const encryptFields =  (email) => {
  const fields = ['from','subject', 'body'];
  for (let field of fields) {
    if (email[field]) {
      const encrypted = CryptoJS.AES.encrypt(email[field], secretKey).toString();
      email[field] = encrypted;
    }
  }
  return email;
}

//desencriptar los campos
const decryptFields = (email) => {
  const fields = ['from','subject', 'body'];
  for (let field of fields) {
    if (email[field]) {
      const bytes = CryptoJS.AES.decrypt(email[field], secretKey);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      email[field] = decrypted;
    }
  }
  return email;
}

EmailSchema.plugin(mongoosePaginate);
EmailSchema.plugin(mongooseDelete, { deletedAt: true, deletedBy: true });

const Email = mongoose.model('Email', EmailSchema)


module.exports = {
  Email, 
  encryptFields,
  decryptFields
}
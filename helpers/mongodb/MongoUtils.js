
const mongoose = require("mongoose");
const CryptoJS = require('crypto-js');
mongoose.set("debug", false);

const secretKey = 'mi-clave-secreta';

const encryptFields =  (document, fields) => {
  for (let field of fields) {
    if (document[field]) {
      const encrypted = CryptoJS.AES.encrypt(document[field], secretKey).toString();
      document[field] = encrypted;
    }
  }
  return document;
}

const decryptFields = (document, fields) => {
  for (let field of fields) {
    if (document[field]) {
      const bytes = CryptoJS.AES.decrypt(document[field], secretKey);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      document[field] = decrypted;
    }
  }
  return document;
}

module.exports = {
  encryptFields,
  decryptFields
}
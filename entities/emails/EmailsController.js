const EmailsService = require("./EmailsService");
const ResponseHelper = require("../../helpers/ResponseHelper");
const Database = require("../../Database");

const EmailsController = {

  getEmails: async (req, res) => {
    return ResponseHelper.getResponse(res, EmailsService.getEmails, [res.locals.user, req.query]);
  },

  syncEmails: async (req, res) => {
    return ResponseHelper.getResponse(res, EmailsService.syncEmails, [res.locals.user]);
  },

  discardEmail: async (req, res) => {
    return ResponseHelper.getResponse(res, EmailsService.discardEmail, [res.locals.user, req.params.uid]);
  },

  saveEmail: async (req, res) => {
    return ResponseHelper.getResponse(res, EmailsService.saveEmail, [res.locals.user, req.params.uid]);
  }

};

module.exports = EmailsController;
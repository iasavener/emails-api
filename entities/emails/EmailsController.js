const EmailsService = require("./EmailsService");
const ResponseHelper = require("../../helpers/ResponseHelper");

const EmailsController = {

  getEmails: async (req, res) => {
    return ResponseHelper.getResponse(res, EmailsService.getEmails, [res.locals.employee, req.query]);
  },

  syncEmails: async (req, res) => {
    return ResponseHelper.getResponse(res, EmailsService.syncEmails, [res.locals.employee]);
  },

  discardEmail: async (req, res) => {
    return ResponseHelper.getResponse(res, EmailsService.discardEmail, [res.locals.employee, req.params.uid]);
  },

  saveEmail: async (req, res) => {
    return ResponseHelper.getResponse(res, EmailsService.saveEmail, [res.locals.employee, req.params.uid]);
  }

};

module.exports = EmailsController;
const EmailsService = require("./EmailsService");
const ResponseHelper = require("../../helpers/ResponseHelper");

const EmailsController = {

  getEmails: async (req, res) => {
    return ResponseHelper.getResponse(res, EmailsService.getEmails, [res.locals.employee, req.query]);
  },

  getEmailConfiguration: async (req, res) => {
    return ResponseHelper.getResponse(res, EmailsService.getEmailConfiguration, [res.locals.employee]);
  },

  updateEmailConfiguration: async (req, res) => {
    return ResponseHelper.getResponse(res, EmailsService.updateEmailConfiguration, [res.locals.employee, req.body]);
  },

  discardEmail: async (req, res) => {
    return ResponseHelper.getResponse(res, EmailsService.discardEmail, [res.locals.employee, req.params.uid]);
  },

  saveEmail: async (req, res) => {
    return ResponseHelper.getResponse(res, EmailsService.saveEmail, [res.locals.employee, req.params.uid, req.body]);
  },

  notify: async (req, res) => {
    return ResponseHelper.getResponse(res, EmailsService.notify, [req.body, req.file])
  },

};

module.exports = EmailsController;
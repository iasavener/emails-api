/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const mongooseDelete = require("mongoose-delete");
mongoose.set("debug", false);


const EmailSchema = new mongoose.Schema(
  {
    employee_id: String,
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

EmailSchema.plugin(mongoosePaginate);
EmailSchema.plugin(mongooseDelete, { deletedAt: true, deletedBy: true });

const Email = mongoose.model('Email', EmailSchema)


module.exports = {
  Email
}
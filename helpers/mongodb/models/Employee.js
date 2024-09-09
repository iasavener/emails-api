/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const mongooseDelete = require("mongoose-delete");
mongoose.set("debug", false);

const EmployeeSchema = new mongoose.Schema(
  {
    employee_id: Number,
    password: String,
    signature: String,
    email_synchronization: Boolean
  },
  {
    strict: false,
    timestamps: true,
  }
);

EmployeeSchema.plugin(mongoosePaginate);
EmployeeSchema.plugin(mongooseDelete, { deletedAt: true, deletedBy: true });

const Employee = mongoose.model('Employee', EmployeeSchema)


module.exports = {
  Employee
}
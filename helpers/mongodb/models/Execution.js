/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const mongooseDelete = require("mongoose-delete");
mongoose.set("debug", false);

const ExecutionSchema = new mongoose.Schema(
  {
    employee_id: String,
    date: Date,
    last_known_uid: Number 
  },
  {
    strict: false,
    timestamps: true,
  }
);
ExecutionSchema.plugin(mongoosePaginate);
ExecutionSchema.plugin(mongooseDelete, { deletedAt: true, deletedBy: true });

module.exports = mongoose.model("Execution", ExecutionSchema);
/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const mongooseDelete = require("mongoose-delete");
mongoose.set("debug", false);

const NotificationsSettingsSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
    signature: String,
  },
  {
    strict: false,
    timestamps: true,
  }
);

NotificationsSettingsSchema.plugin(mongoosePaginate);
NotificationsSettingsSchema.plugin(mongooseDelete, { deletedAt: true, deletedBy: true });

const NotificationsSettings = mongoose.model('NotificationsSettings', NotificationsSettingsSchema)


module.exports = {
    NotificationsSettings
}
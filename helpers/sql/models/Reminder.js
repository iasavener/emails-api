const { DataTypes, Model } = require('sequelize');

class Reminder extends Model {}

module.exports = (sequelize) => {
  Reminder.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    employee_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    date: {
        type: DataTypes.DATE
    },
    time: {
      type: DataTypes.STRING
    },
    note: {
      type: DataTypes.TEXT
    },
    phone_call: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    meeting: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    visit: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    task: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    deadline: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    others: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    audio_file: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Reminder',
    tableName: 'reminders'
  });

  return Reminder;
};
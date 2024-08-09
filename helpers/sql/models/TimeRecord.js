const { DataTypes, Model } = require('sequelize');

class TimeRecord extends Model {}

module.exports = (sequelize) => {
  TimeRecord.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    day: {
      type: DataTypes.DATE,
      allowNull: false
    },
    morning_start_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    morning_exit_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    afternoon_start_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    afternoon_exit_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    hours: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: true
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    original: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'TimeRecord',
    tableName: 'time_records'
  });

  return TimeRecord;
};
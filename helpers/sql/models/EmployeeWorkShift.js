const { DataTypes, Model } = require('sequelize');

class EmployeeWorkShift extends Model {}

module.exports = (sequelize) => {
  EmployeeWorkShift.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    day: {
      type: DataTypes.INTEGER,
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
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'EmployeeWorkShift',
    tableName: 'employee_work_shifts'
  });

  return EmployeeWorkShift;
};
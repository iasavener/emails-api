const { DataTypes, Model } = require('sequelize');

class EmployeeStatus extends Model {}

module.exports = (sequelize) => {
  EmployeeStatus.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
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
    modelName: 'EmployeeStatus',
    tableName: 'employee_statuses'
  });

  return EmployeeStatus;
};
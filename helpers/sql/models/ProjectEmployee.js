const { DataTypes, Model } = require('sequelize');

class ProjectEmployee extends Model {}

module.exports = (sequelize) => {
  ProjectEmployee.init({
    project_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    employee_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    incorporation_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    estimated_hours: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'ProjectEmployee',
    tableName: 'project_employees'
  });

  return ProjectEmployee;
};
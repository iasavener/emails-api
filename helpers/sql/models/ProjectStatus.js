const { DataTypes, Model } = require('sequelize');

class ProjectStatus extends Model {}

module.exports = (sequelize) => {
  ProjectStatus.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
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
    modelName: 'ProjectStatus',
    tableName: 'project_statuses'
  });

  return ProjectStatus;
};
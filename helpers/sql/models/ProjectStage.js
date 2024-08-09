const { DataTypes, Model } = require('sequelize');

class ProjectStage extends Model {}

module.exports = (sequelize) => {
  ProjectStage.init({
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
    modelName: 'ProjectStage',
    tableName: 'project_stages'
  });

  return ProjectStage;
};
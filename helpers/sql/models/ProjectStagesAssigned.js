const { DataTypes, Model } = require('sequelize');

class ProjectStagesAssigned extends Model {}

module.exports = (sequelize) => {
  ProjectStagesAssigned.init({
    project_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    project_stage_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    expected_start_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    expected_completion_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    completion_date: {
      type: DataTypes.DATE,
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
    modelName: 'ProjectStagesAssigned',
    tableName: 'project_stages_assigned'
  });

  return ProjectStagesAssigned;
};
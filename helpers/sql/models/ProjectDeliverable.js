const { DataTypes, Model } = require('sequelize');

class ProjectDeliverable extends Model {}

module.exports = (sequelize) => {
  ProjectDeliverable.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    project_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    project_stage_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    work_package_deliverable_id: {
      type: DataTypes.INTEGER,
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
    },
    estimated_hours: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    estimated_days: {
      type: DataTypes.INTEGER
    },
    in_progress: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    activation_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    finish_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    activated_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    closed_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    deleted_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'ProjectDeliverable',
    tableName: 'project_deliverables',
    indexes: [
      {
        unique: true,
        fields: ['project_id', 'project_stage_id', 'work_package_deliverable_id'],
        name: 'project_deliverables_unique_index'
      }
    ]
  });

  return ProjectDeliverable;
};
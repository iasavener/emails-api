const { DataTypes, Model } = require('sequelize');

class Project extends Model {}

module.exports = (sequelize) => {
  Project.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    in_progress: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    blocked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    proposed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    expected_start_date: {
      type: DataTypes.DATE
    },
    expected_completion_date: {
      type: DataTypes.DATE
    },
    original_date: {
      type: DataTypes.DATE
    },
    path: {
      type: DataTypes.STRING
    },
    start_date: {
      type: DataTypes.DATE
    },
    completion_date: {
      type: DataTypes.DATE
    },
    temporary_progress: {
      type: DataTypes.INTEGER
    },
    functional_progress: {
      type: DataTypes.INTEGER
    },
    project_manager_id: {
      type: DataTypes.INTEGER
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    internal: {
      type: DataTypes.BOOLEAN,
    },
    estimated_days: {
      type: DataTypes.INTEGER
    },
    estimated_hours: {
      type: DataTypes.FLOAT
    },
    project_notification: {
      type: DataTypes.BOOLEAN
    },
    work_packages_notification: {
      type: DataTypes.BOOLEAN
    },
    deliverables_notification: {
      type: DataTypes.BOOLEAN
    },
    hours_25_notification: {
      type: DataTypes.BOOLEAN,
    },
    hours_50_notification: {
      type: DataTypes.BOOLEAN,
    },
    hours_75_notification: {
      type: DataTypes.BOOLEAN,
    },
    hours_90_notification: {
      type: DataTypes.BOOLEAN,
    },
    hours_100_notification: {
      type: DataTypes.BOOLEAN,
    },
    days_90_notification: {
      type: DataTypes.BOOLEAN,
    },
    days_60_notification: {
      type: DataTypes.BOOLEAN,
    },
    days_30_notification: {
      type: DataTypes.BOOLEAN,
    },
    days_15_notification: {
      type: DataTypes.BOOLEAN,
    },
    days_7_notification: {
      type: DataTypes.BOOLEAN,
    },
    days_3_notification: {
      type: DataTypes.BOOLEAN,
    },
    days_1_notification: {
      type: DataTypes.BOOLEAN,
    },
    days_0_notification: {
      type: DataTypes.BOOLEAN,
    }
  }, {
    sequelize,
    modelName: 'Project',
    tableName: 'projects'
  });

  return Project;
};
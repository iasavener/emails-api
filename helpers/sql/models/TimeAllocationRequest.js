const { DataTypes, Model } = require('sequelize');

class TimeAllocationRequest extends Model {}

module.exports = (sequelize) => {
  TimeAllocationRequest.init({
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
    project_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    task_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    project_stage_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    work_package_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    deliverable_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    accepted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    rejection_reason: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rejected: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    rejection_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    acceptance_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  }, {
    sequelize,
    modelName: 'TimeAllocationRequest',
    tableName: 'time_allocation_requests'
  });

  return TimeAllocationRequest;
};
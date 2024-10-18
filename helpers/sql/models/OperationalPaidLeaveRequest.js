const { DataTypes, Model } = require("sequelize");

class OperationalPaidLeaveRequest extends Model {}

module.exports = (sequelize) => {
  OperationalPaidLeaveRequest.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      employee_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      paid_leave_request_id: {
        type: DataTypes.INTEGER
      },
      start_date: {
        type: DataTypes.DATE,
      },
      end_date: {
        type: DataTypes.DATE,
      },
      step_1_accepted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      step_1_rejected: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      step_1_acceptance_date: {
        type: DataTypes.DATE,
      },
      step_1_rejection_date: {
        type: DataTypes.DATE,
      },
      step_1_accepted_by: {
        type: DataTypes.INTEGER
      },
      step_2_accepted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      step_2_rejected: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      step_2_acceptance_date: {
        type: DataTypes.DATE,
      },
      step_2_rejection_date: {
        type: DataTypes.DATE,
      },
      step_2_accepted_by: {
        type: DataTypes.INTEGER
      },
      step_3_accepted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      step_3_rejected: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      step_3_acceptance_date: {
        type: DataTypes.DATE,
      },
      step_3_rejection_date: {
        type: DataTypes.DATE,
      },
      step_3_accepted_by: {
        type: DataTypes.INTEGER
      },
      step_4_accepted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      step_4_rejected: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      step_4_acceptance_date: {
        type: DataTypes.DATE,
      },
      step_4_rejection_date: {
        type: DataTypes.DATE,
      },
      step_4_accepted_by: {
        type: DataTypes.INTEGER
      },
      step_5_accepted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      step_5_rejected: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      step_5_acceptance_date: {
        type: DataTypes.DATE,
      },
      step_5_rejection_date: {
        type: DataTypes.DATE,
      },
      step_5_accepted_by: {
        type: DataTypes.INTEGER
      },
      step_6_accepted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      step_6_rejected: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      step_6_acceptance_date: {
        type: DataTypes.DATE,
      },
      step_6_rejection_date: {
        type: DataTypes.DATE,
      },
      step_6_accepted_by: {
        type: DataTypes.INTEGER
      },
      rejected_by: {
        type: DataTypes.INTEGER
      },
      rejection_reason: {
        type: DataTypes.TEXT,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      audio_file: {
        type: DataTypes.STRING,
      },
      rejection_audio_file: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "OperationalPaidLeaveRequest",
      tableName: "operational_paid_leave_requests",
    }
  );

  return OperationalPaidLeaveRequest;
};

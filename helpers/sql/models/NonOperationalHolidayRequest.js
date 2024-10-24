const { DataTypes, Model } = require("sequelize");

class NonOperationalHolidayRequest extends Model {}

module.exports = (sequelize) => {
    NonOperationalHolidayRequest.init(
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
      holiday_id: {
        type: DataTypes.INTEGER
      },
      start_date: {
        type: DataTypes.DATE,
      },
      end_date: {
        type: DataTypes.DATE,
      },
      justification: {
        type: DataTypes.TEXT
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
      modelName: "NonOperationalHolidayRequest",
      tableName: "non_operational_holiday_requests",
    }
  );

  return NonOperationalHolidayRequest;
};

const { DataTypes, Model } = require("sequelize");

class WorkToolReturnRequest extends Model {}

module.exports = (sequelize) => {
  WorkToolReturnRequest.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      work_tool_request_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      step_1_accepted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      step_1_acceptance_date: {
        type: DataTypes.DATE,
      },
      step_1_accepted_by: {
        type: DataTypes.INTEGER,
      },
      annotations: {
        type: DataTypes.TEXT,
      },
      annotations_audio_file: {
        type: DataTypes.STRING,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "WorkToolReturnRequest",
      tableName: "work_tool_return_requests",
    }
  );

  return WorkToolReturnRequest;
};

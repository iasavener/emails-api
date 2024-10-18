const { DataTypes, Model } = require("sequelize");

class WorkToolReturnRequestEmployee extends Model {}

module.exports = (sequelize) => {
    WorkToolReturnRequestEmployee.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      request_id: {
        type: DataTypes.INTEGER,
      },
      employee_id: {
        type: DataTypes.INTEGER,
      },
      step: {
        type: DataTypes.INTEGER
      }
    },
    {
      sequelize,
      modelName: "WorkToolReturnRequestEmployee",
      tableName: "work_tool_return_request_employee",
    }
  );

  return WorkToolReturnRequestEmployee;
};

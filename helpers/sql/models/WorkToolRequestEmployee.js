const { DataTypes, Model } = require("sequelize");

class WorkToolRequestEmployee extends Model {}

module.exports = (sequelize) => {
    WorkToolRequestEmployee.init(
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
      modelName: "WorkToolRequestEmployee",
      tableName: "work_tool_request_employee",
    }
  );

  return WorkToolRequestEmployee;
};

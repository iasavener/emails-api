const { DataTypes, Model } = require("sequelize");

class OperationalPaidLeaveRequestEmployee extends Model {}

module.exports = (sequelize) => {
    OperationalPaidLeaveRequestEmployee.init(
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
      modelName: "OperationalPaidLeaveRequestEmployee",
      tableName: "operational_paid_leave_request_employee",
    }
  );

  return OperationalPaidLeaveRequestEmployee;
};

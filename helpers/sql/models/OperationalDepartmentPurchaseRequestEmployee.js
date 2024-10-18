const { DataTypes, Model } = require("sequelize");

class OperationalDepartmentPurchaseRequestEmployee extends Model {}

module.exports = (sequelize) => {
    OperationalDepartmentPurchaseRequestEmployee.init(
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
      modelName: "OperationalDepartmentPurchaseRequestEmployee",
      tableName: "operational_department_purchase_request_employee",
    }
  );

  return OperationalDepartmentPurchaseRequestEmployee;
};

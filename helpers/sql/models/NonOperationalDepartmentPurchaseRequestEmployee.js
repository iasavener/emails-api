const { DataTypes, Model } = require("sequelize");

class NonOperationalDepartmentPurchaseRequestEmployee extends Model {}

module.exports = (sequelize) => {
    NonOperationalDepartmentPurchaseRequestEmployee.init(
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
      modelName: "NonOperationalDepartmentPurchaseRequestEmployee",
      tableName: "non_operational_department_purchase_request_employee",
    }
  );

  return NonOperationalDepartmentPurchaseRequestEmployee;
};

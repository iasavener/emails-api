const { DataTypes, Model } = require("sequelize");

class ManagementPurchaseRequestEmployee extends Model {}

module.exports = (sequelize) => {
    ManagementPurchaseRequestEmployee.init(
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
      modelName: "ManagementPurchaseRequestEmployee",
      tableName: "management_purchase_request_employee",
    }
  );

  return ManagementPurchaseRequestEmployee;
};

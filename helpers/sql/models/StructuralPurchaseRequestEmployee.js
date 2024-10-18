const { DataTypes, Model } = require("sequelize");

class StructuralPurchaseRequestEmployee extends Model {}

module.exports = (sequelize) => {
  StructuralPurchaseRequestEmployee.init(
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
      modelName: "StructuralPurchaseRequestEmployee",
      tableName: "structural_purchase_request_employee",
    }
  );

  return StructuralPurchaseRequestEmployee;
};

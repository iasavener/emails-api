const { DataTypes, Model } = require("sequelize");

class ProjectPurchaseRequestEmployee extends Model {}

module.exports = (sequelize) => {
    ProjectPurchaseRequestEmployee.init(
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
      modelName: "ProjectPurchaseRequestEmployee",
      tableName: "project_purchase_request_employee",
    }
  );

  return ProjectPurchaseRequestEmployee;
};

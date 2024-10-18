const { DataTypes, Model } = require("sequelize");

class ExpenseNotesOfferRequestEmployee extends Model {}

module.exports = (sequelize) => {
    ExpenseNotesOfferRequestEmployee.init(
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
      modelName: "ExpenseNotesOfferRequestEmployee",
      tableName: "expense_notes_offer_request_employee",
    }
  );

  return ExpenseNotesOfferRequestEmployee;
};

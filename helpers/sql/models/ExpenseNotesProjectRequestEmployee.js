const { DataTypes, Model } = require("sequelize");

class ExpenseNotesProjectRequestEmployee extends Model {}

module.exports = (sequelize) => {
    ExpenseNotesProjectRequestEmployee.init(
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
      modelName: "ExpenseNotesProjectRequestEmployee",
      tableName: "expense_notes_project_request_employee",
    }
  );

  return ExpenseNotesProjectRequestEmployee;
};

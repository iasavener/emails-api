const { DataTypes, Model } = require('sequelize');

class TypeExpenseNote extends Model {}

module.exports = (sequelize) => {
    TypeExpenseNote.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'TypeExpenseNote',
    tableName: 'type_expense_note'
  });

  return TypeExpenseNote;
};
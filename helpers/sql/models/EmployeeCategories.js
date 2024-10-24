const { DataTypes, Model } = require('sequelize');

class EmployeeCategories extends Model {}

module.exports = (sequelize) => {
    EmployeeCategories.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cost: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    modelName: 'EmployeeCategories',
    tableName: 'employee_categories'
  });

  return EmployeeCategories;
};
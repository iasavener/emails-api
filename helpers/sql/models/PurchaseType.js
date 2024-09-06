const { DataTypes, Model } = require('sequelize');

class PurchaseType extends Model {}

module.exports = (sequelize) => {
    PurchaseType.init({
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
    },
    structual_purchase: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    project_purchase: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    management_purchase: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    department_purchase: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
  }, {
    sequelize,
    modelName: 'PurchaseType',
    tableName: 'purchase_type'
  });

  return PurchaseType;
};
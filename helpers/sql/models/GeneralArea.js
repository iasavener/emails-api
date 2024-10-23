const { DataTypes, Model } = require('sequelize');

class GeneralArea extends Model {}

module.exports = (sequelize) => {
  GeneralArea.init({
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
    director_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    operations: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    operations_support: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    transversal_services: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    business_development: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    quinetia: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'GeneralArea',
    tableName: 'general_areas'
  });

  return GeneralArea;
};
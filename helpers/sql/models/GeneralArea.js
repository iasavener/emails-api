const { DataTypes, Model } = require('sequelize');

class GeneralArea extends Model {}

module.exports = (sequelize) => {
  GeneralArea.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
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
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'GeneralArea',
    tableName: 'general_areas'
  });

  return GeneralArea;
};
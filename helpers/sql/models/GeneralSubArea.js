const { DataTypes, Model } = require('sequelize');

class GeneralSubArea extends Model {}

module.exports = (sequelize) => {
    GeneralSubArea.init({
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
    general_area_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    director_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    general_project_management: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    technical_direction: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
  }, {
    sequelize,
    modelName: 'GeneralSubArea',
    tableName: 'general_sub_areas'
  });

  return GeneralSubArea;
};
const { DataTypes, Model } = require('sequelize');

class PlatformSection extends Model {}

module.exports = (sequelize) => {
  PlatformSection.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'PlatformSection',
    tableName: 'platform_sections'
  });

  return PlatformSection;
};
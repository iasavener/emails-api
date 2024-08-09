const { DataTypes, Model } = require('sequelize');

class PlatformSubSection extends Model {}

module.exports = (sequelize) => {
  PlatformSubSection.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    platform_section_id: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'PlatformSubSection',
    tableName: 'platform_sub_sections'
  });

  return PlatformSubSection;
};
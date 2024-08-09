const { DataTypes, Model } = require('sequelize');

class PlatformSubSectionAllowed extends Model {}

module.exports = (sequelize) => {
  PlatformSubSectionAllowed.init({
    role_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    platform_sub_section_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    platform_section_id: {
      type: DataTypes.STRING,
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
    modelName: 'PlatformSubSectionAllowed',
    tableName: 'platform_sub_sections_allowed'
  });

  return PlatformSubSectionAllowed;
};
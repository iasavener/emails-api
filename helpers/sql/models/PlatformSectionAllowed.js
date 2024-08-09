const { DataTypes, Model } = require('sequelize');

class PlatformSectionAllowed extends Model {}

module.exports = (sequelize) => {
  PlatformSectionAllowed.init({
    role_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    platform_section_id: {
      type: DataTypes.STRING,
      primaryKey: true,
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
    modelName: 'PlatformSectionAllowed',
    tableName: 'platform_sections_allowed'
  });

  return PlatformSectionAllowed;
};
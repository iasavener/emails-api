const { DataTypes, Model } = require('sequelize');

class PlatformPermission extends Model {}

module.exports = (sequelize) => {
  PlatformPermission.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    key: {
      type: DataTypes.STRING,
      // allowNull: false
    },
    platform_sub_section_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    platform_section_id: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'PlatformPermission',
    tableName: 'platform_permissions'
  });

  return PlatformPermission;
};
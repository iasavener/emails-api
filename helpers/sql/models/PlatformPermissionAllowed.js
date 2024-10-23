const { DataTypes, Model } = require('sequelize');

class PlatformPermissionAllowed extends Model {}

module.exports = (sequelize) => {
  PlatformPermissionAllowed.init({
    role_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    platform_permission_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    platform_sub_section_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    platform_section_id: {
      type: DataTypes.STRING,
      allowNull: true
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
    modelName: 'PlatformPermissionAllowed',
    tableName: 'platform_permissions_allowed'
  });

  return PlatformPermissionAllowed;
};
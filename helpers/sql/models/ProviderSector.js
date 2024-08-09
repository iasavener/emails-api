const { DataTypes, Model } = require('sequelize');

class ProviderSector extends Model {}

module.exports = (sequelize) => {
  ProviderSector.init({
    provider_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    sector_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'ProviderSector',
    tableName: 'provider_sectors'
  });

  return ProviderSector;
};
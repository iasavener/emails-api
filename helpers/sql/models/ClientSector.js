const { DataTypes, Model } = require('sequelize');

class ClientSector extends Model {}

module.exports = (sequelize) => {
  ClientSector.init({
    client_id: {
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
    modelName: 'ClientSector',
    tableName: 'client_sectors'
  });

  return ClientSector;
};
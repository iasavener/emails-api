const { DataTypes, Model } = require('sequelize');

class Client extends Model {}

module.exports = (sequelize) => {
  Client.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    web: {
      type: DataTypes.STRING,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    nif: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    country: {
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
    },
    business_development: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Client',
    tableName: 'clients'
  });

  return Client;
};
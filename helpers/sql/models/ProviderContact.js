const { DataTypes, Model } = require('sequelize');

class ProviderContact extends Model {}

module.exports = (sequelize) => {
  ProviderContact.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    role: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: true
    },
    extension: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    language: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    provider: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'ProviderContact',
    tableName: 'provider_contacts'
  });

  return ProviderContact;
};
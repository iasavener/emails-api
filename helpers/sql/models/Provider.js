const { DataTypes, Model } = require('sequelize');

class Provider extends Model {}

module.exports = (sequelize) => {
  Provider.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    country: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    responsible: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nif: {
        type: DataTypes.STRING,
        allowNull: true
    },
    relation: {
      type: DataTypes.ENUM,
      values: ["A", "B"],
      defaultValue: "B",
      allowNull: false,
    },
    incorporation_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    logo: {
      type: DataTypes.STRING
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Provider',
    tableName: 'providers'
  });

  return Provider;
};
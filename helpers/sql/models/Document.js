const { DataTypes, Model } = require('sequelize');

class Document extends Model {}

module.exports = (sequelize) => {
  Document.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comunication: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    uploaded_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    mimetype: {
      type: DataTypes.STRING,
      allowNull: false
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deleted_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Document',
    tableName: 'documents'
  });

  return Document;
};
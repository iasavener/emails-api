const { DataTypes, Model } = require('sequelize');

class SupportArea extends Model {}

module.exports = (sequelize) => {
    SupportArea.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        notification_email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
  }, {
    sequelize,
    modelName: 'SupportArea',
    tableName: 'support_areas'
  });

  return SupportArea;
};
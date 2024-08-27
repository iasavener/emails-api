const { DataTypes, Model } = require('sequelize');

class OfferStage extends Model {}

module.exports = (sequelize) => {
    OfferStage.init({
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
    }
  }, {
    sequelize,
    modelName: 'OfferStage',
    tableName: 'offer_stages'
  });

  return OfferStage;
};
const { DataTypes, Model } = require('sequelize');

class OfferLossReason extends Model {}

module.exports = (sequelize) => {
    OfferLossReason.init({
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
    modelName: 'OfferLossReason',
    tableName: 'offer_loss_reasons'
  });

  return OfferLossReason;
};
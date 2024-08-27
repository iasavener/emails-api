const { DataTypes, Model } = require('sequelize');

class OfferRequest extends Model {}

module.exports = (sequelize) => {
  OfferRequest.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    offer_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    current_stage: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    next_stage: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    accepted_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'OfferRequest',
    tableName: 'offer_requests'
  });

  return OfferRequest;
};
const { DataTypes, Model } = require('sequelize');

class Offer extends Model {}

module.exports = (sequelize) => {
  Offer.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    client_id: {
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
    },
    probability: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    business_development: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    start_date: {
        type: DataTypes.DATE
    },
    completion_date: {
        type: DataTypes.DATE
    },
    follow_up_date: {
        type: DataTypes.DATE
    },
    stage: {
      type: DataTypes.INTEGER
    },
    loss_reason: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Offer',
    tableName: 'offers'
  });

  return Offer;
};
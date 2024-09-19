const { DataTypes, Model } = require('sequelize');

class Offer extends Model {}

module.exports = (sequelize) => {
  Offer.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    original_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    original_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    probability: {
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
    loss_reason_id: {
      type: DataTypes.INTEGER
    },
    revisions: {
      type: DataTypes.INTEGER
    },
    technician_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stage_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    origin_stage_id: {
      type: DataTypes.INTEGER
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    deleted_by: {
      type: DataTypes.INTEGER,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    competitor: {
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'Offer',
    tableName: 'offers'
  });

  return Offer;
};
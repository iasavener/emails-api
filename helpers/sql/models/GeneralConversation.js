const { DataTypes, Model } = require('sequelize');

class GeneralConversation extends Model {}

module.exports = (sequelize) => {
  GeneralConversation.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    last_message: {
        type: DataTypes.TEXT,
        defaultValue: null
    }
  }, {
    sequelize,
    modelName: 'GeneralConversation',
    tableName: 'general_conversations'
  });

  return GeneralConversation;
};
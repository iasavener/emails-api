const { DataTypes, Model } = require('sequelize');

class GeneralConversationMessage extends Model {}

module.exports = (sequelize) => {
    GeneralConversationMessage.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        general_conversation_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        employee_id: {
            type: DataTypes.INTEGER
        },
        query: {
            type: DataTypes.TEXT
        },
        answer: {
            type: DataTypes.TEXT
        },
        retried: {
            type: DataTypes.BOOLEAN
        },
        error: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        error_reason: {
            type: DataTypes.TEXT
        },
        replied_to: {
            type: DataTypes.INTEGER
        },
        audio: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        audio_file: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'GeneralConversationMessage',
        tableName: 'general_conversation_messages'
    });

  return GeneralConversationMessage;
};
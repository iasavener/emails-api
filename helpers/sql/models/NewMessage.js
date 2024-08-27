const { DataTypes, Model } = require('sequelize');

class NewMessage extends Model {}

module.exports = (sequelize) => {
    NewMessage.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        new_id: {
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
        title: {
            type: DataTypes.TEXT
        },
        retried: {
            type: DataTypes.BOOLEAN
        },
        content: {
            type: DataTypes.TEXT
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
        modelName: 'NewMessage',
        tableName: 'new_messages'
    });

  return NewMessage;
};
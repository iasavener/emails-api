const { DataTypes, Model } = require('sequelize');

class ExpenseNotesRequestAttachment extends Model {}

module.exports = (sequelize) => {
    ExpenseNotesRequestAttachment.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        expense_note_request_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        path: {
            type: DataTypes.STRING
        }
}, {
    sequelize,
    modelName: 'ExpenseNotesRequestAttachment',
    tableName: 'expense_notes_request_attachments'
});

return ExpenseNotesRequestAttachment;
};
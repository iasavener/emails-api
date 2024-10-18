const { DataTypes, Model } = require('sequelize');

class ExpenseNotesProjectRequestAttachment extends Model {}

module.exports = (sequelize) => {
    ExpenseNotesProjectRequestAttachment.init({
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
    modelName: 'ExpenseNotesProjectRequestAttachment',
    tableName: 'expense_notes_project_request_attachments'
});

return ExpenseNotesProjectRequestAttachment;
};
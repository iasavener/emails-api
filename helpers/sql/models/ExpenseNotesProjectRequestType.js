const { DataTypes, Model } = require('sequelize');

class ExpenseNotesProjectRequestType extends Model {}

module.exports = (sequelize) => {
    ExpenseNotesProjectRequestType.init({
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
        expense_type_id: {
            type: DataTypes.INTEGER
        }
}, {
    sequelize,
    modelName: 'ExpenseNotesProjectRequestType',
    tableName: 'expense_notes_project_request_types'
});

return ExpenseNotesProjectRequestType;
};
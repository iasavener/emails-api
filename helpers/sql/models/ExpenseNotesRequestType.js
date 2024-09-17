const { DataTypes, Model } = require('sequelize');

class ExpenseNotesRequestType extends Model {}

module.exports = (sequelize) => {
    ExpenseNotesRequestType.init({
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
    modelName: 'ExpenseNotesRequestType',
    tableName: 'expense_notes_request_types'
});

return ExpenseNotesRequestType;
};
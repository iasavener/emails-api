const { DataTypes, Model } = require('sequelize');

class ExpenseNotesOfferRequestType extends Model {}

module.exports = (sequelize) => {
    ExpenseNotesOfferRequestType.init({
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
    modelName: 'ExpenseNotesOfferRequestType',
    tableName: 'expense_notes_offer_request_types'
});

return ExpenseNotesOfferRequestType;
};
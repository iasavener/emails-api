const { DataTypes, Model } = require('sequelize');

class ExpenseNotesOfferRequestAttachment extends Model {}

module.exports = (sequelize) => {
    ExpenseNotesOfferRequestAttachment.init({
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
    modelName: 'ExpenseNotesOfferRequestAttachment',
    tableName: 'expense_notes_offer_request_attachments'
});

return ExpenseNotesOfferRequestAttachment;
};
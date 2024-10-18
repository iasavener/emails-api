const { DataTypes, Model } = require('sequelize');

class StructuralPurchaseRequestAttachment extends Model {}

module.exports = (sequelize) => {
    StructuralPurchaseRequestAttachment.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        purchase_request_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        path: {
            type: DataTypes.STRING
        }
}, {
    sequelize,
    modelName: 'StructuralPurchaseRequestAttachment',
    tableName: 'structural_purchase_request_attachments'
});

return StructuralPurchaseRequestAttachment;
};
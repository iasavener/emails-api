const { DataTypes, Model } = require('sequelize');

class ManagementPurchaseRequestAttachment extends Model {}

module.exports = (sequelize) => {
    ManagementPurchaseRequestAttachment.init({
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
    modelName: 'ManagementPurchaseRequestAttachment',
    tableName: 'management_purchase_request_attachments'
});

return ManagementPurchaseRequestAttachment;
};
const { DataTypes, Model } = require('sequelize');

class NonOperationalDepartmentPurchaseRequestAttachment extends Model {}

module.exports = (sequelize) => {
    NonOperationalDepartmentPurchaseRequestAttachment.init({
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
    modelName: 'NonOperationalDepartmentPurchaseRequestAttachment',
    tableName: 'non_operational_department_purchase_request_attachments'
});

return NonOperationalDepartmentPurchaseRequestAttachment;
};
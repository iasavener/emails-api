const { DataTypes, Model } = require('sequelize');

class OperationalDepartmentPurchaseRequestAttachment extends Model {}

module.exports = (sequelize) => {
    OperationalDepartmentPurchaseRequestAttachment.init({
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
    modelName: 'OperationalDepartmentPurchaseRequestAttachment',
    tableName: 'operational_department_purchase_request_attachments'
});

return OperationalDepartmentPurchaseRequestAttachment;
};
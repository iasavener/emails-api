const { DataTypes, Model } = require('sequelize');

class ProjectPurchaseRequestAttachment extends Model {}

module.exports = (sequelize) => {
    ProjectPurchaseRequestAttachment.init({
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
    modelName: 'ProjectPurchaseRequestAttachment',
    tableName: 'project_purchase_request_attachments'
});

return ProjectPurchaseRequestAttachment;
};
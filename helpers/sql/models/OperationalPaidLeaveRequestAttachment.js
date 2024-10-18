const { DataTypes, Model } = require('sequelize');

class OperationalPaidLeaveRequestAttachment extends Model {}

module.exports = (sequelize) => {
    OperationalPaidLeaveRequestAttachment.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        paid_leave_request_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        path: {
            type: DataTypes.STRING
        }
}, {
    sequelize,
    modelName: 'OperationalPaidLeaveRequestAttachment',
    tableName: 'operational_paid_leave_request_attachments'
});

return OperationalPaidLeaveRequestAttachment;
};
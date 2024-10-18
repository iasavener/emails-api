const { DataTypes, Model } = require('sequelize');

class NonOperationalPaidLeaveRequestAttachment extends Model {}

module.exports = (sequelize) => {
    NonOperationalPaidLeaveRequestAttachment.init({
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
    modelName: 'NonOperationalPaidLeaveRequestAttachment',
    tableName: 'non_operational_paid_leave_request_attachments'
});

return NonOperationalPaidLeaveRequestAttachment;
};
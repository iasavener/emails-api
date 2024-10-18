const sequelize = require('sequelize');
const { DataTypes, Model } = require('sequelize');

class Notification extends Model {}

module.exports = (sequelize) => {
    Notification.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        recipient_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sender_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        reply: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        is_read: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        project_id: {
            type: DataTypes.STRING
        },
        offer_id: {
            type: DataTypes.STRING
        },
        client_id: {
            type: DataTypes.INTEGER
        },
        expense_note_project_request_id: {
            type: DataTypes.INTEGER
        },
        expense_note_offer_request_id: {
            type: DataTypes.INTEGER
        },
        work_tool_request_id: {
            type: DataTypes.INTEGER
        },
        operational_software_installation_request_id: {
            type: DataTypes.INTEGER
        },
        non_operational_software_installation_request_id: {
            type: DataTypes.INTEGER
        },
        structural_purchase_request_id: {
            type: DataTypes.INTEGER
        },
        project_purchase_request_id: {
            type: DataTypes.INTEGER
        },
        management_purchase_request_id: {
            type: DataTypes.INTEGER
        },
        operational_department_purchase_request_id: {
            type: DataTypes.INTEGER
        },
        non_operational_department_purchase_request_id: {
            type: DataTypes.INTEGER
        },
        operational_holiday_request_id: {
            type:  DataTypes.INTEGER
        },
        non_operational_holiday_request_id: {
            type:  DataTypes.INTEGER
        },
        operational_paid_leave_request_id: {
            type:  DataTypes.INTEGER
        },
        non_operational_paid_leave_request_id: {
            type:  DataTypes.INTEGER
        },
        saverteca_request_id: {
            type:  DataTypes.INTEGER
        },
        information_audio_file: {
            type: DataTypes.STRING
        },
        created_by: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Notification',
        tableName: 'notifications'
    });

    return Notification;
}
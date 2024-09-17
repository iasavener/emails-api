const { DataTypes, Model } = require('sequelize');

class ExpenseNotesRequest extends Model {}

module.exports = (sequelize) => {
    ExpenseNotesRequest.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        employee_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        project_id: {
            type: DataTypes.STRING
        },
        offer_id: {
            type: DataTypes.STRING
        },
        date: {
            type: DataTypes.DATE
        },
        amount: {
            type: DataTypes.INTEGER
        },
        reason: {
            type: DataTypes.TEXT
        },
        accepted_by_pm: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        rejected_by_pm: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        pm_acceptance_date: {
            type: DataTypes.DATE
        },
        pm_rejection_date: {
            type: DataTypes.DATE
        },
        accepted_by_admon: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        rejected_by_admon: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        admon_acceptance_date: {
            type: DataTypes.DATE
        },
        admon_rejection_date: {
            type: DataTypes.DATE
        },
        accepted_by_od: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        rejected_by_od: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        od_acceptance_date: {
            type: DataTypes.DATE
        },
        od_rejection_date: {
            type: DataTypes.DATE
        },
        accepted_by_manager: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        rejected_by_manager: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        manager_acceptance_date: {
            type: DataTypes.DATE
        },
        manager_rejection_date: {
            type: DataTypes.DATE
        },
        accepted_by_gd: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        rejected_by_gd: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        gd_acceptance_date: {
            type: DataTypes.DATE
        },
        gd_rejection_date: {
            type: DataTypes.DATE
        },
        rejection_reason: {
            type: DataTypes.TEXT
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        audio_file: {
            type: DataTypes.STRING
        },
        rejection_audio_file: {
            type: DataTypes.STRING
        }
}, {
    sequelize,
    modelName: 'ExpenseNotesRequest',
    tableName: 'expense_notes_requests'
});

return ExpenseNotesRequest;
};
    const { DataTypes, Model } = require('sequelize');

    class WorkToolRequest extends Model {}

    module.exports = (sequelize) => {
        WorkToolRequest.init({
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
            location: {
                type: DataTypes.STRING
            },
            date: {
                type: DataTypes.DATE
            },
            work_tool_id: {
                type: DataTypes.INTEGER
            },
            quantity: {
                type: DataTypes.INTEGER
            },
            reason: {
                type: DataTypes.TEXT
            },
            accepted_by_gs: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            rejected_by_gs: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            gs_acceptance_date: {
                type: DataTypes.DATE
            },
            gs_rejection_date: {
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
        modelName: 'WorkToolRequest',
        tableName: 'work_tool_requests'
    });

    return WorkToolRequest;
    };
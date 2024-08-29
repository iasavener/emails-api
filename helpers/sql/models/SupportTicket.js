const { DataTypes, Model } = require('sequelize');

class SuportTicket extends Model {}

module.exports = (sequelize) => {
    SuportTicket.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        migrated_by: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        migration_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        original_support_area: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        support_area: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        created_by: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        updated_by: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        accepted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        accepted_by: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        acceptance_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        rejected: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        rejected_by: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        rejection_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        in_progress: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        in_progress_by: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        started_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        finished: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        finished_by: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        finished_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        issue: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        attachment: {
            type: DataTypes.STRING
        },
        resume: {
            type: DataTypes.TEXT
        },
        audio_file: {
            type: DataTypes.STRING
        },
        information: {
            type: DataTypes.TEXT
        },
        rejection_reason: {
            type: DataTypes.TEXT
        },
        information_audio_file: {
            type: DataTypes.STRING
        },
        rejection_audio_file: {
            type: DataTypes.STRING
        }
  }, {
    sequelize,
    modelName: 'SuportTicket',
    tableName: 'support_tickets'
  });

  return SuportTicket;
};
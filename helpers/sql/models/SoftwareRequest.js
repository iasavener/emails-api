const { DataTypes, Model } = require('sequelize');

class SoftwareRequest extends Model {}

module.exports = (sequelize) => {
    SoftwareRequest.init({
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
        software: {
            type: DataTypes.TEXT
        },
        version: {
            type: DataTypes.TEXT
        },
        work_station: {
            type: DataTypes.TEXT
        },
        server_location: {
            type: DataTypes.TEXT
        },
        reason: {
            type: DataTypes.TEXT
        },
        accepted_by_department_director: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        rejected_by_department_director: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        department_director_acceptance_date: {
            type: DataTypes.DATE
        },
        department_director_rejection_date: {
            type: DataTypes.DATE
        },
        accepted_by_td: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        rejected_by_td: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        td_acceptance_date: {
            type: DataTypes.DATE
        },
        td_rejection_date: {
            type: DataTypes.DATE
        },
        processed_by_it: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        rejected_by_it: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        it_processing_date: {
            type: DataTypes.DATE
        },
        it_rejection_date: {
            type: DataTypes.DATE
        },
        rejection_reason: {
            type: DataTypes.TEXT
        }
  }, {
    sequelize,
    modelName: 'SoftwareRequest',
    tableName: 'software_requests'
  });

  return SoftwareRequest;
};
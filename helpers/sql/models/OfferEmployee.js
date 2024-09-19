const { DataTypes, Model } = require('sequelize');

class OfferEmployee extends Model {}

module.exports = (sequelize) => {
    OfferEmployee.init({
        offer_id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        employee_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        created_by: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        updated_by: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        deleted_by: {
            type: DataTypes.INTEGER,
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        sequelize,
        modelName: 'OfferEmployee',
        tableName: 'offer_employees'
    });

  return OfferEmployee;
};
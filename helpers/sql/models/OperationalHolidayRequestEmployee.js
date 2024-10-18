const { DataTypes, Model } = require("sequelize");

class OperationalHolidayRequestEmployee extends Model {}

module.exports = (sequelize) => {
    OperationalHolidayRequestEmployee.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      request_id: {
        type: DataTypes.INTEGER,
      },
      employee_id: {
        type: DataTypes.INTEGER,
      },
      step: {
        type: DataTypes.INTEGER
      }
    },
    {
      sequelize,
      modelName: "OperationalHolidayRequestEmployee",
      tableName: "operational_holiday_request_employee",
    }
  );

  return OperationalHolidayRequestEmployee;
};

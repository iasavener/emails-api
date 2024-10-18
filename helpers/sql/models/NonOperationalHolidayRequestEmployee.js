const { DataTypes, Model } = require("sequelize");

class NonOperationalHolidayRequestEmployee extends Model {}

module.exports = (sequelize) => {
    NonOperationalHolidayRequestEmployee.init(
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
      modelName: "NonOperationalHolidayRequestEmployee",
      tableName: "non_operational_holiday_request_employee",
    }
  );

  return NonOperationalHolidayRequestEmployee;
};

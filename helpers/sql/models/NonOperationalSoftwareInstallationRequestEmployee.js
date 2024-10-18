const { DataTypes, Model } = require("sequelize");

class NonOperationalSoftwareInstallationRequestEmployee extends Model {}

module.exports = (sequelize) => {
    NonOperationalSoftwareInstallationRequestEmployee.init(
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
      modelName: "NonOperationalSoftwareInstallationRequestEmployee",
      tableName: "non_operational_software_installation_request_employee",
    }
  );

  return NonOperationalSoftwareInstallationRequestEmployee;
};

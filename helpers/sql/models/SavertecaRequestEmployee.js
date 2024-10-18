const { DataTypes, Model } = require("sequelize");

class SavertecaRequestEmployee extends Model {}

module.exports = (sequelize) => {
    SavertecaRequestEmployee.init(
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
      modelName: "SavertecaRequestEmployee",
      tableName: "saverteca_request_employee",
    }
  );

  return SavertecaRequestEmployee;
};

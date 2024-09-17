const { DataTypes, Model } = require("sequelize");

class CvRequest extends Model {}

module.exports = (sequelize) => {
  CvRequest.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
      },
      pdf_path: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      docx_path: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      employee_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      created_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      updated_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "CvRequest",
      tableName: "cv_request",
    });

  return CvRequest;
};

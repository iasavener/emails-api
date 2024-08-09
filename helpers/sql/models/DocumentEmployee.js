const { DataTypes, Model } = require('sequelize');

class DocumentEmployee extends Model {}

module.exports = (sequelize) => {
  DocumentEmployee.init({
    document_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    employee_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'DocumentEmployee',
    tableName: 'document_employees'
  });

  return DocumentEmployee;
};
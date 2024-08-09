const { DataTypes, Model } = require('sequelize');

class DepartmentArea extends Model {}

module.exports = (sequelize) => {
  DepartmentArea.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    department_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    director_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'DepartmentArea',
    tableName: 'department_areas',
  });

  return DepartmentArea;
};
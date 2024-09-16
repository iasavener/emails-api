const { DataTypes, Model } = require('sequelize');

class Department extends Model {}

module.exports = (sequelize) => {
  Department.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    director_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    general_area_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    general_sub_area_id: {
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
    modelName: 'Department',
    tableName: 'departments'
  });

  return Department;
};
const { DataTypes, Model } = require('sequelize');

class WorkPackage extends Model {}

module.exports = (sequelize) => {
  WorkPackage.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'WorkPackage',
    tableName: 'work_packages',
  });

  return WorkPackage;
};
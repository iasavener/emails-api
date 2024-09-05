const { DataTypes, Model } = require('sequelize');

class WorkTool extends Model {}

module.exports = (sequelize) => {
    WorkTool.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'WorkTool',
    tableName: 'work_tool'
  });

  return WorkTool;
};
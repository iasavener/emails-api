const { DataTypes, Model } = require('sequelize');

class TypeVacation extends Model {}

module.exports = (sequelize) => {
    TypeVacation.init({
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
    modelName: 'TypeVacation',
    tableName: 'type_vacation'
  });

  return TypeVacation;
};
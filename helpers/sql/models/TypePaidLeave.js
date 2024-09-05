const { DataTypes, Model } = require('sequelize');

class TypePaidLeave extends Model {}

module.exports = (sequelize) => {
    TypePaidLeave.init({
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
    modelName: 'TypePaidLeave',
    tableName: 'type_paid_leave'
  });

  return TypePaidLeave;
};
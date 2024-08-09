const { DataTypes, Model } = require('sequelize');

class Deliverable extends Model {}

module.exports = (sequelize) => {
  Deliverable.init({
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
      allowNull: false
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Deliverable',
    tableName: 'deliverables'
  });

  return Deliverable;
};
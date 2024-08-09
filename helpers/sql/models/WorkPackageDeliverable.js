const { DataTypes, Model } = require('sequelize');

class WorkPackageDeliverable extends Model {}

module.exports = (sequelize) => {
  WorkPackageDeliverable.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    work_package_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    deliverable_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    modelName: 'WorkPackageDeliverable',
    tableName: 'work_package_deliverables',
    indexes: [
      {
        unique: true,
        fields: ['work_package_id', 'deliverable_id', 'tag_id']
      }
    ]
  });

  return WorkPackageDeliverable;
};
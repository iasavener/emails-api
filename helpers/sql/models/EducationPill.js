const { DataTypes, Model } = require('sequelize');

class EducationPill extends Model {}

module.exports = (sequelize) => {
    EducationPill.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    video_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    thumbnail_url: {
      type: DataTypes.STRING,
      allowNull: false,
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
    modelName: 'EducationPill',
    tableName: 'education_pills'
  });

  return EducationPill;
};
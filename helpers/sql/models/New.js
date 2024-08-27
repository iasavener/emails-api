const { DataTypes, Model } = require('sequelize');

class New extends Model {}

module.exports = (sequelize) => {
  New.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    main_image_path: {
        type: DataTypes.STRING,
        allowNull: false
    },
    parallax_image_path: {
        type: DataTypes.STRING,
        allowNull: false
    },
    carousel_images_path: {
        type: DataTypes.STRING
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    updated_by: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    published_by: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    published: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    publication_date: {
        type: DataTypes.DATE
    },
    url: {
        type: DataTypes.STRING
    },
    post_id: {
        type: DataTypes.INTEGER
    },
    title: {
        type: DataTypes.TEXT
    },
    content: {
        type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'New',
    tableName: 'news'
  });

  return New;
};
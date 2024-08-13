const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mydb3', 'root', 'pass', {
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
    define: {
        underscored: true,
        freezeTableName: true
    },
    logging: console.log
});

module.exports = { sequelize };
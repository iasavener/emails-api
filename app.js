const express = require('express');
const path = require ('path');
const bodyParser = require('body-parser');
const app = express();
const Config = require('./config');
const MongoService = require("./helpers/mongodb/MongoService");
const cors = require("cors");
const routes = require("./routes");

const startServer = async () => {

    await MongoService.init();
    try {
        await sequelize.authenticate();
        await sequelize.sync({});
        console.log('Conexión con la base de datos general establecida con éxito.');
    } catch (error) {
        console.error('Error al conectar o sincrizar la base de datos :', error);
    }

    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json());
    app.use(cors());
    
    app.use('/', routes);
    
    app.use(express.static(path.join(__dirname, 'public')));
        
    app.listen(Config.PORT, ()=>{
        console.log('Escuchando por el puerto 3002');
    })
}


startServer();

const express = require('express');
const path = require ('path');
const bodyParser = require('body-parser');
const EmailsService = require('./entities/emails/EmailsService');
const app = express();
const Database = require('./Database')
const Config = require('./config');
const MongoService = require("./database/MongoService");
const cors = require("cors");
const routes = require("./routes");

MongoService.init();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(cors());

app.use('/', routes);

app.use(express.static(path.join(__dirname, 'public')));

const syncAllEmails = async () => {
    try {
        console.log("Sincronizando emails para todos los usuarios");
        const users = Database.getUsers();
        const usersToSync = users.filter((user) => user.id !== 1);
      
        for (const user of usersToSync) {
            await EmailsService.syncAllEmailsForUser(user);
            await EmailsService.syncReadEmailsForUser(user);
        }
    } catch (error) {
        console.error(error)
        // TODO (PENDIENTE DE DECIDIR): ENVIAR NOTIFICACIÓN DE FALLO O REGISTRAR EVENTO EN BASE DE DATOS
    }
}

// syncAllEmails()

// setInterval(syncAllEmails, 100000);

app.listen(Config.PORT, ()=>{
    console.log('Escuchando por el puerto 3002');
})




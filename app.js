const express = require('express');
const path = require ('path');
const bodyParser = require('body-parser');
const EmailsService = require('./entities/emails/EmailsService');
const app = express();
const Config = require('./config');
const MongoService = require("./helpers/mongodb/MongoService");
const cors = require("cors");
const routes = require("./routes");
const { Employee, sequelize } = require('./helpers/sql/associations');
const { decryptFields } = require('./helpers/mongodb/MongoUtils');

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
    
    const syncAllEmails = async () => {
        try {
            console.log("Sincronizando emails para todos los empleados");
            const employees = await MongoService.getEmployees();
            for (const employee of employees) {
                const decryptedEmployee = decryptFields(employee, ['password']);
                const employeeInformation = await Employee.findOne({where: {id: employee.employee_id}});
                await EmailsService.syncAllEmailsForEmployee(employee.employee_id, employeeInformation.dataValues.email, decryptedEmployee.password);
                await EmailsService.syncReadEmailsForEmployee(employee.employee_id, employeeInformation.dataValues.email, decryptedEmployee.password);
            }

        } catch (error) {
            console.error(error)
        }
    }
    
    // syncAllEmails()
    
    // setInterval(syncAllEmails, 100000);
    
    app.listen(Config.PORT, ()=>{
        console.log('Escuchando por el puerto 3002');
    })
}


startServer();

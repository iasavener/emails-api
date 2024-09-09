const {Router} = require('express');
const router = Router();
const path = require('path');
const EmailsController = require('../entities/emails/EmailsController');
require('dotenv').config();
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads/'));
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}--${file.originalname}`);
    }
});

const upload = multer({storage: storage});

const memoryStorage = multer.memoryStorage();
const uploadMemory = multer({ storage: memoryStorage });


router.get('/', AuthMiddleware.checkToken, async (req, res)=> {
    await EmailsController.getEmails(req, res);
});

router.get('/configuration', AuthMiddleware.checkToken, async (req, res)=> {
    await EmailsController.getEmailConfiguration(req, res);
});

router.patch('/configuration', AuthMiddleware.checkToken, async (req, res)=> {
    await EmailsController.updateEmailConfiguration(req, res);
});

router.post('/:uid/discard', AuthMiddleware.checkToken, async (req, res)=> {
    await EmailsController.discardEmail(req, res);
});

router.post('/:uid/save', AuthMiddleware.checkToken, async (req, res)=> {
    await EmailsController.saveEmail(req, res)
});

router.post('/notify-employees', AuthMiddleware.checkToken, uploadMemory.single('attachment'), async (req, res)=> {
    await EmailsController.notify(req, res);
});

router.get("/status", function status(req, res) {
    return res.json({
      app: APP_NAME,
      version: VERSION,
    });
  });

  
/*
//ruta para filtrar correos
router.get('/search-emails', async (req, res) => {
    let {folder = 'INBOX', query} = req.query;
    if(!query) {
        return res.status(400).send('Se requiere un parámetro de consulta')
    }
   

    const config = {
        imap: {
            user:  process.env.USER,
            password:  process.env.PASS, 
            host: Config.IMAP_EMAIL_SERVER,
            port: 993,
            tls: true,
            authTimeout: 3000
        }
    };

    try {
        const connection = await imaps.connect(config);
        const boxes = await connection.getBoxes();

        const flattenedBoxes = flattenBoxes(boxes);

        const matchedFolder = flattenedBoxes.find(box => box.name === folder);
        if (!matchedFolder){
            return res.status(400).send('Carpeta no valida');
        } 

    

        await connection.openBox(`INBOX.${matchedFolder.name}`);
        query = moment(query, 'DD-MM-YYYY').toDate();

       
        const searchCriteria = [
            ['OR',
                ['FROM', query],
                ['ON', query]
            ]
        ];
       
        console.log(searchCriteria)


        const fetchOptions = {
            bodies: '',
            markSeen: false,
        };

        const results = await connection.search(searchCriteria, fetchOptions);

        const emails = await Promise.all(results.map(async res => {
            const email = await simpleParser(res.parts[0].body);

            const from =  email.from.value[0].address;
            const subject = email.subject;
            const date = moment(email.date).format('DD-MM-YYYY');
            const to = email.to.text;

            const attachments = email.attachments.map(att => ({
                filename: att.filename,
                contentType: att.contentType,
                size: att.size,
                content: att.content.toString('base64')
            }));

            return {from, subject, date, to, attachments};
            
        }));

        const filteredEmails = emails.filter(email => email !== null).map(email => ({
            from: email.from,
            subject: email.subject,
            date: email.date
        }));

        res.status(200).json({emails:filteredEmails});
    

} catch (error) {
    console.error('Error', error);
    res.status(500).send('Error buscando correos')
}
});


//ruta para enviar un correo
router.post('/send-email',upload.array('attachments'), async (req, res)=> {
    const {to, subject, message} = req.body;

    let empleado = 'beatriz.jarauta'
    const contentHTML = `<p>${message}</p>`;


    function obtenerFirma(empleado){
        let firmaPath = path.join('signatures', `${empleado}.html`);
        console.log(firmaPath)


        try{
            return fs.readFileSync(firmaPath, 'utf-8');
        }catch (error) {
            console.error(`No se pudo leer la firma para el empleado: ${empleado}`)
            return '';
        }
    }

    let firmaHTML = obtenerFirma(empleado)

    

    
    let transporter = nodemailer.createTransport({
        host: Config.IMAP_EMAIL_SERVER,
        port: 465,
        secure: true,
        auth: {
            user:  process.env.USER,
            pass: process.env.PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    try {
        const attachments = req?.files?.map(file => ({
            filename: file.originalname,
            path: file.path
        }));

    let info = await transporter.sendMail({

        from:  process.env.USER,
        to: to,
        subject: subject,
        html: `${contentHTML}<br><br>${firmaHTML}`
        // attachments: attachments

    });

    console.log('Message sent: ', info.messageId);
    res.status(200).send('Correo enviado correctamente');
} catch(error) {
    console.error(error);
    res.status(500).send('error mandando mail');
 } //finally {
//     req.files.forEach(file => {
//         fs.unlink(file.path, err => {
//             if (err) {
//                 console.error('Error eliminando archivo')
//             }
//         });
//     });
// }
});

//ruta para eliminar un correo(va a la carpeta trash)/ si lo cambio a .delete se borra de forma definitiva
router.post('/delete-email', async (req, res)=> {
    const {uid, sourceFolder} = req.body;//solo habria que pasar el uid para hacer borrado definitivo
    const trashFolder = 'Trash';

    const config = {
        imap: {
            user:  process.env.USER,
            password:  process.env.PASS, 
            host: Config.IMAP_EMAIL_SERVER,
            port: 993,
            tls: true,
            authTimeout: 3000
        }
    };

    try{
        const connection = await imaps.connect(config);
        const fullSourcePath = sourceFolder.startsWith('INBOX') ? sourceFolder : `INBOX.${sourceFolder}`;

        await  connection.openBox(fullSourcePath);
        await connection.moveMessage(uid, `INBOX.${trashFolder}`);

        res.status(200).json('Email borrado correctamente');

    } catch (error) {
        console.error('error eliminando correo', error);
        res.status(500).json(error.message);
    }
});

//ruta para listar las carpetas del correo
router.get('/list-folders', async (req, res) => {
    const config = {
        imap: {
            user:  process.env.USER,
            password:  process.env.PASS,
            host: Config.IMAP_EMAIL_SERVER,
            port: 993,
            tls: true,
            authTimeout: 3000
        }
    };
    

    try {
        const connection = await imaps.connect(config);
        const boxes = await connection.getBoxes();

        const flattenedBoxes = flattenBoxes(boxes);

        res.status(200).json(flattenedBoxes); 
    } catch (error) {
        console.error('Error listando carpetas', error);
        res.status(500).send('Error listando carpetas');
    }
    
});

//funcion para aplanar la estructura de las carpetas
function flattenBoxes(boxes, parent = ''){
    let result = [];
    for (let [key, value] of Object.entries(boxes)){

        let path = parent ? `${parent}/${key}`: key;
        result.push({name: key, fullPath: path})
     
        if(value.children){
            result = result.concat(flattenBoxes(value.children, path));
        }
        // console.log("esto es el resultado",result);


    }
    return result;
};


//ruta para mover un correo a una carpeta
router.post('/move-email', async (req, res) => {
    const {uid, sourceFolder, destinationFolder} = req.body;

    if(!uid || !sourceFolder || !destinationFolder){
        return res.status(400).send('Faltan parametros');
    }
    console.log(uid, sourceFolder, destinationFolder);


    const config = {
        imap: {
            user:  process.env.USER,
            password:  process.env.PASS,
            host:  Config.IMAP_EMAIL_SERVER,
            port: 993,
            tls: true,
            authTimeout: 3000
        }
    };

    try {
        const connection = await imaps.connect(config);
        const boxes = await connection.getBoxes();

        const fullDestinationPath = destinationFolder.startsWith('INBOX') ? destinationFolder: `INBOX.${destinationFolder}`;
       
        
        if (!Object.keys(boxes).includes(fullDestinationPath) && 
            !Object.keys(boxes.INBOX.children).includes(destinationFolder)){
             return res.status(400).send('carpeta de destino no valida');
         }
         
        await connection.openBox(`INBOX.${sourceFolder}`);
        await connection.moveMessage(uid,fullDestinationPath);
        res.status(200).send('Correo movido correctamente');
       
    } catch (error) {
        console.error('Error moviendo correo', error);
        res.status(500).send('Error moviendo correo');
    }
});

//ruta para reenviar correos

router.post('/forward-email',upload.none(), async (req, res)=> {
    const {uid, forwardTo} = req.body;

    const config = {
        imap: {
            user:  process.env.USER,
            password: process.env.PASS,
            host:  Config.IMAP_EMAIL_SERVER,
            port: 993,
            tls: true,
            authTimeout: 3000
        }
    };

    try {
        const connection = await imaps.connect(config);
        await connection.openBox('INBOX');

        const searchCriteria = [['UID', uid]];
        const fetchOptions = {
            bodies: ['HEADER', 'TEXT'],
            struct: true
        };
        const results = await connection.search(searchCriteria, fetchOptions);

        if(results.length === 0) {
            return res.status(404).send('Correo no encontrado');
        }

        const email = results[0];
        const header = email.parts.find( part => part.which === 'HEADER').body;
        const body = email.parts.find(part => part.which === 'TEXT').body;

        const contentHTML =
        `<h1>Mensaje reenviado</h1>
        <ul>
            <li>Asunto: ${header.subject[0]}</li>
        </ul>
        <p>${body}</p>
        `;

        let transporter = nodemailer.createTransport({
            host:  Config.IMAP_EMAIL_SERVER,
            port: 465,
            secure: true,
        auth: {
            user:  process.env.USER,
            pass:  process.env.PASS
        },
        tls: {
            rejectUnauthorized: false
        }
        });

        let info = await transporter.sendMail({
            from:  process.env.USER,
            to: forwardTo,
            subject: `Fwd: ${header.subject[0]}`,
            html: contentHTML
        });

        console.log('Correo reenviado: ', info.messageId);
        res.status(200).send('Correo reenviado correctamente');
    } catch (error) {
        console.error('Error reenviando correo',error);
        res.status(500).send('Errpr reemviando correo');
    }

})

//ruta para archivar correos
router.post('/archive-email', async (req, res)=> {
    const {uid, sourceFolder} = req.body;
    const archiveFolder = 'Archives';

    const config = {
        imap: {
            user:  process.env.USER,
            password:  process.env.PASS,
            host: Config.IMAP_EMAIL_SERVER,
            port: 993,
            tls: true,
            authTimeout: 3000
        }
    };

    try {
        const connection = await imaps.connect(config);
        await connection.openBox(sourceFolder);
        const boxes = await connection.getBoxes();
        if (!boxes[archiveFolder] && !boxes.INBOX.children[archiveFolder]) {
            await connection.addBox(`INBOX.${archiveFolder}`);
        }

        await connection.moveMessage(uid, `INBOX.${archiveFolder}`);
        res.status(200).send('Correo archivado correctamente');
    } catch (error) {
        console.error('Error archivando correo', error);
        res.status(500).send('Error archivando correo');
    }
})

//ruta para marcar correo no deseado
router.post('/mark-as-spam', async (req, res) => {
    const {uid, sourceFolder} = req.body;
    const spamFolder = 'INBOX.Spam';

    const config = {
        imap: {
            user:  process.env.USER,
            password:  process.env.PASS,
            host: Config.IMAP_EMAIL_SERVER,
            port: 993,
            tls: true,
            authTimeout: 3000
        }
    };

    try {
        const connection = await imaps.connect(config);
        await connection.openBox(sourceFolder);
        await connection.moveMessage(uid, spamFolder);

        res.status(200).send('Correo marcado como no deseado');

    } catch (error) {
        console.error('Error marcando correo como no deseado', error);
        res.status(500).send('Error marcando correo como no deseado')
    }

});

//ruta para descargar email formato Email
router.get('/download-email', async (req, res) => {
    const { uid, folder = 'INBOX' } = req.query;
 
    if (!uid || isNaN(uid)) {
        return res.status(400).send('UID no válida');
    }
 
    const config = {
        imap: {
            user: process.env.USER,
            password: process.env.PASS,
            host: Config.IMAP_EMAIL_SERVER,
            port: 993,
            tls: true,
            authTimeout: 3000
        }
    };
 
    try {
        const connection = await imaps.connect(config);
        const fullSourcePath = folder.startsWith('INBOX') ? folder : `INBOX.${folder}`;
 
        await connection.openBox(fullSourcePath);
 
        const searchCriteria = [['UID', parseInt(uid)]];
        const fetchOptions = {
            bodies: [''],
            struct: true
        };
 
        const results = await connection.search(searchCriteria, fetchOptions);
 
        if (results.length === 0) {
            return res.status(404).send('Correo no encontrado');
        }
 
        const email = results[0];
 
        const savePath = path.resolve(__dirname, '../../../downloads', `email-${email.attributes.uid}.eml`);
        const parts = imaps.getParts(email.attributes.struct);
        const attachments = parts.filter(part => part.disposition && part.disposition.type === 'attachment');
 
        if (attachments.length === 0) {
            return res.status(400).send('No se encontraron adjuntos en el correo');
        }
 
        // Guardar el correo principal
        fs.writeFile(savePath, email.parts[0].body, 'utf8', (err) => {
            if (err) {
                console.error('Error al guardar el correo:', err);
                res.status(500).send('Error al guardar el archivo');
            } else {
                console.log(`Correo guardado en ${savePath}`);
            }
        });
 
        // Guardar archivos adjuntos
        for (const attachment of attachments) {
            try {
                const partData = await connection.getPartData(email, attachment);
                const attachmentSavePath = path.resolve(__dirname, '../../../downloads', attachment.disposition.params.filename);
                await new Promise((resolve, reject) => {
                    fs.writeFile(attachmentSavePath, partData, (err) => {
                        if (err) {
                            console.error('Error al guardar el archivo:', err);
                            reject(err);
                        } else {
                            console.log(`Archivo adjunto guardado en ${attachmentSavePath}`);
                            resolve();
                        }
                    });
                });
            } catch (error) {
                console.error('Error al procesar archivo adjunto:', error);
                res.status(500).send('Error al guardar archivos adjuntos');
                return;
            }
        }
 
        
        res.status(200)
 
    } catch (error) {
        console.error('Error descargando correo y adjuntos:', error);
        res.status(500).send('Error descargando correo y adjuntos');
    }
});
  
//ruta para etiquetar correos
router.post('/label-email', async (req, res)=> {
    const {uid, flag} = req.body;

    const config = {
        imap: {
            user:  process.env.USER,
            password:  process.env.PASS,
            host:  Config.IMAP_EMAIL_SERVER,
            port: 993,
            tls: true,
            authTimeout: 3000
        }
    };

    try {
        const connection = await imaps.connect(config);
        await connection.openBox('INBOX');

        console.log(`intentando añadir etiqueta "${flag}" al correo ${uid}`)
        await new Promise((resolve, reject ) => {
            connection.imap.addFlags(uid, [flag], (err)=> {
                if (err) {
                    console.error("error al añadir la etiqueta")
                    reject (err);
                } else {
                    resolve()
                }
            });
        });

      

        res.status(200).send('Correo etiquetado correctamente');
    }catch (error) {
        console.error('Error al etiqeutar correo', error);
        res.status(500).send('Error al etiqeutar el correo');
    }


})

*/
module.exports = router;
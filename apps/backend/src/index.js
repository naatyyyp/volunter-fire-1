require('dotenv').config()

require('../config/mongodb.js')
const cors = require('cors')

const { initRootUser } = require('./modules/users/services/userServices.js')

initRootUser()

const express = require('express')

const { 
    userCreateController, 
    userFetchAllController, 
    userUpdateController,
    userDeleteController,
    userLoginController,
    userAuthorizationController,
    userRegisterController
} = require('./modules/users/controllers/userControllers.js')

const { 
    contactCreateController,
    contactFetchAllController,
    contactUpdateController,
    contactDeleteController
} = require('./modules/contact/controllers/contactControllers.js');

const {
    historyCreateController,
    historyFetchAllController,
    historyUpdateController,
    historyDeleteController
} = require('./modules/history/controllers/historyController.js')

const app = express()

app.use(express.json()) // Esto es para que funcion el request.body

app.use(cors()) // Este es el middleware que se utiliza para habilitar una peticion de origen cruzado

//RUTAS PARA CONSUMIR MI APLICACIÓN A TRAVÉS DE UNA API


//RUTAS DE USUARIOS

app.post('/api/user', userCreateController)

app.get('/api/users', userFetchAllController)

app.put('/api/user/:id', userUpdateController)

app.delete('/api/user/:id', userDeleteController)

app.post('/api/login', userLoginController)

app.post('/api/user/auth', userAuthorizationController)

app.post('/api/register', userRegisterController)


//RUTAS DE CONTACTOS

app.post('/api/contact', contactCreateController) //CRUD => CREAR / MOSTRAR POR CONTACTO / MOSTRAR TODOS LOS CONTACTOS / ACTUALIZAR / ELIMINAR

app.get('/api/contact', contactFetchAllController) // MOSTRAR TODOS LOS CONTACTOS

app.put('/api/contact/:id', contactUpdateController) // ACTUALIZAR

app.delete('/api/contact/:id', contactDeleteController) // ELIMINAR

//RUTAS DE HISTORIA

app.post('/api/history', historyCreateController) //CRUD => CREAR / MOSTRAR POR CONTACTO / MOSTRAR TODOS LOS CONTACTOS / ACTUALIZAR / ELIMINAR

app.get('/api/history', historyFetchAllController) // MOSTRAR TODOS LOS HISTORIA

app.put('/api/history/:id', historyUpdateController) // ACTUALIZAR

app.delete('/api/history/:id', historyDeleteController) // ELIMINAR


//INICIAR SERVIDOR

app.listen(process.env.API_PORT, () => {
    console.log('Server en conexión http://localhost:' + process.env.API_PORT)
})
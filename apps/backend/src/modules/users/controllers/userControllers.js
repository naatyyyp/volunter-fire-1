require('dotenv').config()

const { 
    userCreateService, 
    userFetchAllService, 
    userUpdateService, 
    userDeleteService,
    userFindOne
} = require('../services/userServices')

const bcrypt = require('bcrypt')
const jwt = require ('jsonwebtoken')

const userCreateController = async (req, res) => {
    //Ejecutar diferentes middlewares para validación
   
    //Ejecutar un servicio para crear un nuevo usuario
    const {username, email, password} = req.body

    if(!username || !email || !password) {
        return res.status(400).json({
            message: 'Username, email y password son obligatorios'
        })
    }

    const hashingPassword = await bcrypt.hash(password, 10)

    try {
        const user = await userCreateService({username, email, password: hashingPassword})
        res.status(201).json({
            message: 'Usuario creado',
            email: user.email
        })
    } catch (error) {
        
        let status = 500
        let message = 'Ocurrio un error'

        if(error.code == 11000){
            status = 400
            message = 'El email ya existe'
        }

        res.status(status).json({
            error,
            message
        })
    }
}

const userFetchAllController = async (req, res) => {
    const users = await userFetchAllService()

    res.status(200).json({
        message: 'Listado de usuarios',
        users
    })
}

const userUpdateController = async (req, res) => {
    const {id} = req.params
    const {username, email, password} = req.body
    let hashingPassword = undefined
    
    try {
        if(password) hashingPassword = await bcrypt.hash(password, 10)
        const user = await userUpdateService(id, {username, email, password: hashingPassword})
        return res.status(200).json(user)
    } catch (error) {
        let status = 500
        let message = 'Ocurrio un error'

        if(error.code == 11000){
            status = 400
            message = 'El email ya existe'
        }

        res.status(status).json({
            error,
            message
        })
    }
}

const userDeleteController = async (req, res) => {
    const {id} = req.params
    try {
        const deleteUser = await userDeleteService(id)
        return res.status(200).json(deleteUser)
    } catch (error) {
        return res.status(500).json({
            error,
            message: 'Ocurrio un error'
        })
    }
}

const userLoginController = async (req, res) => {
    const {username, password} = req.body
    try {
        const user = await userFindOne({username})

        if(!user) {
            return res.status(400).json({
                message: 'El usuario con ese email no existe'
            })
        }
    
        const isValidPassword = await bcrypt.compare(password, user.password)

        if(!isValidPassword){
            return res.status(400).json({
                message: 'La contraseña es incorrecta'
            })
        }

        const token = jwt.sign({
            id: user._id,
            email: user.email,
            username: user.username,
            aditionalInfo: user.aditionalInfo
        }, process.env.JWT_SECRET)

        console.log('token ok')
    
        return res.status(200).json({
            token,
            message: 'Login correcto'
        })
    } catch (error) {
        console.log('error: ', error)
        return res.status(500).json({
            error,
            message: 'Ocurrio un error'
        })
    }
}

const userAuthorizationController = async (req, res) => {
    const token = req.headers.authorization

    if(!token){
        return res.status(401).json({
            message: 'No hay token'
        })
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        const user = await userFindOne({username: payload.username})
    
        return res.status(200).json({
            message: 'Autenticado',
            user
        })
    } catch (error) {
        return res.status(400).json({
            message: 'Token invalido'
        })
    }


}

const userRegisterController = async (req, res) => {
    //Ejecutar diferentes middlewares para validación
    //Ejecutar un servicio para crear un nuevo usuario
    const {username, email, password} = req.body

    if(!username || !email || !password) {
        return res.status(400).json({
            message: 'Username, email y password son obligatorios'
        })
    }

    const hashingPassword = await bcrypt.hash(password, 10)

    try {
        const user = await userCreateService({username, email, password: hashingPassword})
        res.status(201).json({
            message: 'Usuario creado',
            email: user.email
        })
    } catch (error) {
        
        let status = 500
        let message = 'Ocurrio un error'

        if(error.code == 11000){
            status = 400
            message = 'El email ya existe'
        }

        res.status(status).json({
            error,
            message
        })
    }
}

module.exports = {
    userCreateController,
    userFetchAllController,
    userUpdateController,
    userDeleteController,
    userLoginController,
    userAuthorizationController,
    userRegisterController
}
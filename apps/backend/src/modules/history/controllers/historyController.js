require('dotenv').config();

const { 
    historyCreateService,
    historyFetchAllService,
    historyUpdateService, 
    historyDeleteService,
} = require('../services/historyServices.js');

const bcrypt = require('bcrypt');
const jwt = require ('jsonwebtoken');

const historyCreateController = async (req, res) => {
    // Ejecutar diferentes middlewares para validación

    // Ejecutar un servicio para datos de contactos con sus respectivos cuarteles
    const { photo, title, description } = req.body;

    // Validar los campos requeridos
    if (!photo || !title || !description) {
        return res.status(400).json({
            message: 'Foto, title, description son obligatorios'
        });
    }

    try {
        // Aquí ejecutarías el servicio para crear el contacto
        const history = await historyCreateService({ photo, title, description });

        // Si el contacto se creó exitosamente
        res.status(201).json(history);
    } catch (error) {
        let status = 500;
        let message = 'Ocurrió un error';

        if(error.code == 11000){
            status = 400
            message = 'la dirección de contacto ya existe'
        }

        res.status(status).json({
            error,
            message
        });
    }
}

const historyFetchAllController = async (req, res) => {
    const histories = await historyFetchAllService()

    res.status(200).json(histories)
}

const historyUpdateController = async (req, res) => {
    const {id} = req.params
    const { photo, title, description } = req.body
    
    try {
        // Asegúrate de que los campos requeridos estén presentes en la solicitud
        if (!title || !photo || !description) {
            return res.status(400).json({
                message: 'Title, description y photo son obligatorios'
            });
        }

        
        const history = await historyUpdateService(id, { photo, title, description });

        // Si la parte de historia se actualizó exitosamente:
        return res.status(200).json(history)
        }
        
        catch (error) {
        let status = 500
        let message = 'Ocurrio un error'

        if(error.code == 11000){
            status = 400
            message = 'La dirección de contacto ya existe'
        }

        res.status(status).json({
            error,
            message
        })
    }
}

const historyDeleteController = async (req, res) => {
    const {id} = req.params
    try {
        const deleteHistory = await historyDeleteService(id)
        return res.status(200).json(deleteHistory)
    } catch (error) {
        return res.status(500).json({
            error,
            message: 'Ocurrio un error'
        })
    }
};

// Exporta el controlador
module.exports = {
    historyCreateController,
    historyFetchAllController,
    historyUpdateController,
    historyDeleteController
    // Agrega aquí otros controladores relacionados con contactos si es necesario
}

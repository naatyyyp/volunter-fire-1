require('dotenv').config();

const { 
    contactCreateService,
    contactFetchAllService,
    contactUpdateService, 
    contactDeleteService,
} = require('../services/contactServices');

const bcrypt = require('bcrypt');
const jwt = require ('jsonwebtoken');

const contactCreateController = async (req, res) => {
    // Ejecutar diferentes middlewares para validación

    // Ejecutar un servicio para datos de contactos con sus respectivos cuarteles
    const { title, subtitle, googleMapsUrl } = req.body;

    // Validar los campos requeridos
    if (!title || !subtitle || !googleMapsUrl) {
        return res.status(400).json({
            message: 'Title, subtitle y googleMapsUrl son obligatorios'
        });
    }

    try {
        // Aquí ejecutarías el servicio para crear el contacto
        const contact = await contactCreateService({ title, subtitle, googleMapsUrl });

        // Si el contacto se creó exitosamente
        res.status(201).json(contact);
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

const contactFetchAllController = async (req, res) => {
    const contacts = await contactFetchAllService()

    res.status(200).json(contacts)
}

const contactUpdateController = async (req, res) => {
    const {id} = req.params
    const {title, subtitle, googleMapsUrl} = req.body
    
    try {
        // Asegúrate de que los campos requeridos estén presentes en la solicitud
        if (!title || !subtitle || !googleMapsUrl) {
            return res.status(400).json({
                message: 'Title, subtitle y googleMapsUrl son obligatorios'
            });
        }

        
        const contact = await contactUpdateService(id, { title, subtitle, googleMapsUrl });

        // Si el contacto se actualizó exitosamente:
        return res.status(200).json(contact)
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

const contactDeleteController = async (req, res) => {
    const {id} = req.params
    try {
        const deleteContact = await contactDeleteService(id)
        return res.status(200).json(deleteContact)
    } catch (error) {
        return res.status(500).json({
            error,
            message: 'Ocurrio un error'
        })
    }
};

// Exporta el controlador
module.exports = {
    contactCreateController,
    contactFetchAllController,
    contactUpdateController,
    contactDeleteController
    // Agrega aquí otros controladores relacionados con contactos si es necesario
}

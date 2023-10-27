const mongoose = require('mongoose')

const ContactSchema = mongoose.Schema({
    /* Las propiedades que definas en el esquema representarán los campos y 
    los tipos de datos de tus documentos en la colección.*/
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true,
    },
    googleMapsUrl: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Contact', ContactSchema)

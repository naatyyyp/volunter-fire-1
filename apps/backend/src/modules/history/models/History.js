const mongoose = require('mongoose')

const HistorySchema = mongoose.Schema({
    /* Las propiedades que definas en el esquema representarán los campos y 
    los tipos de datos de tus documentos en la colección.*/
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('History', HistorySchema)

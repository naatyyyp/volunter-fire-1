const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['ADMIN', 'PARTNER', 'USER']
    },
    active: {
        type: Boolean,
        required: true,
        default: false
    },
    aditionalInfo: {
        name: String,
        lastName: String,
        age: Number,
        gender: String,
        country: String,
        city: String,
        address: String,
        phone: String
    }
})

module.exports = mongoose.model('User', UserSchema)
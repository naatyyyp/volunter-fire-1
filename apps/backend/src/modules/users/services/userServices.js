const User = require('../models/User.js')
const bcrypt = require('bcrypt')

const userCreateService = async ({username, email, password}) => {
    return await User.create({username, email, password})
}

const userFetchAllService = async () => {
    return await User.find()
}

const userUpdateService = async (id, {username, email, password}) => {
    return await User.findByIdAndUpdate(id, {username, email, password}, {new: true})
}

const userDeleteService = async (id) => {
    return await User.findByIdAndDelete(id)
}

const userFindOne = async (payload) => {
    return await User.findOne(payload)
}

const initRootUser = async () => {
    const username = 'root'
    const email = 'root@root.com'
    const password = 'root.123'
    const role = 'ADMIN'
    const active = true

    const hashingPassword = await bcrypt.hash(password, 10)

    const user = await User.findOne({username})

    if(!user){
        await User.create({username, email, password: hashingPassword, role, active})
        console.log('Se ha creado un usuario root con username: root y password: root.123')
    }

}

module.exports = {
    userCreateService,
    userFetchAllService,
    userUpdateService,
    userDeleteService,
    userFindOne,
    initRootUser
}
const History = require('../models/History.js')

const historyCreateService = async ({ photo, title, description }) => {
    return await History.create({ photo, title, description })
}

const historyFetchAllService = async () => {
    return await History.find()
}

const historyUpdateService = async (id, { photo, title, description }) => {
    return await History.findByIdAndUpdate(id, { photo, title, description }, {new: true})
}

const historyDeleteService = async (id) => {
    return await History.findByIdAndDelete(id)
}

const historyFindByIdService = async (id) => {
    return await History.findById(id);
}

module.exports = {
    historyCreateService,
    historyFetchAllService,
    historyUpdateService,
    historyDeleteService,
    historyFindByIdService,
}
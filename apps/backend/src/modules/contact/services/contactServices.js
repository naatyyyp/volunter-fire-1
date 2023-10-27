const Contact = require('../models/Contact.js')

const contactCreateService = async ({title, subtitle, googleMapsUrl}) => {
    return await Contact.create({title, subtitle, googleMapsUrl})
}

const contactFetchAllService = async () => {
    return await Contact.find()
}

const contactUpdateService = async (id, {title, subtitle, googleMapsUrl}) => {
    return await Contact.findByIdAndUpdate(id, {title, subtitle, googleMapsUrl}, {new: true})
}

const contactDeleteService = async (id) => {
    return await Contact.findByIdAndDelete(id)
}

const contactFindByIdService = async (id) => {
    return await Contact.findById(id);
}

module.exports = {
    contactCreateService,
    contactFetchAllService,
    contactUpdateService,
    contactDeleteService,
    contactFindByIdService,
}
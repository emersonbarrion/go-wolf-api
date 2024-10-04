const mongoose = require('mongoose')
const { generateRoles } = require('../services/roles')

const rolesSchema = new mongoose.Schema({
    roles: [String]
})

const Roles = mongoose.model('roles', rolesSchema)

const createRoles = async (count) => {
    const allowedRoles = generateRoles(count)

    const roles = new Roles({
        roles: allowedRoles
    })

    await roles.save()

    return await Promise.resolve();
}

const retrieveRoles = async () => {
    return await Roles.find()
}

const deleteRoles = async () => {
    return await Roles.deleteMany({})
}

module.exports = { createRoles, retrieveRoles, deleteRoles }
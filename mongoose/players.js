const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
    username: String,
    status: String
})

const Player = mongoose.model('players', playerSchema)

const createPlayer = async (username) => {
    const player = new Player({
        username,
        status: "alive"
    })

    return await player.save()
}

const retrievePlayer = async () => {
    return await Player.find()
}

const deletePlayer = async (param) => {
    if (param) {
        return await Player.deleteOne({ username: param })
    }

    return await Player.deleteMany({})
}

const killPlayer = async (username) => {
    return await Player.updateOne({ username }, { status: "dead" })
}

module.exports = { createPlayer, retrievePlayer, deletePlayer, killPlayer }
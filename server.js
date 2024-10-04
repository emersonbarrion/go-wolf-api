const express = require('express')
const mongo = require('./mongoose/connection')
const players = require('./routes/players')
const roles = require('./routes/roles')
const game = require('./routes/game')
const voters = require('./routes/voters')


const app = express()
app.use(express.json());

mongo.connect()
players.init(app)
roles.init(app)
game.init(app)
voters.init(app)


const PORT = process.env.PORT || 3333
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
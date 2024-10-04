const players = require('../mongoose/players')
const roles = require('../mongoose/roles')

const init = (app) => {
    app.get("/reveal/:username", async (req, res) => {
        const { username } = req.params
        const player = req.query.player


        const allPlayers = await players.retrievePlayer()
        const allRoles = await roles.retrieveRoles()

        const seerIndex = allPlayers.findIndex(x => x.username == player)
        if (!player || allRoles[0].roles[seerIndex] != "seer") {
            return res.status(400).json({
                message: "you are not a seer"
            })
        }

        const playerIndex = allPlayers.findIndex(x => x.username == username)

        return res.status(200).json({
            role: allRoles[0].roles[playerIndex]
        })
        // await Dog.updateOne({ id }, req.body);
        // const updatedDog = await Dog.findById(id);
        // return res.status(200).json(updatedDog);
    });
}

module.exports = { init }
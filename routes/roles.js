const roles = require('../mongoose/roles')
const players = require('../mongoose/players')

const init = (app) => {
    app.get('/roles', async (req, res) => {
        const allRoles = await roles.retrieveRoles();
        return res.status(200).json(allRoles)
    })

    app.post("/roles", async (req, res) => {
        const generatedRoles = await roles.createRoles(req.body.count)
        return res.status(201).json(generatedRoles)
    })

    app.get('/roles/:username', async (req, res) => {
        const { username } = req.params
        const allPlayers = await players.retrievePlayer()
        const allRoles = await roles.retrieveRoles()

        const playerIndex = allPlayers.findIndex(x => x.username == username)
        console.log(playerIndex)
        const role = allRoles[0].roles[playerIndex];
        console.log(role)

        return res.status(200).json({
            message: `You are a ${role}`
        })
    })

    // app.get("/roles/:username", async (req, res) => {
    //     const { username } = req.params
    //     const player = req.query.player


    //     // await Dog.updateOne({ id }, req.body);
    //     // const updatedDog = await Dog.findById(id);
    //     // return res.status(200).json(updatedDog);
    // });

    // app.delete("/players/:username", async (req, res) => {
    //     const { username } = req.params
    //     console.log(username)
    //     const deletedDog = await player.deletePlayer(username)
    //     return res.status(200).json(deletedDog)
    // });

    app.delete('/roles', async (req, res) => {
        const deleteAllRoles = await roles.deleteRoles()

        return res.status(200).json(deleteAllRoles)
    })
}

module.exports = { init }
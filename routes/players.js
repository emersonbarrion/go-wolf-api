const players = require('../mongoose/players')

const init = (app) => {
    app.get('/players', async (req, res) => {
        const allPlayers = await players.retrievePlayer()
        return res.status(200).json(allPlayers)
    })

    app.post("/players", async (req, res) => {
        const newPlayer = await players.createPlayer(req.body.username, req.body.role)
        return res.status(201).json(newPlayer);
    })

    app.put("/players", async (req, res) => {
        const username = req.query.kill;
        const updated = await players.killPlayer(username);
        return res.status(200).json({
            username,
            message: `${username} has been killed`
        });
    });

    // app.delete("/players/:username", async (req, res) => {
    //     const { username } = req.params
    //     console.log(username)
    //     const deletedDog = await player.deletePlayer(username)
    //     return res.status(200).json(deletedDog)
    // });

    app.delete('/players', async (req, res) => {
        const deleteAllPlayers = await players.deletePlayer()

        return res.status(200).json(deleteAllPlayers)
    })
}

module.exports = { init }
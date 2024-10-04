const votes = require('../mongoose/vote')
const players = require('../mongoose/players')

const init = (app) => {
    app.post('/votes/:username', async (req, res) => {
        const { username } = req.params
        const voterQuery = req.query.voter
        const allPlayers = await players.retrievePlayer()
        const allVotes = await votes.retrieveVote()

        const isValidPlayer = allPlayers.some(x => x.username == voterQuery)
        const hasVote = allVotes.some(x => x.voter == voterQuery)

        if (!isValidPlayer || hasVote) {
            return res.status(400).json({
                message: `You already voter ${voterQuery}`
            })
        }

        const test = await votes.createVote(voterQuery, username)
        return res.status(201).json({
            message: `You voted ${username}`
        })
    })

    app.get('/votes', async (req, res) => {
        const allVotes = await votes.retrieveVote()
        return res.status(200).json(allVotes)
    })
}

module.exports = { init }
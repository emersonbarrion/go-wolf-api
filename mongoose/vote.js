const mongoose = require('mongoose')

const votersSchema = new mongoose.Schema({
    voter: String,
    vote: String
})

const Voter = mongoose.model('voters', votersSchema)

const createVote = async (voter, vote) => {
    const voterModel = new Voter({
        voter,
        vote
    })

    return await voterModel.save()
}

const retrieveVote = async () => {
    return await Voter.find()
}

module.exports = { createVote, retrieveVote }
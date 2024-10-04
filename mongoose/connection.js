const mongoose = require('mongoose')

const connect = () => {
    mongoose.connect("mongodb+srv://emersonbarrion:HwYkkAe8Hm8i7cCu@cluster0.ddd5a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        .then(() => console.log('Mongoose Connected'))
        .catch(err => console.log(err))
}

module.exports = { connect }
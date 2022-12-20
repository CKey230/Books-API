const mongoose = require('mongoose')
const db = require('./index')

const bookSchema = new mongoose.Schema ({
        title: String,
        description: String,
        year: Number,
        quantity: Number,
        imageURL: String
})

module.exports = mongoose.model('Books', bookSchema)
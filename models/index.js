require('dotenv').config()
const mongoose = require('mongoose')

const { MONGO_URI } = process.env

mongoose.set('strictQuery', true)
//db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB Connected'))
    .catch(err => console.error(err))


module.exports.Book = require('./books')
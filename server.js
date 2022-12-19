const express = require('express')
require('dotenv').config()

const app = express()

app.use('/books', require('./controllers/books'))


app.get('/', (req,res) => {
    res.send('Hello World')
})

app.get('*', (req,res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)
    console.log(`Currently listening on ${process.env.PORT}..`)


const express = require('express')
require('dotenv').config()

const app = express()

//middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'jsx')
app.engine('jsx',require('express-react-views').createEngine())

app.use('/books', require('./controllers/books'))


app.get('/', (req,res) => {
    res.send('Hello World')
})

app.get('*', (req,res) => {
    res.status(404).send('<h1>404 Page</h1>')
})
const PORT = process.env.PORT || 8080

app.listen(process.env.PORT)
    console.log(`Currently listening on ${process.env.PORT}..`)


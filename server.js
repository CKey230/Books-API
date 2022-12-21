const express = require('express')
const methodOverride = require('method-override')
const cors = require('cors')
require('dotenv').config()

const bookRoutes = require('./controllers/books')

const app = express()

//middleware
app.set('views',__dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx',require('express-react-views').createEngine())
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(cors())



//controllers
app.use('/books', bookRoutes)

//root
app.get('/', (req,res) => {
    res.send('Hello World')
})


//listening on PORT
const PORT = process.env.PORT || 8080

app.listen(process.env.PORT)
    console.log(`Currently listening on ${process.env.PORT}..`)


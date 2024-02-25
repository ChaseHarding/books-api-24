// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')
const bookController = require('./controllers/booksController') 

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))

// ROUTES
app.use('/books', bookController)

app.get('/', (req, res) => {
  res.send('Welcome to the Books! API')
})


// LISTEN
app.listen(PORT, () => {
  console.log('Greetings! From port: ', PORT);
})
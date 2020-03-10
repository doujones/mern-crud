const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

// app
const app = express()

//middlewares
app.use(cors())
app.use(morgan('dev')) 
app.use(bodyParser(bodyParser.json()))

// route
app.get('*', (req, res) => {
  res.json({
    data: 'You have discovered the Nodejs api for the Mern Stack'
  })
})

// port
const port = process.env.PORT || 8000
app.listen(port, ()=> console.log(`Server is running on port ${port}`))


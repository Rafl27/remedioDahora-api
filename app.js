const express = require('express')
const mongoose = require('mongoose')
const databaseConfig = require('./config/database')
const usersRouter = require('./routes/users')
const medicinesRouter = require('./routes/medicines')
const bodyParserMiddleware = require('./middlewares/bodyParser')

const app = express()

// Connect to the MongoDB database
mongoose.connect(databaseConfig.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Connected to the database')
})

// Add middleware to parse JSON request bodies
app.use(bodyParserMiddleware)

// Add routes for users and medicines
app.use('/users', usersRouter)
app.use('/medicine', medicinesRouter)

// Start the server
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})

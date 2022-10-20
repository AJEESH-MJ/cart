const express = require('express')

const { notFound, errorHandler } = require('./middleware/error.middleware')

// Start Express Server
app = express()
port = process.env.PORT || 5000

// Configurations
require('dotenv').config()
require('colors')
require('./config/db')

// Express Middleware Services
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Main Routes
app.get('/', (req, res) => res.send('Server is running...'))

// API Routes
app.use('/api/staff', require('./routes/staff.routes'))
app.use('/api/customer', require('./routes/customer.routes'))
app.use('/api/garment', require('./routes/garment.routes'))
app.use('/api/template', require('./routes/template.routes'))

// Error Handling Middleware
app.use(notFound)
app.use(errorHandler)

// Listen to Express Server
app.listen(port, (err) => {
  if (err) console.log(`Listening error : ${err.message}`.bgRed)
  console.log(`Server listening on http://localhost:${port}`.blue)
})

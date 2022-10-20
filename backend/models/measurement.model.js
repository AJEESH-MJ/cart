const mongoose = require('mongoose')

const measurementSchema = mongoose.Schema({
  label: {
    type: String,
    required: [true, 'Please add a label'],
  },
  input: {
    type: String,
    required: [true, 'Please add a input type'],
  },
})

module.exports = { measurementSchema }

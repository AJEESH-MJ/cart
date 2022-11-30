const mongoose = require("mongoose")

const measurementSchema = mongoose.Schema({
  label: {
    type: String,
    required: [true, "Please add a label"],
  },
  value: {
    type: String,
    required: [true, "Please add a value"],
  },
  option: {
    type: String,
    required: [true, "Please add a unit"],
  },
})

module.exports = { measurementSchema }

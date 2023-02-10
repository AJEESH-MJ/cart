const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
  item: {
    type: String,
    required: [true, "Please add a name"],
  },
  price: {
    type: Number,
    required: [true, "Please add a price"],
  },
  quantity: {
    type: Number,
    required: [true, "Please add a count"],
  },
})

module.exports = { productSchema }

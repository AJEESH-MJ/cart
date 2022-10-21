const mongoose = require('mongoose')

const { measurementSchema } = require('./measurement.model')
const { statusSchema } = require('./status.model')

const orderSchema = mongoose.Schema(
  {
    staff_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Staff',
    },
    customer_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Customer',
    },
    garment: {
      type: String,
      required: [true, 'Please add a name'],
      unique: true,
    },
    measurement: [measurementSchema],
    status: [statusSchema],
    price: {
      type: Number,
      required: [true, 'Please add a price'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Order', orderSchema)

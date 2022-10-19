const mongoose = require('mongoose')

const customerSchema = mongoose.Schema(
  {
    staff_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Staff',
    },
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    phone: {
      type: String,
      required: [true, 'Please add a phone number'],
      unique: true,
    },
    place: {
      type: String,
      required: [true, 'Please add a name'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Customer', customerSchema)

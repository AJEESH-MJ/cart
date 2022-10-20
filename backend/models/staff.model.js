const mongoose = require('mongoose')

const staffSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    phone: {
      type: String,
      required: [true, 'Please add a phone number'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    role: {
      type: String,
      required: [true, 'Please add a role'],
    },
    imageURL: {
      type: String,
      required: [true, 'Please add a image url'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Staff', staffSchema)

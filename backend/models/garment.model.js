const mongoose = require('mongoose')

const garmentSchema = mongoose.Schema(
  {
    staff_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Staff',
    },
    name: {
      type: String,
      required: [true, 'Please add a name'],
      unique: true,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Garment', garmentSchema)

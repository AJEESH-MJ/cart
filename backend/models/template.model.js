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

const templateSchema = mongoose.Schema(
  {
    staff_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Staff',
    },
    garment_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Garment',
    },
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    measurement: [measurementSchema],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Template', templateSchema)

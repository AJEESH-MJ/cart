const mongoose = require('mongoose')

const statusSchema = mongoose.Schema(
  {
    staff_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Staff',
    },
    job: {
      type: String,
      required: [true, 'Please add a label'],
    },
    note: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = { statusSchema }

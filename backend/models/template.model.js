const mongoose = require("mongoose")

const { measurementSchema } = require("./measurement.model")

const templateSchema = mongoose.Schema(
  {
    staff_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Staff",
    },
    garment: {
      type: String,
      required: [true, "Please add a name"],
    },
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    measurement: [measurementSchema],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Template", templateSchema)

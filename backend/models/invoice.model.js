const mongoose = require("mongoose")

const { productSchema } = require("./product.model")
const { statusSchema } = require("./status.model")

const invoiceSchema = mongoose.Schema(
  {
    staff_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Staff",
    },
    customer_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,

      ref: "Customer",
    },
    products: [productSchema],
    status: [statusSchema],
    total: {
      type: Number,
      required: [true, "Please add a price"],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Invoice", invoiceSchema)

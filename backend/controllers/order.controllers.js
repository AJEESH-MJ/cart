const asyncHandler = require("express-async-handler")
const Order = require("../models/order.model")
const Garment = require("../models/garment.model")
const Customer = require("../models/customer.model")

const {
  validateOrder,
  validateUpdateStatus,
  validateUpdateMeasurement,
  validateUpdatePrice,
} = require("../validation/order.validation")

// @desc    Get all orders
// @route   GET api/order/read/all
// @access  Public
const readAll = asyncHandler(async (req, res) => {
  const orders = await Order.find()
  res.status(200).json(orders)
})

// @desc    Get my orders
// @route   GET api/order/read/my
// @access  Public
const readMy = asyncHandler(async (req, res) => {
  const orders = await Order.find({ staff_id: req.staff.id })
  res.status(200).json(orders)
})

// @desc    Create order
// @route   POST api/order/create
// @access  Public
const create = asyncHandler(async (req, res) => {
  // Destructure data
  const { customer_id, garment, measurement, status, price } = req.body
  // Check if garment exist
  const garmentExist = await Garment.findOne({ name: garment })
  // Check if customer exist
  const customerExist = await Customer.findOne({ _id: customer_id })
  // Validate order data
  const { errors, valid } = validateOrder({
    customer_id,
    garment,
    garmentExist,
    customerExist,
    measurement,
    status,
    price,
  })
  if (!valid) {
    res.status(200).json(errors)
  } else {
    // Create order
    const order = await Order.create({
      staff_id: req.staff._id,
      customer_id: customer_id,
      garment: garment,
      measurement: [],
      status: [],
      price: 0,
    })
    res.status(200).json(order)
  }
})

// @desc    Read order
// @route   GET api/order/read/:id
// @access  Public
const read = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)
  res.status(200).json(order)
})

// @desc    Update order status
// @route   PUT api/order/update-status/:id
// @access  Public
const updateStatus = asyncHandler(async (req, res) => {
  // Sample of req.body
  // {
  //   "job": "Cutting",
  //   "note": "this is a note"
  // }
  // Destructure data
  const current_status = req.body
  // Validate order data
  const { errors, valid } = validateUpdateStatus({
    current_status,
  })
  if (!valid) {
    res.status(200).json(errors)
  } else {
    // Update order
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { $push: { status: { ...current_status, staff_id: req.staff._id } } },
      { new: true }
    )
    res.status(200).json(order)
  }
})

// @desc    Update order measurement
// @route   PUT api/order/update-measurement/:id
// @access  Public
const updateMeasurement = asyncHandler(async (req, res) => {
  // Sample of req.body
  // {
  //   "measurement": [
  //     {
  //       "name": "Neck",
  //       "value": 15
  //     },
  //     {
  //       "name": "Chest",
  //       "value": 15
  //     },
  //     {
  //       "name": "Waist",
  //       "value": 15
  //     }
  //   ]
  // }
  // Destructure data
  const { measurement } = req.body
  // Validate order data
  const { errors, valid } = validateUpdateMeasurement({
    measurement,
  })
  if (!valid) {
    res.status(200).json(errors)
  } else {
    // Update order
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { measurement },
      { new: true }
    )
    res.status(200).json(order)
  }
})

// @desc    Update order price
// @route   PUT api/order/update-measurement/:id
// @access  Public
const updatePrice = asyncHandler(async (req, res) => {
  // Sample of req.body
  // {
  //   "price": 1000
  // }
  // Destructure data
  const { price } = req.body
  // Validate order data
  const { errors, valid } = validateUpdatePrice({
    price,
  })
  if (!valid) {
    res.status(200).json(errors)
  } else {
    // Update order
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { price },
      { new: true }
    )
    res.status(200).json(order)
  }
})

// @desc    Remove order
// @route   DELETE api/orders/delete/:id
// @access  Public
const remove = asyncHandler(async (req, res) => {
  const order = await Order.findByIdAndRemove(req.params.id)
  res.status(200).json(order)
})

module.exports = {
  readAll,
  readMy,
  create,
  read,
  updateStatus,
  updateMeasurement,
  updatePrice,
  remove,
}

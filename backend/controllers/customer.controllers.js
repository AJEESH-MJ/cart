const asyncHandler = require('express-async-handler')
const Customer = require('../models/customer.model')

const { validateCustomer } = require('../validation/customer.validation')

// @desc    Get all customers
// @route   GET api/customer/read/all
// @access  Public
const readAll = asyncHandler(async (req, res) => {
  const customers = await Customer.find()
  res.status(200).json(customers)
})

// @desc    Get my customers
// @route   GET api/customer/read/my
// @access  Public
const readMy = asyncHandler(async (req, res) => {
  const customers = await Customer.find({ staff_id: req.staff.id })
  res.status(200).json(customers)
})

// @desc    Create customer
// @route   POST api/customer/create
// @access  Public
const createCustomer = asyncHandler(async (req, res) => {
  // Validate customer data
  const { errors, valid } = validateCustomer(req.body)
  if (!valid) {
    res.status(200).json(errors)
  }

  // Destructure data
  const { name, phone, place } = req.body

  // Check the customer exist
  const customerExist = await Customer.findOne({ phone })
  if (customerExist) {
    res.status(200).json({ existError: 'This phone already exist' })
  }

  // Create customer
  const customer = await Customer.create({
    staff_id: req.staff.id,
    name,
    phone,
    place,
  })
  res.status(200).json(customer)
})

// @desc    Read customer
// @route   GET api/customer/read/:id
// @access  Public
const readCustomer = asyncHandler(async (req, res) => {
  const customer = await Customer.findById(req.params.id)
  res.status(200).json(customer)
})

// @desc    Update customer
// @route   PUT api/customer/update/:id
// @access  Public
const updateCustomer = asyncHandler(async (req, res) => {
  // Validate customer data
  const { errors, valid } = validateCustomer(req.body)
  if (!valid) {
    res.status(200).json(errors)
  }
  const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.status(200).json(customer)
})

// @desc    Delete customer
// @route   DELETE api/customers/delete/:id
// @access  Public
const deleteCustomer = asyncHandler(async (req, res) => {
  const customer = await Customer.findByIdAndRemove(req.params.id)
  res.status(200).json(customer)
})

module.exports = {
  readAll,
  readMy,
  createCustomer,
  readCustomer,
  updateCustomer,
  deleteCustomer,
}

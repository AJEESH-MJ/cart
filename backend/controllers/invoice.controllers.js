const asyncHandler = require("express-async-handler")
const Invoice = require("../models/invoice.model")
const Product = require("../models/product.model")
const Customer = require("../models/customer.model")

const {
  validateInvoice,
  validateUpdateStatus,
  validateUpdateProduct,
  validateUpdateTotal,
} = require("../validation/invoice.validation")

// @desc    Get all invoices
// @route   GET api/invoice/read/all
// @access  Public
const readAll = asyncHandler(async (req, res) => {
  const invoices = await Invoice.find()
  res.status(200).json(invoices)
})

// @desc    Get my invoices
// @route   GET api/invoice/read/my
// @access  Public
const readMy = asyncHandler(async (req, res) => {
  const invoices = await Invoice.find({ staff_id: req.staff.id })
  res.status(200).json(invoices)
})

// @desc    Create invoice
// @route   POST api/invoice/create
// @access  Public
const create = asyncHandler(async (req, res) => {
  // Destructure data
  const { customer_id } = req.body
  // Check if customer exist
  const customerExist = await Customer.findOne({ _id: customer_id })
  // Validate invoice data
  const { errors, valid } = validateInvoice({
    customer_id,
    customerExist,
  })
  if (!valid) {
    res.status(200).json(errors)
  } else {
    // Create invoice
    const invoice = await Invoice.create({
      staff_id: req.staff._id,
      customer_id: customer_id,
      produc: [],
      status: [],
      total: 0,
    })
    res.status(200).json(invoice)
  }
})

// @desc    Read invoice
// @route   GET api/invoice/read/:id
// @access  Public
const read = asyncHandler(async (req, res) => {
  const invoice = await Invoice.findById(req.params.id)
  res.status(200).json(invoice)
})

// @desc    Update invoice status
// @route   PUT api/invoice/update-status/:id
// @access  Public
const updateStatus = asyncHandler(async (req, res) => {
  // Destructure data
  const current_status = req.body
  // Validate status data
  const { errors, valid } = validateUpdateStatus({ current_status })
  if (!valid) {
    res.status(200).json(errors)
  } else {
    // Update invoice status
    const invoice = await Invoice.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { status: { ...current_status, staff_id: req.staff._id } } },
      { new: true }
    )
    res.status(200).json(invoice)
  }
})

// @desc    Update invoice product
// @route   PUT api/invoice/update-product/:id
// @access  Public
const updateProduct = asyncHandler(async (req, res) => {
  // Destructure data
  const products = req.body
  // validate product data
  const { errors, valid } = validateUpdateProduct({ products })
  if (!valid) {
    res.status(200).json(errors)
  } else {
    // Update invoice product
    const invoice = await Invoice.findOneAndUpdate(
      req.params.id,
      { products: products },
      { new: true }
    )
    res.status(200).json(invoice)
  }
})

// @desc    Update invoice total
// @route   PUT api/invoice/update-total/:id
// @access  Public
const updateTotal = asyncHandler(async (req, res) => {
  // Destructure data
  const { total } = req.body
  // log total data to console as number
  console.log(total)
  // Validate total data
  const { errors, valid } = validateUpdateTotal({ total })
  if (!valid) {
    res.status(200).json(errors)
  } else {
    // Update invoice total
    const invoice = await Invoice.findOneAndUpdate(req.params.id, { total: total }, { new: true })
    res.status(200).json(invoice)
  }
})

// @desc    Delete invoice
// @route   DELETE api/invoice/delete/:id
// @access  Public
const remove = asyncHandler(async (req, res) => {
  const invoice = await Invoice.findByIdAndRemove(req.params.id)
  res.status(200).json(invoice)
})

module.exports = {
  readAll,
  readMy,
  create,
  read,
  updateStatus,
  updateProduct,
  updateTotal,
  remove,
}

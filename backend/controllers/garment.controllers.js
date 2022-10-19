const asyncHandler = require('express-async-handler')
const Garment = require('../models/garment.model')

const { validateGarment } = require('../validation/garment.validation')

// @desc    Get all garments
// @route   GET api/garment/read/all
// @access  Public
const readAll = asyncHandler(async (req, res) => {
  const garments = await Garment.find()
  res.status(200).json(garments)
})

// @desc    Get my garments
// @route   GET api/garment/read/my
// @access  Public
const readMy = asyncHandler(async (req, res) => {
  const garments = await Garment.find({ staff_id: req.staff.id })
  res.status(200).json(garments)
})

// @desc    Create garment
// @route   POST api/garment/create
// @access  Public
const create = asyncHandler(async (req, res) => {
  // Validate garment data
  const { errors, valid } = validateGarment(req.body)
  if (!valid) {
    res.status(200).json(errors)
  }

  // Destructure data
  const { name } = req.body

  // Check the garment exist
  const garmentExist = await Garment.findOne({ name })
  if (garmentExist) {
    res.status(200).json({ existError: 'This garment name already exist' })
  }

  // Create garment
  const garment = await Garment.create({
    staff_id: req.staff.id,
    name,
  })
  res.status(200).json(garment)
})

// @desc    Read garment
// @route   GET api/garment/read/:id
// @access  Public
const read = asyncHandler(async (req, res) => {
  const garment = await Garment.findById(req.params.id)
  res.status(200).json(garment)
})

// @desc    Update garment
// @route   PUT api/garment/update/:id
// @access  Public
const update = asyncHandler(async (req, res) => {
  // Validate garment data
  const { errors, valid } = validateGarment(req.body)
  if (!valid) {
    res.status(200).json(errors)
  }
  const garment = await Garment.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.status(200).json(garment)
})

// @desc    Remove garment
// @route   DELETE api/garments/delete/:id
// @access  Public
const remove = asyncHandler(async (req, res) => {
  const garment = await Garment.findByIdAndRemove(req.params.id)
  res.status(200).json(garment)
})

module.exports = {
  readAll,
  readMy,
  create,
  read,
  update,
  remove,
}

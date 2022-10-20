const asyncHandler = require('express-async-handler')
const Template = require('../models/template.model')
const Garment = require('../models/garment.model')

const { validateTemplate } = require('../validation/template.validation')

// @desc    Get all templates
// @route   GET api/template/read/all
// @access  Public
const readAll = asyncHandler(async (req, res) => {
  const templates = await Template.find()
  res.status(200).json(templates)
})

// @desc    Get my templates
// @route   GET api/template/read/my
// @access  Public
const readMy = asyncHandler(async (req, res) => {
  const templates = await Template.find({ staff_id: req.staff.id })
  res.status(200).json(templates)
})

// @desc    Create template
// @route   POST api/template/create
// @access  Public
const create = asyncHandler(async (req, res) => {
  // Destructure data
  const { name, garment, measurement } = req.body

  const templateExist = await Template.findOne({ name: name })
  const garmentExist = await Garment.findOne({ name: garment })

  // Validate template data
  const { errors, valid } = validateTemplate({
    ...req.body,
    templateExist,
    garmentExist,
  })
  if (!valid) {
    res.status(200).json(errors)
  }

  // Create template
  const template = await Template.create({
    staff_id: req.staff._id,
    garment_id: garmentExist._id,
    name,
    measurement,
  })
  res.status(200).json(template)
})

// @desc    Read template
// @route   GET api/template/read/:id
// @access  Public
const read = asyncHandler(async (req, res) => {
  const template = await Template.findById(req.params.id)
  res.status(200).json(template)
})

//-------------------------------------------------------check function later
// @desc    Update template
// @route   PUT api/template/update/:id
// @access  Public
const update = asyncHandler(async (req, res) => {
  // Destructure data
  const { name, garment, measurement } = req.body

  const garmentExist = await Garment.findOne({ name: garment })

  // Validate template data
  const { errors, valid } = validateTemplate({
    ...req.body,
    garmentExist,
  })

  if (!valid) {
    res.status(200).json(errors)
  }

  // Update template
  const template = await Template.findByIdAndUpdate(
    req.params.id,
    {
      staff_id: req.staff._id,
      garment_id: garmentExist._id,
      name,
      measurement,
    },
    {
      new: true,
    }
  )
  res.status(200).json(template)
})

// @desc    Remove template
// @route   DELETE api/templates/delete/:id
// @access  Public
const remove = asyncHandler(async (req, res) => {
  const template = await Template.findByIdAndRemove(req.params.id)
  res.status(200).json(template)
})

module.exports = {
  readAll,
  readMy,
  create,
  read,
  update,
  remove,
}

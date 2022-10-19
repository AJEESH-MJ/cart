const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const asyncHandler = require('express-async-handler')
const Staff = require('../models/staff.model')

const {
  validateRegister,
  validateLogin,
} = require('../validation/staff.validation')

// @desc    Register staff
// @route   POST api/staff/register
// @access  Public
const registerStaff = asyncHandler(async (req, res) => {
  // Validate register data
  const { errors, valid } = validateRegister(req.body)
  if (!valid) {
    res.status(200).json(errors)
  }

  // Destructure data
  const { name, phone, password, role } = req.body

  // Check the staff exist
  const staffExist = await Staff.findOne({ phone })
  if (staffExist) {
    res.status(200).json({ existError: 'This phone already exist' })
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create staff
  const staff = await Staff.create({
    name,
    phone,
    password: hashedPassword,
    role,
  })

  // Respond data with token
  res.status(201).json(
    res.json({
      _id: staff._id,
      name: staff.name,
      phone: staff.phone,
      role: staff.role,
      token: generateToken(staff._id),
    })
  )
})

// @desc    Login staff
// @route   POST api/staff/login
// @access  Public
const loginStaff = asyncHandler(async (req, res) => {
  // Validate login data
  const { errors, valid } = validateLogin(req.body)
  if (!valid) {
    res.status(200).json(errors)
  }

  // Destructure data
  const { phone, password } = req.body

  // Check the staff not exist
  const staffExist = await Staff.findOne({ phone })
  if (!staffExist) {
    res.status(200).json({ notExistError: 'This phone not exist' })
  }

  // Compare password
  if (!(await bcrypt.compare(password, staffExist.password))) {
    res.status(200).json({ invalidPasswordError: 'Invalid password' })
  }

  // Respond data with token
  res.status(200).json(
    res.json({
      _id: staffExist._id,
      name: staffExist.name,
      phone: staffExist.phone,
      role: staffExist.role,
      token: generateToken(staffExist._id),
    })
  )
})

// @desc    Get staff profile
// @route   GET api/staff/profile
// @access  Private
const getProfile = asyncHandler(async (req, res) => {
  const staffExist = req.staff
  res.status(200).json({
    _id: staffExist._id,
    name: staffExist.name,
    phone: staffExist.phone,
    role: staffExist.role,
  })
})

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '5h' })
}

module.exports = {
  registerStaff,
  loginStaff,
  getProfile,
}

const jwt = require('jsonwebtoken')

const Staff = require('../models/staff.model')
const asyncHandler = require('express-async-handler')

const protect = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1]

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // Get staff from the token
      req.staff = await Staff.findById(decoded.id).select('-password')

      next()
    } catch (error) {
      console.log(error)
      res.status(401)
      throw new Error('Not authorized')
    }
  }
  if (!token) {
    res.status(401)
    throw new Error('Authorization failed, no token')
  }
  if (req.staff.role !== 'admin') {
    res.status(401)
    throw new Error('Authorization failed, you are not an admin')
  }
})

module.exports = { protect }

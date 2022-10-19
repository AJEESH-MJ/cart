const express = require('express')
const router = express.Router()

const { protect } = require('../middleware/auth.middleware')

const {
  registerStaff,
  loginStaff,
  getProfile,
} = require('../controllers/staff.controllers')

router.post('/register', registerStaff)
router.post('/login', loginStaff)
router.get('/profile', protect, getProfile)

module.exports = router

const express = require('express')
const router = express.Router()

const { protect } = require('../middleware/auth.middleware')

const {
  readAll,
  readMy,
  createCustomer,
  readCustomer,
  updateCustomer,
  deleteCustomer,
} = require('../controllers/customer.controllers')

router.get('/read/all', protect, readAll)
router.get('/read/my', protect, readMy)
router.post('/create', protect, createCustomer)
router.get('/read/:id', protect, readCustomer)
router.put('/update/:id', protect, updateCustomer)
router.delete('/delete/:id', protect, deleteCustomer)

module.exports = router

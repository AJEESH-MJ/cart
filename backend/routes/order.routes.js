const express = require('express')
const router = express.Router()

const { protect } = require('../middleware/auth.middleware')

const {
  readAll,
  readMy,
  create,
  read,
  updateStatus,
  updateMeasurement,
  updatePrice,
  remove,
} = require('../controllers/order.controllers')

router.get('/read/all', protect, readAll)
router.get('/read/my', protect, readMy)
router.post('/create', protect, create)
router.get('/read/:id', protect, read)
router.put('/update-status/:id', protect, updateStatus)
router.put('/update-measurement/:id', protect, updateMeasurement)
router.put('/update-price/:id', protect, updatePrice)
router.delete('/delete/:id', protect, remove)

module.exports = router

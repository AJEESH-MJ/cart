const express = require('express')
const router = express.Router()

const { protect } = require('../middleware/auth.middleware')

const {
  readAll,
  readMy,
  create,
  read,
  update,
  remove,
} = require('../controllers/template.controllers')

router.get('/read/all', protect, readAll)
router.get('/read/my', protect, readMy)
router.post('/create', protect, create)
router.get('/read/:id', protect, read)
router.put('/update/:id', protect, update)
router.delete('/delete/:id', protect, remove)

module.exports = router

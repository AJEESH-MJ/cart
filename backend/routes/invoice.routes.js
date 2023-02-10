const express = require("express")
const router = express.Router()

const { protect } = require("../middleware/auth.middleware")

const {
  readAll,
  readMy,
  create,
  read,
  updateStatus,
  updateProduct,
  updateTotal,
  remove,
} = require("../controllers/invoice.controllers")

router.get("/read/all", protect, readAll)
router.get("/read/my", protect, readMy)
router.post("/create", protect, create)
router.get("/read/:id", protect, read)
router.put("/update-status/:id", protect, updateStatus)
router.put("/update-product/:id", protect, updateProduct)
router.put("/update-total/:id", protect, updateTotal)
router.delete("/delete/:id", protect, remove)

module.exports = router

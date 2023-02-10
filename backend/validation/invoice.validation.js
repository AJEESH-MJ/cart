const isEmpty = require("./isEmpty")
const validator = require("validator")

const validateInvoice = (data) => {
  let errors = {}

  data.customer_id = !isEmpty(data.customer_id) ? data.customer_id : ""
  data.customerExist = !isEmpty(data.customerExist) ? data.customerExist : ""

  if (data.customer_id === "") {
    errors.customer_idError = "Customer_id is required"
  } else if (!data.customerExist) {
    errors.customer_idError = "Customer_id is not exist"
  }

  return {
    errors,
    valid: isEmpty(errors),
  }
}

const validateUpdateStatus = (data) => {
  let errors = {}

  data.current_status = !isEmpty(data.current_status) ? data.current_status : ""

  if (!data.current_status) {
    errors.current_statusError = "Current_status is required"
  }

  return {
    errors,
    valid: isEmpty(errors),
  }
}

const validateUpdateProduct = (data) => {
  let errors = {}
  data.products = !isEmpty(data.products) ? data.products : ""

  if (!data.products) {
    errors.productsError = "Products is required"
  }

  return {
    errors,
    valid: isEmpty(errors),
  }
}

const validateUpdateTotal = (data) => {
  let errors = {}

  data.total = !isEmpty(data.total) ? data.total : ""

  if (!data.total) {
    errors.totalError = "Total is required"
  }

  return {
    errors,
    valid: isEmpty(errors),
  }
}

module.exports = {
  validateInvoice,
  validateUpdateStatus,
  validateUpdateProduct,
  validateUpdateTotal,
}

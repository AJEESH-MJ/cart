const isEmpty = require('./isEmpty')
const validator = require('validator')

const validateOrder = (data) => {
  let errors = {}

  //   customer_id,
  //   garment,
  //   garmentExist,
  //   measurement,
  //   current_status,
  //   price,

  data.customer_id = !isEmpty(data.customer_id) ? data.customer_id : ''
  data.garment = !isEmpty(data.garment) ? data.garment : ''
  data.garmentExist = !isEmpty(data.garmentExist) ? data.garmentExist : ''
  data.measurement = !isEmpty(data.measurement) ? data.measurement : ''
  data.current_status = !isEmpty(data.current_status) ? data.current_status : ''
  data.price = !isEmpty(data.price) ? data.price : ''

  if (data.customer_id === '') {
    errors.customer_idError = 'Customer_id is required'
  }

  if (data.garment === '') {
    errors.garmentError = 'Garment is required'
  } else if (!data.garmentExist) {
    errors.garmentNotExistError = 'This garment not exist'
  }

  if (data.measurement === '') {
    errors.measurementError = 'Measurement is required'
  }

  if (data.current_status === '') {
    errors.current_statusError = 'Current_status is required'
  }

  if (data.price === '') {
    errors.priceError = 'Price is required'
  }

  return {
    errors,
    valid: isEmpty(errors),
  }
}

const validateUpdateStatus = (data) => {
  let errors = {}

  data.current_status = !isEmpty(data.current_status) ? data.current_status : ''

  if (!data.current_status) {
    errors.current_statusError = 'Current_status is required'
  }

  return {
    errors,
    valid: isEmpty(errors),
  }
}

const validateUpdateMeasurement = (data) => {
  let errors = {}

  data.measurement = !isEmpty(data.measurement) ? data.measurement : ''

  if (!data.measurement) {
    errors.measurementError = 'Measurement is required'
  }

  return {
    errors,
    valid: isEmpty(errors),
  }
}

const validateUpdatePrice = (data) => {
  let errors = {}

  data.price = !isEmpty(data.price) ? data.price : ''

  if (!data.price) {
    errors.priceError = 'price is required'
  }

  return {
    errors,
    valid: isEmpty(errors),
  }
}

module.exports = {
  validateOrder,
  validateUpdateStatus,
  validateUpdateMeasurement,
  validateUpdatePrice,
}

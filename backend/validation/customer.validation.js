const isEmpty = require('./isEmpty')
const validator = require('validator')

const validateCustomer = (data) => {
  let errors = {}

  data.name = !isEmpty(data.name) ? data.name : ''
  data.phone = !isEmpty(data.phone) ? data.phone : ''
  data.place = !isEmpty(data.place) ? data.place : ''

  if (validator.isEmpty(data.name)) {
    errors.nameError = 'Name is required'
  }

  if (validator.isEmpty(data.phone)) {
    errors.phoneError = 'Phone number is required'
  } else if (data.phone.length !== 10) {
    errors.phoneError = 'Phone number must be 10 digit'
  }

  if (validator.isEmpty(data.place)) {
    errors.placeError = 'Place is required'
  }

  return {
    errors,
    valid: isEmpty(errors),
  }
}

module.exports = {
  validateCustomer,
}

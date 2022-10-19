const isEmpty = require('./isEmpty')
const validator = require('validator')

const validateGarment = (data) => {
  let errors = {}

  data.name = !isEmpty(data.name) ? data.name : ''

  if (validator.isEmpty(data.name)) {
    errors.nameError = 'Name is required'
  }

  return {
    errors,
    valid: isEmpty(errors),
  }
}

module.exports = {
  validateGarment,
}

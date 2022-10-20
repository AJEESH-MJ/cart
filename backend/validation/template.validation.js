const isEmpty = require('./isEmpty')
const validator = require('validator')

const validateTemplate = (data) => {
  let errors = {}

  data.name = !isEmpty(data.name) ? data.name : ''
  data.garment = !isEmpty(data.garment) ? data.garment : ''
  data.measurement = !isEmpty(data.measurement) ? data.measurement : ''

  if (validator.isEmpty(data.name)) {
    errors.nameError = 'Name is required'
  } else if (data.templateExist) {
    errors.templateExistError = 'This template name already exist'
  }

  if (validator.isEmpty(data.garment)) {
    errors.garmentError = 'Garment is required'
  } else if (!data.garmentExist) {
    errors.garmentNotExistError = 'This garment not exist'
  }

  if (data.measurement === '') {
    errors.measurementError = 'Measurement is required'
  }

  return {
    errors,
    valid: isEmpty(errors),
  }
}

module.exports = {
  validateTemplate,
}

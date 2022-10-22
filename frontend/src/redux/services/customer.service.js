import axios from 'axios'
const API_URL = '/api/customer/'

// read all customers
const readAll = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL + 'read/all', config)
  return response.data
}

// read my customers
const readMy = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL + 'read/my', config)
  return response.data
}

// create customer
const create = async (customer, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(API_URL + 'create', customer, config)
  return response.data
}

// read customer
const read = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL + 'read/' + id, config)
  return response.data
}

// update customer
const update = async (id, customer, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.put(API_URL + 'update/' + id, customer, config)
  return response.data
}

// delete customer
const remove = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.delete(API_URL + 'delete/' + id, config)
  return response.data
}

const customerService = {
  readAll,
  readMy,
  create,
  read,
  update,
  remove,
}
export default customerService

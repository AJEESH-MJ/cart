import axios from 'axios'
const API_URL = '/api/garment/'

// read all garments
const readAll = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL + 'read/all', config)
  return response.data
}

// read my garments
const readMy = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL + 'read/my', config)
  return response.data
}

// create garment
const create = async (garment, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(API_URL + 'create', garment, config)
  return response.data
}

// read garment
const read = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL + 'read/' + id, config)
  return response.data
}

// update garment
const update = async (id, garment, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.put(API_URL + 'update/' + id, garment, config)
  return response.data
}

// delete garment
const remove = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.delete(API_URL + 'delete/' + id, config)
  return response.data
}

const garmentService = {
  readAll,
  readMy,
  create,
  read,
  update,
  remove,
}
export default garmentService

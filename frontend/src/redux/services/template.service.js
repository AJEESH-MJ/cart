import axios from "axios"
const API_URL = "/api/template/"

// read all templates
const readAll = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL + "read/all", config)
  return response.data
}

// read my templates
const readMy = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL + "read/my", config)
  return response.data
}

// create template
const create = async (template, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(API_URL + "create", template, config)
  return response.data
}

// read template
const read = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL + "read/" + id, config)
  return response.data
}

// update template
const update = async (id, template, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.put(API_URL + "update/" + id, template, config)
  return response.data
}

// delete template
const remove = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.delete(API_URL + "delete/" + id, config)
  return response.data
}

module.exports = {
  readAll,
  readMy,
  create,
  read,
  update,
  remove,
}

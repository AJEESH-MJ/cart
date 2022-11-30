import axios from "axios"
const API_URL = "/api/order/"

// read all orders
const readAll = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL + "read/all", config)
  return response.data
}

// read my orders
const readMy = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL + "read/my", config)
  return response.data
}

// create order
const create = async (order, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(API_URL + "create", order, config)
  return response.data
}

// read order
const read = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL + "read/" + id, config)
  return response.data
}

// update order status
const updateStatus = async (id, current_status, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  console.log("current_status", current_status)
  const response = await axios.put(
    API_URL + "update-status/" + id,
    current_status,
    config
  )
  return response.data
}

// update order measurement
const updateMeasurement = async (id, measurement, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.put(
    API_URL + "update-measurement/" + id,
    measurement,
    config
  )
  return response.data
}

// delete order
const remove = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.delete(API_URL + "delete/" + id, config)
  return response.data
}

const orderService = {
  readAll,
  readMy,
  create,
  read,
  updateStatus,
  updateMeasurement,
  remove,
}
export default orderService

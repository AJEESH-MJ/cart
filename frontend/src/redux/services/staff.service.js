import axios from 'axios'

const API_URL = '/api/staff/'

// Register staff
const register = async (staff) => {
  const response = await axios.post(API_URL + 'register', staff)

  if (response.data.token) {
    localStorage.setItem('staff', JSON.stringify(response.data))
  }

  return response.data
}

// Login staff
const login = async (staff) => {
  const response = await axios.post(API_URL + 'login', staff)

  if (response.data.token) {
    localStorage.setItem('staff', JSON.stringify(response.data))
  }

  return response.data
}

// Logout staff
const logout = () => {
  localStorage.removeItem('staff')
}

const staffService = {
  register,
  logout,
  login,
}

export default staffService

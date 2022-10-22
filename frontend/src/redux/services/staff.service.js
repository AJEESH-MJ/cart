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

// Get profile
const getProfile = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL + 'profile', config)
  return response.data
}

// Logout staff
const logout = () => {
  localStorage.removeItem('staff')
}

const staffService = {
  register,
  logout,
  getProfile,
  login,
}
export default staffService

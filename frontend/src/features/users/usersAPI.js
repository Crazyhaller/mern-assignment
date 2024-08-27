import axios from 'axios'

const API_URL = 'http://localhost:5000/api'

export const fetchUsers = async (params) => {
  const response = await axios.get(`${API_URL}/users`, { params })
  return response
}

import axios from 'axios'

const API_URL = 'https://heliverse-assignment-cb4v.onrender.com/api'

export const fetchUsers = async (params) => {
  const response = await axios.get(`${API_URL}/users`, { params })
  return response
}

import axios from 'axios'

const API_URL = 'http://localhost:5000/api'

export const createTeam = async (teamData) => {
  const response = await axios.post(`${API_URL}/team`, teamData)
  return response
}

export const fetchTeamById = async (teamId) => {
  const response = await axios.get(`${API_URL}/team/${teamId}`)
  return response
}

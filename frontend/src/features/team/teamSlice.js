import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createTeam, fetchTeamById } from './teamAPI'

export const addTeam = createAsyncThunk('team/addTeam', async (teamData) => {
  const response = await createTeam(teamData)
  return response.data
})

export const getTeam = createAsyncThunk('team/getTeam', async (teamId) => {
  const response = await fetchTeamById(teamId)
  return response.data
})

const teamSlice = createSlice({
  name: 'team',
  initialState: {
    team: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTeam.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(addTeam.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.team = action.payload
      })
      .addCase(addTeam.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(getTeam.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getTeam.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.team = action.payload
      })
      .addCase(getTeam.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default teamSlice.reducer

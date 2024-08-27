import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchUsers } from './usersAPI'

export const getUsers = createAsyncThunk('users/getUsers', async (params) => {
  const response = await fetchUsers(params)
  return response.data
})

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.users = action.payload
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default usersSlice.reducer

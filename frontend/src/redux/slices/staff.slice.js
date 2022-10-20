import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import staffService from '../services/staff.service'

// Get staff from localStorage
const staff = JSON.parse(localStorage.getItem('staff'))

const initialState = {
  staff: staff ? staff : null,
  status: 'idle',
  errors: null,
}

// Register staff
export const register = createAsyncThunk(
  'staff/register',
  async (staff, thunkAPI) => {
    try {
      const data = await staffService.register(staff)

      if (data.token) {
        return data
      } else {
        return thunkAPI.rejectWithValue(data)
      }
    } catch (error) {
      const errorMessage = error.message || error.toString()
      return thunkAPI.rejectWithValue({ errorMessage })
    }
  }
)

// Login staff
export const login = createAsyncThunk(
  'staff/login',
  async (staff, thunkAPI) => {
    try {
      const data = await staffService.login(staff)

      if (data.token) {
        return data
      } else {
        return thunkAPI.rejectWithValue(data)
      }
    } catch (error) {
      const errorMessage = error.message || error.toString()
      return thunkAPI.rejectWithValue({ errorMessage })
    }
  }
)

// Logout staff
export const logout = createAsyncThunk('staff/logout', async () => {
  await staffService.logout()
})

// Staff slice
export const staffSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {
    reset: (state) => {
      state.status = 'idle'
      state.errors = null
    },
  },
  extraReducers: {
    // Register lifecycle
    [register.pending]: (state) => {
      state.status = 'pending'
    },
    [register.fulfilled]: (state, action) => {
      state.status = 'fulfilled'
      state.errors = null
      state.staff = action.payload
    },
    [register.rejected]: (state, action) => {
      state.status = 'rejected'
      state.errors = action.payload
      state.staff = null
    },
    // Login lifecycle
    [login.pending]: (state) => {
      state.status = 'pending'
    },
    [login.fulfilled]: (state, action) => {
      state.status = 'fulfilled'
      state.errors = null
      state.staff = action.payload
    },
    [login.rejected]: (state, action) => {
      state.status = 'rejected'
      state.errors = action.payload
      state.staff = null
    },
    // Logout lifecycle
    [logout.pending]: (state) => {
      state.status = 'pending'
    },
    [logout.fulfilled]: (state) => {
      state.status = 'fulfilled'
      state.staff = null
    },
  },
})

export const { reset } = staffSlice.actions
export default staffSlice.reducer

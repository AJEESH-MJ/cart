import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import garmentService from '../services/garment.service'

const initialState = {
  garments: null,
  garment: null,
  status: 'idle',
  errors: null,
}

// Read all garments
export const readAll = createAsyncThunk(
  'garment/readAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().staff.staff.token
      const data = await garmentService.readAll(token)
      return data
    } catch (error) {
      const errorMessage = error.message || error.toString()
      return thunkAPI.rejectWithValue({ errorMessage })
    }
  }
)

// Read my garments
export const readMy = createAsyncThunk('garment/readMy', async (thunkAPI) => {
  try {
    const token = thunkAPI.getState().staff.staff.token
    const data = await garmentService.readMy(token)
    return data
  } catch (error) {
    const errorMessage = error.message || error.toString()
    return thunkAPI.rejectWithValue({ errorMessage })
  }
})

// create garment
export const create = createAsyncThunk(
  'garment/create',
  async (garment, thunkAPI) => {
    try {
      const token = thunkAPI.getState().staff.staff.token
      const data = await garmentService.create(garment, token)
      if (data._id) {
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

// read garment
export const read = createAsyncThunk('garment/read', async (id, thunkAPI) => {
  try {
    const token = thunkAPI.getState().staff.staff.token
    const data = await garmentService.read(id, token)
    if (data._id) {
      return data
    } else {
      return thunkAPI.rejectWithValue(data)
    }
  } catch (error) {
    const errorMessage = error.message || error.toString()
    return thunkAPI.rejectWithValue({ errorMessage })
  }
})

// update garment
export const update = createAsyncThunk(
  'garment/update',
  async (id, garment, thunkAPI) => {
    try {
      const token = thunkAPI.getState().staff.staff.token
      const data = await garmentService.update(id, garment, token)
      if (data._id) {
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

// delete garment
export const remove = createAsyncThunk(
  'garment/remove',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().staff.staff.token
      const data = await garmentService.remove(id, token)
      if (data._id) {
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

// garment slice
export const garmentSlice = createSlice({
  name: 'garment',
  initialState,
  reducers: {
    reset: (state) => {
      state.status = 'idle'
      state.errors = null
    },
  },
  extraReducers: {
    // Read all lifecycle
    [readAll.pending]: (state) => {
      state.status = 'pending'
    },
    [readAll.fulfilled]: (state, action) => {
      state.status = 'fulfilled'
      state.errors = null
      state.garments = action.payload
    },
    [readAll.rejected]: (state, action) => {
      state.status = 'rejected'
      state.errors = action.payload
      state.garments = null
    },
    // Read my lifecycle
    [readMy.pending]: (state) => {
      state.status = 'pending'
    },
    [readMy.fulfilled]: (state, action) => {
      state.status = 'fulfilled'
      state.errors = null
      state.garment = action.payload
    },
    [readMy.rejected]: (state, action) => {
      state.status = 'rejected'
      state.errors = action.payload
      state.garment = null
    },
    // Create lifecycle
    [create.pending]: (state) => {
      state.status = 'pending'
    },
    [create.fulfilled]: (state, action) => {
      state.status = 'fulfilled'
      state.errors = null
      state.garment = action.payload
      state.garments.push(action.payload)
    },
    [create.rejected]: (state, action) => {
      state.status = 'rejected'
      state.errors = action.payload
      state.garment = null
    },
    // Read lifecycle
    [read.pending]: (state) => {
      state.status = 'pending'
    },
    [read.fulfilled]: (state, action) => {
      state.status = 'fulfilled'
      state.errors = null
      state.garment = action.payload
    },
    [read.rejected]: (state, action) => {
      state.status = 'rejected'
      state.errors = action.payload
      state.garment = null
    },
    // Update lifecycle
    [update.pending]: (state) => {
      state.status = 'pending'
    },
    [update.fulfilled]: (state, action) => {
      state.status = 'fulfilled'
      state.errors = null
      state.garment = action.payload
    },
    [update.rejected]: (state, action) => {
      state.status = 'rejected'
      state.errors = action.payload
      state.garment = null
    },
    // Delete lifecycle
    [remove.pending]: (state) => {
      state.status = 'pending'
    },
    [remove.fulfilled]: (state, action) => {
      state.status = 'fulfilled'
      state.errors = null
      state.garment = action.payload
    },
    [remove.rejected]: (state, action) => {
      state.status = 'rejected'
      state.errors = action.payload
      state.garment = null
    },
  },
})

export const { reset } = garmentSlice.actions
export default garmentSlice.reducer

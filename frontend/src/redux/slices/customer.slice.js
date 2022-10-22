import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import customerService from '../services/customer.service'

const initialState = {
  customers: null,
  customer: null,
  status: 'idle',
  errors: null,
}

// Read all customers
export const readAll = createAsyncThunk(
  'customer/readAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().staff.staff.token
      const data = await customerService.readAll(token)
      return data
    } catch (error) {
      const errorMessage = error.message || error.toString()
      return thunkAPI.rejectWithValue({ errorMessage })
    }
  }
)

// Read my customers
export const readMy = createAsyncThunk('customer/readMy', async (thunkAPI) => {
  try {
    const token = thunkAPI.getState().staff.staff.token
    const data = await customerService.readMy(token)
    return data
  } catch (error) {
    const errorMessage = error.message || error.toString()
    return thunkAPI.rejectWithValue({ errorMessage })
  }
})

// create customer
export const create = createAsyncThunk(
  'customer/create',
  async (customer, thunkAPI) => {
    try {
      const token = thunkAPI.getState().staff.staff.token
      const data = await customerService.create(customer, token)
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

// read customer
export const read = createAsyncThunk('customer/read', async (id, thunkAPI) => {
  try {
    const token = thunkAPI.getState().staff.staff.token
    const data = await customerService.read(id, token)
    if (data.token) {
      return data
    } else {
      return thunkAPI.rejectWithValue(data)
    }
  } catch (error) {
    const errorMessage = error.message || error.toString()
    return thunkAPI.rejectWithValue({ errorMessage })
  }
})

// update customer
export const update = createAsyncThunk(
  'customer/update',
  async (id, customer, thunkAPI) => {
    try {
      const token = thunkAPI.getState().staff.staff.token
      const data = await customerService.update(id, customer, token)
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

// delete customer
export const remove = createAsyncThunk(
  'customer/remove',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().staff.staff.token
      const data = await customerService.remove(id, token)
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

// Customer slice
export const customerSlice = createSlice({
  name: 'customer',
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
      state.customers = action.payload
    },
    [readAll.rejected]: (state, action) => {
      state.status = 'rejected'
      state.errors = action.payload
      state.customers = null
    },
    // Read my lifecycle
    [readMy.pending]: (state) => {
      state.status = 'pending'
    },
    [readMy.fulfilled]: (state, action) => {
      state.status = 'fulfilled'
      state.errors = null
      state.customer = action.payload
    },
    [readMy.rejected]: (state, action) => {
      state.status = 'rejected'
      state.errors = action.payload
      state.customer = null
    },
    // Create lifecycle
    [create.pending]: (state) => {
      state.status = 'pending'
    },
    [create.fulfilled]: (state, action) => {
      state.status = 'fulfilled'
      state.errors = null
      state.customer = action.payload
      state.customers.push(action.payload)
    },
    [create.rejected]: (state, action) => {
      state.status = 'rejected'
      state.errors = action.payload
      state.customer = null
    },
    // Read lifecycle
    [read.pending]: (state) => {
      state.status = 'pending'
    },
    [read.fulfilled]: (state, action) => {
      state.status = 'fulfilled'
      state.errors = null
      state.customer = action.payload
    },
    [read.rejected]: (state, action) => {
      state.status = 'rejected'
      state.errors = action.payload
      state.customer = null
    },
    // Update lifecycle
    [update.pending]: (state) => {
      state.status = 'pending'
    },
    [update.fulfilled]: (state, action) => {
      state.status = 'fulfilled'
      state.errors = null
      state.customer = action.payload
    },
    [update.rejected]: (state, action) => {
      state.status = 'rejected'
      state.errors = action.payload
      state.customer = null
    },
    // Delete lifecycle
    [remove.pending]: (state) => {
      state.status = 'pending'
    },
    [remove.fulfilled]: (state, action) => {
      state.status = 'fulfilled'
      state.errors = null
      state.customer = action.payload
    },
    [remove.rejected]: (state, action) => {
      state.status = 'rejected'
      state.errors = action.payload
      state.customer = null
    },
  },
})

export const { reset } = customerSlice.actions
export default customerSlice.reducer

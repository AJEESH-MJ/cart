import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import orderService from "../services/order.service"

const initialState = {
  orders: null,
  order: null,
  status: "idle",
  errors: null,
}

// Read all orders
export const readAll = createAsyncThunk(
  "order/readAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().staff.staff.token
      const data = await orderService.readAll(token)
      return data
    } catch (error) {
      const errorMessage = error.message || error.toString()
      return thunkAPI.rejectWithValue({ errorMessage })
    }
  }
)

// Read my orders
export const readMy = createAsyncThunk("order/readMy", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().staff.staff.token
    const data = await orderService.readMy(token)
    return data
  } catch (error) {
    const errorMessage = error.message || error.toString()
    return thunkAPI.rejectWithValue({ errorMessage })
  }
})

//   const addOrderHandler = () => {
//     const order = {
//       garment,
//     }
//     dispatch(create(order))
//       .then(() => {
//         const current_status = {
//           job: "Order Placed",
//           note,
//         }
//         dispatch(updateStatus(current_status))
//       })
//       .then(() => {
//         const current_status = {
//           job: "Order Accepted",
//           note,
//         }
//         dispatch(updateStatus(current_status))
//       })
//   }

// create order
export const create = createAsyncThunk(
  "order/create",
  async (someData, thunkAPI) => {
    try {
      const { garment, note } = someData
      const token = thunkAPI.getState().staff.staff.token
      const order = {
        garment,
        customer_id: thunkAPI.getState().customer.customer._id,
      }
      const data = await orderService.create(order, token)
      if (data._id) {
        let current_status = {
          job: "Order Placed",
          note,
        }
        let status = await orderService.updateStatus(
          data._id,
          current_status,
          token
        )
        if (status._id) {
          current_status = {
            job: "Order Accepted",
            note,
          }
          status = await orderService.updateStatus(
            data._id,
            current_status,
            token
          )
          if (status._id) {
            return status
          } else {
            return thunkAPI.rejectWithValue(status)
          }
        } else {
          return thunkAPI.rejectWithValue(status)
        }
      } else {
        return thunkAPI.rejectWithValue(data)
      }
    } catch (error) {
      console.log(error)
      const errorMessage = error.message || error.toString()
      return thunkAPI.rejectWithValue({ errorMessage })
    }
  }
)

// read order
export const read = createAsyncThunk("order/read", async (id, thunkAPI) => {
  try {
    const token = thunkAPI.getState().staff.staff.token
    const data = await orderService.read(id, token)
    return data
  } catch (error) {
    const errorMessage = error.message || error.toString()
    return thunkAPI.rejectWithValue({ errorMessage })
  }
})

// update order status
export const updateStatus = createAsyncThunk(
  "order/updateStatus",
  async (current_status, thunkAPI) => {
    try {
      const token = thunkAPI.getState().staff.staff.token
      const id = thunkAPI.getState().order.order._id
      const data = await orderService.updateStatus(id, current_status, token)
      return data
    } catch (error) {
      const errorMessage = error.message || error.toString()
      return thunkAPI.rejectWithValue({ errorMessage })
    }
  }
)

// update order measurement
export const updateMeasurement = createAsyncThunk(
  "order/updateMeasurement",
  async (measurement, thunkAPI) => {
    try {
      const token = thunkAPI.getState().staff.staff.token
      const id = thunkAPI.getState().order.order._id
      const data = await orderService.updateMeasurement(id, measurement, token)
      return data
    } catch (error) {
      const errorMessage = error.message || error.toString()
      return thunkAPI.rejectWithValue({ errorMessage })
    }
  }
)

// delete order
export const remove = createAsyncThunk("order/remove", async (id, thunkAPI) => {
  try {
    const token = thunkAPI.getState().staff.staff.token
    const data = await orderService.remove(id, token)
    return data
  } catch (error) {
    const errorMessage = error.message || error.toString()
    return thunkAPI.rejectWithValue({ errorMessage })
  }
})

// order slice
const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    reset: (state) => {
      state.status = "idle"
      state.errors = null
    },
  },
  extraReducers: {
    // Read all lifecycle
    [readAll.pending]: (state) => {
      state.status = "pending"
    },
    [readAll.fulfilled]: (state, action) => {
      state.status = "fulfilled"
      state.errors = null
      state.orders = action.payload
    },
    [readAll.rejected]: (state, action) => {
      state.status = "rejected"
      state.errors = action.payload
      state.orders = null
    },
    // Read my lifecycle
    [readMy.pending]: (state) => {
      state.status = "pending"
    },
    [readMy.fulfilled]: (state, action) => {
      state.status = "fulfilled"
      state.errors = null
      state.order = action.payload
    },
    [readMy.rejected]: (state, action) => {
      state.status = "rejected"
      state.errors = action.payload
      state.order = null
    },
    // Create lifecycle
    [create.pending]: (state) => {
      state.status = "pending"
    },
    [create.fulfilled]: (state, action) => {
      state.status = "fulfilled"
      state.errors = null
      state.order = action.payload
    },
    [create.rejected]: (state, action) => {
      state.status = "rejected"
      state.errors = action.payload
      state.order = null
    },
    // Read lifecycle
    [read.pending]: (state) => {
      state.status = "pending"
    },
    [read.fulfilled]: (state, action) => {
      state.status = "fulfilled"
      state.errors = null
      state.order = action.payload
    },
    [read.rejected]: (state, action) => {
      state.status = "rejected"
      state.errors = action.payload
      state.order = null
    },
    // Update status lifecycle
    [updateStatus.pending]: (state) => {
      state.status = "pending"
    },
    [updateStatus.fulfilled]: (state, action) => {
      state.status = "fulfilled"
      state.errors = null
      state.order = action.payload
    },
    [updateStatus.rejected]: (state, action) => {
      state.status = "rejected"
      state.errors = action.payload
      state.order = null
    },
    // Delete lifecycle
    [remove.pending]: (state) => {
      state.status = "pending"
    },
    [remove.fulfilled]: (state, action) => {
      state.status = "fulfilled"
      state.errors = null
      state.order = action.payload
    },
    [remove.rejected]: (state, action) => {
      state.status = "rejected"
      state.errors = action.payload
      state.order = null
    },
  },
})

export const { reset } = orderSlice.actions
export default orderSlice.reducer

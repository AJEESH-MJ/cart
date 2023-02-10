import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import invoiceService from "../services/invoice.service"

const initialState = {
  invoices: null,
  invoice: null,
  products: [],
  total: null,
  status: "idle",
  errors: null,
}

// Read all invoices
export const readAll = createAsyncThunk("invoice/readAll", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().staff.staff.token
    const data = await invoiceService.readAll(token)
    return data
  } catch (error) {
    const errorMessage = error.message || error.toString()
    return thunkAPI.rejectWithValue({ errorMessage })
  }
})

// Read my invoices
export const readMy = createAsyncThunk("invoice/readMy", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().staff.staff.token
    const data = await invoiceService.readMy(token)
    return data
  } catch (error) {
    const errorMessage = error.message || error.toString()
    return thunkAPI.rejectWithValue({ errorMessage })
  }
})

// create invoice
export const create = createAsyncThunk("invoice/create", async (_, thunkAPI) => {
  try {
    // token
    const token = thunkAPI.getState().staff.staff.token
    // customer id
    const customer_id = thunkAPI.getState().customer.customer._id
    console.log(customer_id)
    // add invoice
    let data = await invoiceService.create({ customer_id }, token)
    console.log(data)
    // // invoice id
    // const invoice_id = data._id
    if (data._id) {
      // products
      const products = thunkAPI.getState().invoice.products
      // add products
      data = await invoiceService.updateProduct(data._id, products, token)
      if (data._id) {
        // total
        const total = thunkAPI.getState().invoice.total
        // add total
        data = await invoiceService.updateTotal(data._id, total, token)
        if (data._id) {
          // current status
          const current_status = {
            job: "Invoice Created",
            note: "Invoice created",
          }
          // add status
          data = await invoiceService.updateStatus(data._id, current_status, token)
          if (data._id) {
            return data
          } else {
            return thunkAPI.rejectWithValue(data)
          }
        } else {
          return thunkAPI.rejectWithValue(data)
        }
      } else {
        return thunkAPI.rejectWithValue(data)
      }
    } else {
      return thunkAPI.rejectWithValue(data)
    }
  } catch (error) {
    console.log("local error")
    const errorMessage = error.message || error.toString()
    return thunkAPI.rejectWithValue({ errorMessage })
  }
})

// read invoice
export const read = createAsyncThunk("invoice/read", async (id, thunkAPI) => {
  try {
    const token = thunkAPI.getState().staff.staff.token
    const data = await invoiceService.read(id, token)
    return data
  } catch (error) {
    const errorMessage = error.message || error.toString()
    return thunkAPI.rejectWithValue({ errorMessage })
  }
})

// update invoice
export const update = createAsyncThunk("invoice/update", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().staff.staff.token
    // invoice id
    const invoice_id = thunkAPI.getState().invoice.invoice._id
    // const invoice_id = data._id
    if (invoice_id) {
      // products
      const products = thunkAPI.getState().invoice.products
      // add products
      let data = await invoiceService.updateProduct(data._id, products, token)
      if (data._id) {
        // total
        const total = thunkAPI.getState().invoice.total
        // add total
        data = await invoiceService.updateTotal(data._id, total, token)
        if (data._id) {
          // current status
          const current_status = {
            job: "Invoice Created",
            note: "Invoice created",
          }
          // add status
          data = await invoiceService.updateStatus(data._id, current_status, token)
          if (data._id) {
            return data
          } else {
            return thunkAPI.rejectWithValue(data)
          }
        } else {
          return thunkAPI.rejectWithValue(data)
        }
      } else {
        return thunkAPI.rejectWithValue(data)
      }
    } else {
      return thunkAPI.rejectWithValue("No invoice id")
    }
  } catch (error) {
    const errorMessage = error.message || error.toString()
    return thunkAPI.rejectWithValue({ errorMessage })
  }
})

// delete invoice
export const remove = createAsyncThunk("invoice/remove", async (id, thunkAPI) => {
  try {
    const token = thunkAPI.getState().staff.staff.token
    const data = await invoiceService.remove(id, token)
    return data
  } catch (error) {
    const errorMessage = error.message || error.toString()
    return thunkAPI.rejectWithValue({ errorMessage })
  }
})

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload
      // calculate total by adding price of each product
      let total = 0
      state.products.forEach((product) => {
        total += product.price * product.quantity
      })
      state.total = total
    },
    addTotal: (state, action) => {
      state.total = action.payload
    },
  },
  extraReducers: {
    // Read all lifecycle
    [readAll.pending]: (state) => {
      state.status = "loading"
    },
    [readAll.fulfilled]: (state, action) => {
      state.status = "succeeded"
      state.invoices = action.payload
    },
    [readAll.rejected]: (state, action) => {
      state.status = "failed"
      state.errors = action.payload
    },
    // Read my lifecycle
    [readMy.pending]: (state) => {
      state.status = "loading"
    },
    [readMy.fulfilled]: (state, action) => {
      state.status = "succeeded"
      state.invoices = action.payload
    },
    [readMy.rejected]: (state, action) => {
      state.status = "failed"
      state.errors = action.payload
    },
    // Create lifecycle
    [create.pending]: (state) => {
      state.status = "loading"
    },
    [create.fulfilled]: (state, action) => {
      state.status = "succeeded"
      state.errors = null
      state.invoice = action.payload
    },
    [create.rejected]: (state, action) => {
      state.status = "failed"
      state.errors = action.payload
      state.invoice = null
    },
    // Read lifecycle
    [read.pending]: (state) => {
      state.status = "loading"
    },
    [read.fulfilled]: (state, action) => {
      state.status = "succeeded"
      state.errors = null
      state.invoice = action.payload
    },
    [read.rejected]: (state, action) => {
      state.status = "failed"
      state.errors = action.payload
      state.invoice = null
    },
    // Update lifecycle
    [update.pending]: (state) => {
      state.status = "loading"
    },
    [update.fulfilled]: (state, action) => {
      state.status = "succeeded"
      state.errors = null
      state.invoice = action.payload
    },
    [update.rejected]: (state, action) => {
      state.status = "failed"
      state.errors = action.payload
      state.invoice = null
    },
    // Delete lifecycle
    [remove.pending]: (state) => {
      state.status = "loading"
    },
    [remove.fulfilled]: (state, action) => {
      state.status = "succeeded"
      state.errors = null
      state.invoice = action.payload
    },
    [remove.rejected]: (state, action) => {
      state.status = "failed"
      state.errors = action.payload
      state.invoice = null
    },
  },
})

export const { addProducts, addTotal } = invoiceSlice.actions
export default invoiceSlice.reducer

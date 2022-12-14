import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import templateService from "../services/template.service"

const initialState = {
  templates: null,
  template: null,
  status: "idle",
  errors: null,
}

// Read all templates
export const readAll = createAsyncThunk(
  "template/readAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().staff.staff.token
      const data = await templateService.readAll(token)
      return data
    } catch (error) {
      const errorMessage = error.message || error.toString()
      return thunkAPI.rejectWithValue({ errorMessage })
    }
  }
)

// Read my templates
export const readMy = createAsyncThunk(
  "template/readMy",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().staff.staff.token
      const data = await templateService.readMy(token)
      return data
    } catch (error) {
      const errorMessage = error.message || error.toString()
      return thunkAPI.rejectWithValue({ errorMessage })
    }
  }
)

// create template
export const create = createAsyncThunk(
  "template/create",
  async (template, thunkAPI) => {
    try {
      const token = thunkAPI.getState().staff.staff.token
      const data = await templateService.create(template, token)
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

// read template
export const read = createAsyncThunk("template/read", async (id, thunkAPI) => {
  try {
    const token = thunkAPI.getState().staff.staff.token
    const data = await templateService.read(id, token)
    return data
  } catch (error) {
    const errorMessage = error.message || error.toString()
    return thunkAPI.rejectWithValue({ errorMessage })
  }
})

// update template
export const update = createAsyncThunk(
  "template/update",
  async (template, thunkAPI) => {
    try {
      const token = thunkAPI.getState().staff.staff.token
      const data = await templateService.update(template, token)
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

// delete template
export const remove = createAsyncThunk(
  "template/remove",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().staff.staff.token
      const data = await templateService.remove(id, token)
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

// template slice
const templateSlice = createSlice({
  name: "template",
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
      state.templates = action.payload
    },
    [readAll.rejected]: (state, action) => {
      state.status = "rejected"
      state.errors = action.payload
      state.templates = null
    },
    // Read my lifecycle
    [readMy.pending]: (state) => {
      state.status = "pending"
    },
    [readMy.fulfilled]: (state, action) => {
      state.status = "fulfilled"
      state.errors = null
      state.template = action.payload
    },
    [readMy.rejected]: (state, action) => {
      state.status = "rejected"
      state.errors = action.payload
      state.template = null
    },
    // Create lifecycle
    [create.pending]: (state) => {
      state.status = "pending"
    },
    [create.fulfilled]: (state, action) => {
      state.status = "fulfilled"
      state.errors = null
      state.template = action.payload
      state.templates.push(action.payload)
    },
    [create.rejected]: (state, action) => {
      state.status = "rejected"
      state.errors = action.payload
      state.template = null
    },
    // Read lifecycle
    [read.pending]: (state) => {
      state.status = "pending"
    },
    [read.fulfilled]: (state, action) => {
      state.status = "fulfilled"
      state.errors = null
      state.template = action.payload
    },
    [read.rejected]: (state, action) => {
      state.status = "rejected"
      state.errors = action.payload
      state.template = null
    },
    // Update lifecycle
    [update.pending]: (state) => {
      state.status = "pending"
    },
    [update.fulfilled]: (state, action) => {
      state.status = "fulfilled"
      state.errors = null
      state.template = action.payload
    },
    [update.rejected]: (state, action) => {
      state.status = "rejected"
      state.errors = action.payload
      state.template = null
    },
    // Delete lifecycle
    [remove.pending]: (state) => {
      state.status = "pending"
    },
    [remove.fulfilled]: (state, action) => {
      state.status = "fulfilled"
      state.errors = null
      state.template = action.payload
    },
    [remove.rejected]: (state, action) => {
      state.status = "rejected"
      state.errors = action.payload
      state.template = null
    },
  },
})

export const { reset } = templateSlice.actions
export default templateSlice.reducer

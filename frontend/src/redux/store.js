import { configureStore } from '@reduxjs/toolkit'
import staffReducer from '../redux/slices/staff.slice'
import customerReducer from '../redux/slices/customer.slice'

export const store = configureStore({
  reducer: {
    staff: staffReducer,
    customer: customerReducer,
  },
})

import { configureStore } from "@reduxjs/toolkit"
import staffReducer from "../redux/slices/staff.slice"
import customerReducer from "../redux/slices/customer.slice"
import garmentReducer from "../redux/slices/garment.slice"
import orderReducer from "../redux/slices/order.slice"

export const store = configureStore({
  reducer: {
    staff: staffReducer,
    customer: customerReducer,
    garment: garmentReducer,
    order: orderReducer,
  },
})

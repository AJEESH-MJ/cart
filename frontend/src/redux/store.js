import { configureStore } from '@reduxjs/toolkit'
import staffReducer from '../redux/slices/staff.slice'
// import noteReducer from '../redux/slices/note.slice'

export const store = configureStore({
  reducer: {
    staff: staffReducer,
    // note: noteReducer,
  },
})

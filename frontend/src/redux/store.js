import { configureStore } from '@reduxjs/toolkit'
// import userReducer from '../redux/slices/user.slice'
// import noteReducer from '../redux/slices/note.slice'

export const store = configureStore({
  reducer: {
    // user: userReducer,
    // note: noteReducer,
  },
})

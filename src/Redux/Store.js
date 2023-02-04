import { configureStore } from '@reduxjs/toolkit'
import addUser from './Reducer'

export const store = configureStore({
  reducer: {
    user: addUser,
  },
})
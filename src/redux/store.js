import { configureStore } from '@reduxjs/toolkit'
import monopolySlice from './slice'

const store = configureStore({
  reducer: monopolySlice,
})

export default store
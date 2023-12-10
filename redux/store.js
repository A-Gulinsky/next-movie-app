
import { configureStore } from '@reduxjs/toolkit'
import { pageSlice } from './features/pageSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      page: pageSlice.reducer
    },
  })
}
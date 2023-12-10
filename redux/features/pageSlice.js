import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: '/'
}

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    ToggleMenu(state, action) {  
      state.isOpen = action.payload
    },
    ChangePage(state, action) {
      state.page = action.payload
    }
  }
})

export const { ChangePage } = pageSlice.actions;

export default pageSlice.reducer
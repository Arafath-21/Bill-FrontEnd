import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: null,
};

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    addItem(state, action) {
      state.items = action.payload;
    },
  },
});

export const { addItem } = itemSlice.actions;

export default itemSlice.reducer;

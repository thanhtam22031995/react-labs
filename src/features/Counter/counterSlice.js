import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  // initialState: 0,
  initialState: { value: 0 },
  reducers: {
    increment(state) {
      // return state + 1;
      state.value++;
      // immer chi dung voi array va object
    },
    decrement(state) {
      // return state - 1;
      return { ...state, value: state.value - 1 };
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

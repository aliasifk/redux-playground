// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 100,
  },
  reducers: {
    incrementValue: (state) => {
      state.value += 1;
    },
    decrementValue: (state) => {
      state.value -= 1;
    },
  },
});

export const { incrementValue, decrementValue } = counterSlice.actions;

export default counterSlice.reducer;

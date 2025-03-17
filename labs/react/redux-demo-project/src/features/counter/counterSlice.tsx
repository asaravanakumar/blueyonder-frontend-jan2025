import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// A slice is a portion of the Redux state with specific actions and reducers.
// createSlice is a function that accepts an object of reducer functions, a slice name,
// and an initial state value, and automatically generates action creators and action types that correspond to the reducers and state.

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

//increment, decrement, and incrementByAmount are actions created by createSlice
// initialState defines the default state for the counter slice.

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;

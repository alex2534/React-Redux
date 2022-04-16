/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

//needs an object as an argument
const counterSlice = createSlice({
	name: "counter",
	initialState: initialCounterState,
	//reducers also receive an object or you could say a map
	reducers: {
		increment(state) {
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			state.counter = state.counter + action.payload;
		},
		toggleCounter(state) {
			//this will inverte the state if true to false and if false to true
			state.showCounter = !state.showCounter;
		},
	},
});

export default counterSlice.reducer;

export const counterActions = counterSlice.actions;

/** @format */

import react, { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
	if (action.type === "increment") {
		return {
			counter: state.counter + 1,
		};
	}

	if (action.type === "decrement") {
		return {
			counter: state.counter - 1,
		};
	}
	return state;
};

//this creates our react store
const store = createStore(counterReducer);

export default store;
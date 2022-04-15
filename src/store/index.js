/** @format */

import react, { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
	//an action return an object of any type
	if (action.type === "increment") {
		return {
			counter: state.counter + 1,
		};
	}

	//an action return an object of any type
	if (action.type === "increase") {
		return {
			counter: state.counter + action.amount,
		};
	}
	//an action return an object of any type
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

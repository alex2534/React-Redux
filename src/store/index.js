/** @format */

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import counterReducer from "./counter";

//the create store receives a parameter an object a configured object
//this creates our react store
const store = configureStore({
	reducer: {
		counter: counterReducer,
		auth: authReducer,
	},
});

export default store;

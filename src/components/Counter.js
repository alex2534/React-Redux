/** @format */

import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
	//we don't have to give any argumento this useDispatch
	//it gives as a usedispatch function so we can call and it will dispatch a action
	//agains the redux store
	const dispatch = useDispatch();

	//we have to pass a function to useSelector the function
	//will recieve the state from the redux
	//the parte we want to extract from the redux store
	const counter = useSelector((state) => state.counter);

	const incrementHandler = () => {
		//an action is an object as an argument
		dispatch({
			type: "increment",
		});
	};

	const increasetHandler = () => {
		dispatch({
			type: "increase",
			amount: 10,
		});
	};

	const decrementHandler = () => {
		//an action is an object as an argument
		dispatch({
			type: "decrement",
		});
	};

	const toggleCounterHandler = () => {};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			<div className={classes.value}>{counter}</div>
			<div>
				<button onClick={incrementHandler}>increment</button>
				<button onClick={increasetHandler}>Increase by 10</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;

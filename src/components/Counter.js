/** @format */

import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
	//we don't have to give any argumento this useDispatch
	//it gives as a usedispatch function so we can call and it will dispatch a action
	//agains the redux store
	const dispatch = useDispatch();

	//we have to pass a function to useSelector the function
	//will recieve the state from the redux
	//the parte we want to extract from the redux store
	//we can have as many as we need of the useSelector
	const counter = useSelector((state) => state.counter.counter);
	const show = useSelector((state) => state.counter.showCounter);
	const incrementHandler = () => {
		dispatch(counterActions.increment());
	};

	const increasetHandler = () => {
		dispatch(counterActions.increase(10));
	};

	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	};

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggleCounter());
		console.log("hello");
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{show && <div className={classes.value}>{counter}</div>}
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

import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const increment = () => {
    dispatch(counterActions.increment());
  }

  const decrement = () => {
    dispatch(counterActions.decrement());
  }

  const increase = () => {
    dispatch(counterActions.increase(10));
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}

      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={increase}>Increase by 10</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

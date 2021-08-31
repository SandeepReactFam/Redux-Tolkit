import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
const Counter = () => {
  const counterNum = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  const incremnentHandler = () => {
    dispatch(counterActions.increment());
  };
  const increseHandler = () => {
    dispatch(counterActions.increase(10));
  };
  const decrimentHandler = () => {
    dispatch(counterActions.decriment());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counterNum}</div>}
      <div>
        <button onClick={incremnentHandler}>incriment</button>
        <button onClick={increseHandler}>incrimentby5</button>
        <button onClick={decrimentHandler}>decriment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

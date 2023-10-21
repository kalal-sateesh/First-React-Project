import { useState } from "react";
import styles from "./Counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0); //This line creates the state
  const incrementHandler = () => {
    console.log("before count", count);
    setCount(count + 1); // asynch in nature
    // setCount(count + 1); //it will give same 0+1 = 1;
    // setCount((preState) => preState + 1); // 1
    // setCount((preState) => preState + 1); //1+1= 2;
    // console.log("before count", count);
  };
  const decrementHandler = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const resetHandler = () => setCount(0);
  return (
    <div className={styles.container}>
      <h2>Counter</h2>
      <h2>{count}</h2>
      <button className="Increment" onClick={incrementHandler}>
        Increment
      </button>
      <button className="Increment" onClick={decrementHandler}>
        Decrement
      </button>
      <button className="Increment" onClick={resetHandler}>
        Reset
      </button>
    </div>
  );
};

export default Counter;

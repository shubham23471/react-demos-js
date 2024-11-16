import React from "react";
import { useReducer, useState } from "react";
import { counterReducer, initialState } from "../counterReducer";

const Counter = () => {
  // use Reducer
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [inputValue, setInputValue] = useState(0);

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  const handleIncrementByAmount = () => {
    // you can also use the + constructor instead of Number()
    dispatch({ type: "incrementByAmount", payload: Number(inputValue) });
    setInputValue(0);
  };

  const handleDecrementByAmount = () => {
    dispatch({ type: "decrementByAmount", payload: Number(inputValue) });
    setInputValue(0);
  };
  return (
    <div>
      <h2>Counter:{state.count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <div>
        <input
          type="number"
          placeholder="Enter value"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button onClick={handleIncrementByAmount}>Increment Value</button>
        <button onClick={handleDecrementByAmount}>Decrement Value</button>
      </div>
    </div>
  );
};

export default Counter;

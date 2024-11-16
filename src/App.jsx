import React from "react";
import { useReducer } from "react";

// Initnal value
const intialState = { count: 0 };
// Reducer function
const reducer = (state, action) => {
  //state: what we are updating
  // action : how we are going to update that
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}> + </button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>RESET</button>
      <h1>Count: {state.count}</h1>
    </div>
  );
};

export default App;

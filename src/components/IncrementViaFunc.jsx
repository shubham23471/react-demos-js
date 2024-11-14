import React from "react";

const IncrementViaFunc = ({ counter, setCounter }) => {
  // Update logic: will also be defined in a function
  // insted of this :   const updateLogic = setCounter(counter + 1);
  const updateLogic = () => {
    setCounter((i) => i + 1);
  };
  return (
    <div>
      IncrementViaFunc
      {/* <button onClick={updateLogic}>Update from a function: {counter}</button> */}
      <button onClick={updateLogic}>Update from a function: {counter}</button>
    </div>
  );
};

export default IncrementViaFunc;

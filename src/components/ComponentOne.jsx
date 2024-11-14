import React from "react";

const ComponentOne = ({ count, setCount, updateClickHandler }) => {
  const updateByOne = () => setCount(count + 1);

  return (
    <div>
      Value of count from ComponentOne: {count}
      <button onClick={updateByOne}>Update</button>
      <button onClick={updateClickHandler}>Update from App</button>
    </div>
  );
};

export default ComponentOne;

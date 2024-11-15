import React, { useEffect, useState } from "react";

// the console message will only logged on the initial
// render because of empty dependency array: `[]`

const BasicEffect = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("message from useEffect");
    document.title = `Incremented by ${counter}`;
  }, []);
  return (
    <div>
      <p>Counter: {counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default BasicEffect;

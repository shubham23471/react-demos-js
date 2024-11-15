import React, { useEffect, useState } from "react";

// Everytime you update the value of Counter by using
// Increment button, a new message will be printed on
// the console.

// Nothing will happend when you click on "Increment by otherval"

const CounterEffect = () => {
  const [counter, setCounter] = useState(0);
  const [other, setOther] = useState(0);

  // useEffect funtion only dependent on: counter value
  useEffect(() => {
    console.log("message from useEffect");
    document.title = `Incremented by ${counter}`;
  }, [counter]);
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

      <button
        onClick={() => {
          setOther(counter + 1);
        }}
      >
        Increment by otherVal
      </button>
    </div>
  );
};

export default CounterEffect;

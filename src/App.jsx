import React, { useEffect, useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);
  const [something, setSomething] = useState(0);

  // useEffect function with depencendy array.
  // this function will be called every single
  // time when you click "Click Me"
  // useEffect(() => {
  //   console.log("call useEffect");
  //   document.title = `Increment ${value}`;
  // });

  // with empty dependency array
  // now you will only see `call useEffect` on
  // on the console on intial render.
  // useEffect(() => {
  //   console.log("call useEffect");
  //   document.title = `Increment ${value}`;
  // }, []);

  // useEffect based on some value
  // any-time the state of `value` changes
  // then useEffect will call the callback function
  useEffect(() => {
    console.log("call useEffect");
    document.title = `Increment ${value}`;
  }, [value]);

  return (
    <div>
      <h2>{value}</h2>
      <button onClick={() => setValue(value + 1)}>Click me</button>
      <button onClick={() => setSomething(value + 1)}>
        Increment based value of `something`
      </button>
    </div>
  );
};

export default App;

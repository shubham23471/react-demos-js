import React from "react";
import { useState } from "react";
import IncrementViaFunc from "./components/IncrementViaFunc";

const App = () => {
  // Intinal value is defined by a function
  const [counter, setCounter] = useState(() => {
    const initialCount = 10;
    return initialCount;
  });
  return (
    <div>
      <IncrementViaFunc counter={counter} setCounter={setCounter} />
    </div>
  );
};

export default App;

import React from "react";
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";
import { useState } from "react";

const App = () => {
  // TODO: Update this count from child component
  const [count, setCount] = useState(0);
  const updateClickHandler = () => setCount(count + 100);
  return (
    <div>
      <ComponentOne
        count={count}
        setCount={setCount}
        updateClickHandler={updateClickHandler}
      />
      <ComponentTwo count={count} />
    </div>
  );
};

export default App;

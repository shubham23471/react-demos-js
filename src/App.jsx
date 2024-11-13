import React from "react";
import Person from "./components/Person";

const App = () => {
  return (
    <Person name="shuhham" age={20}>
      <p />
      This is children elment
    </Person>
  );
};

export default App;

import React from "react";
import Weather from "./components/Weather";

const App = () => {
  const tempValue = 15;
  return <Weather temperatue={tempValue}></Weather>;
};

export default App;

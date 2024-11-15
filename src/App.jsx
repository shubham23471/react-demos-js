import React from "react";
import { createContext } from "react";
import ComponentA from "./components/ComponentA";

//creating instance on context and exporting it
// so we can use it
export const Data = createContext();
export const Data1 = createContext();

const App = () => {
  const name = "Shubham";
  const age = 22;
  return (
    <div>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentA />
        </Data1.Provider>
      </Data.Provider>
    </div>
  );
};

export default App;

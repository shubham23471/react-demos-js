import React from "react";
//importing useContext hook
import { useContext } from "react";
// import the context
import { Data } from "../App";
import { Data1 } from "../App";

// here we want to use the data: "name" from App.jsx
const ComponentC = () => {
  const userName = useContext(Data);
  const age = useContext(Data1);

  return (
    <div>
      <h1>
        My name is :{userName} and I'm {age} years old
      </h1>
    </div>
  );
};

export default ComponentC;

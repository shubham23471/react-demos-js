import React from "react";
// import the context
import { Data } from "../App";
import { Data1 } from "../App";

// here we want to use the data: "name" from App.jsx
const ComponentC = () => {
  return (
    <div>
      <Data.Consumer>
        {/* {consumer take a callback function} */}
        {(name) => {
          return <h1>{name}</h1>;
        }}
      </Data.Consumer>
      <Data1.Consumer>
        {/* {consumer take a callback function} */}
        {(name) => {
          return <h1>{name}</h1>;
        }}
      </Data1.Consumer>
    </div>
  );
};

export default ComponentC;

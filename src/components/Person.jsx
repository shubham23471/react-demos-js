import React from "react";

const Person = ({ name, age, children }) => {
  return (
    <div>
      {name} {age} {children}
    </div>
  );
};

export default Person;

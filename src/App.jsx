import React from "react";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState(null);

  // only want to render this content once: []
  // fetch the data and store it data var using setData
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </div>
  );
};

export default App;

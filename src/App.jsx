import React from "react";
import useFetch from "./components/useFetch";

const App = () => {
  // calling customHook with url
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

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

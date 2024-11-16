import { useState, useEffect } from "react";

// function with all the needed functionality
// since, it's an hook the convetion for func name is
// use<rest-of-the-function-name>
const useFetch = (url) => {
  // default value to null
  const [data, setData] = useState(null);

  // only want to render this content once: []
  // fetch the data and store it data var using setData
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return [data];
};

export default useFetch;

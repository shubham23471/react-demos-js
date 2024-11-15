import React, { useEffect, useState } from "react";

const FetchDataEffect = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // get the data from URL
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      // converting into json
      const data = await response.json();
      setPosts(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>First Post Title:</h1>
      {posts.length > 0 ? <h2>{posts[0].title}</h2> : <h2>Loading..</h2>}
    </div>
  );
};

export default FetchDataEffect;

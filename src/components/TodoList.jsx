import React, { useState } from "react";

const TodoList = () => {
  const [todoList, setTodoList] = useState(["App", "swim"]);
  const updateItemHandler = () => {
    return setTodoList([...todoList, "new item"]);
  };
  return (
    <div>
      <ul>
        {todoList.map((item) => (
          <li key={item}>{item} </li>
        ))}
      </ul>
      <button onClick={updateItemHandler}>Add Item</button>
    </div>
  );
};

export default TodoList;

import React, { useState } from "react";

// this will show you how to initilize a 'array' as initial
// value and then update it

const TodoListForm = () => {
  // submit: execute a function which take value from input
  // and update the empty array
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  // function to update: inputValue when form is submit

  const handleSubmit = (e) => {
    //get the event object e and stop the default behaviour
    e.preventDefault();
    if (inputValue.trim()) {
      // update the array with user input
      setTodoList([...todoList, inputValue]);
      // empty out the value
      setInputValue("");
    }
  };
  // when there is a change in the form
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      TodoListForm
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          placeholder="Enter item"
          onChange={handleChange}
        ></input>
        <button type="submit">Add item</button>
      </form>
    </div>
  );
};

export default TodoListForm;

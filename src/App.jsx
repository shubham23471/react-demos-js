import React from "react";
import TodoList from "./components/TodoList";
import { useState } from "react";
import Counter from "./components/Counter";
import TodoListForm from "./components/TodoListForm";
import Profile from "./components/Profile";
import ShoppingList from "./components/ShoppingList";

const App = () => {
  return (
    <div>
      {/* <p>------- Simple Counter-------</p>
      <Counter></Counter>
      <p>--------------</p>
      <p>------- Static Item update-------</p>
      <TodoList> </TodoList>
      <p>--------------</p> */}
      {/* <TodoListForm></TodoListForm> */}
      {/* <Profile></Profile> */}
      <ShoppingList></ShoppingList>
    </div>
  );
};

export default App;

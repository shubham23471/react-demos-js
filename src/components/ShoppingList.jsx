import React, { useState } from "react";

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // name and quantity are the "value" of our
    // input form
    if (!name || !quantity) return;

    // storing the user entered value in newItem
    const newItem = {
      name: name,
      quantity: parseInt(quantity),
    };
    // setting the newItem value to our item for rendering
    setItems((prevItems) => [...prevItems, newItem]);
    // after setting the value, cleaning up the values
    setName("");
    setQuantity("");
  };

  return (
    <div>
      <h1>ShoppingList</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        ></input>

        <button type="submit"> Add Item </button>
      </form>

      {/* {to show the shopping list} */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            Name {item.name} - Quantity{item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;

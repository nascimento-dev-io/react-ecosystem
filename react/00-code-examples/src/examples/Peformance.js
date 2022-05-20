import React, { useState } from "react";

export const ListItems = () => {
  const [items, setItems] = useState([]);
  const [itemValue, setItemValue] = useState("");

  console.log("Re-rended: ListItems");
  console.log(items);

  function handleAddItem(e) {
    e.preventDefault();
    setItems([...items, itemValue]);
  }

  function handleRemoveItem(id) {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  }

  return (
    <>
      <form onSubmit={handleAddItem}>
        <input
          onChange={(e) => setItemValue(e.target.value)}
          value={itemValue}
        />
        <button type="submit">Add Item</button>
      </form>
      <ul>{items.length > 0 && items.map((item) => <li>{item}</li>)}</ul>
    </>
  );
};

// Child's

// const Item = ({ item, handleRemoveItem }) => {
//   console.log("Re-rended: Items");

//   return (
//     <li key={item.id}>
//       {" "}
//       {item.text} <button onClick={handleRemoveItem(item.id)}>x</button>
//     </li>
//   );
// };

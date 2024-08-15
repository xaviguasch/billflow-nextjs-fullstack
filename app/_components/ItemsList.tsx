"use client";

import { useState } from "react";

import NewItem from "./NewItem";
import AddNewItemBtn from "./AddNewItemBtn";

const ItemsList = () => {
  const [items, setItems] = useState([
    {
      id: "original-item",
    },
  ]);

  const addNewItem = () => {
    const newItem = { id: crypto.randomUUID() };

    setItems([...items, newItem]);
  };

  return (
    <div className="flex flex-col items-stretch justify-start gap-y-6">
      <h3 className="text-steel text-lg font-bold tracking-wider">Item List</h3>
      {items.map((item) => (
        <NewItem id={item.id} key={item.id} />
      ))}
      <AddNewItemBtn addNewItem={addNewItem} />
    </div>
  );
};

export default ItemsList;

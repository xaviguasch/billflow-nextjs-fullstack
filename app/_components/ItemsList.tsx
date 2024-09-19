"use client";

import { useState } from "react";

import NewItem from "./NewItem";
import AddNewItemBtn from "./AddNewItemBtn";

const ItemsList = ({ invoiceItems }) => {
  const [items, setItems] = useState(
    invoiceItems || [
      {
        name: `input1`,
        _id: `input1`,
      },
    ],
  );

  const addNewItem = () => {
    const newItem = {
      name: `input${items.length + 1}`,
      _id: `input${items.length + 1}`,
      quantity: 0,
      price: 0,
      total: 0,
    };

    setItems([...items, newItem]);
  };

  return (
    <div className="flex flex-col items-stretch justify-start gap-y-6">
      <h3 className="text-lg font-bold tracking-wider text-steel">Item List</h3>
      {items.map((item) => (
        <NewItem key={item._id} item={item} />
      ))}
      <AddNewItemBtn addNewItem={addNewItem} />
    </div>
  );
};

export default ItemsList;

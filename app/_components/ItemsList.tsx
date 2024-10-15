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
    <div className="grid grid-cols-1 gap-y-6 md:gap-y-4">
      <h3 className="col-start-1 col-end-2 text-lg font-bold tracking-wider text-steel focus-visible:border-purple-mimosa focus-visible:outline-none dark:focus-visible:border-medium-slate-blue">
        Item List
      </h3>
      {items.map((item) => (
        <NewItem key={item._id} item={item} />
      ))}
      <AddNewItemBtn addNewItem={addNewItem} />
    </div>
  );
};

export default ItemsList;

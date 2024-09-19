"use client";

import { useId, useState } from "react";
import IconDeleteSVG from "./IconDeleteSVG";

const NewItem = ({ item }) => {
  console.log("&&&&&&&&&&&&&&&&&&&&");
  console.log(item);
  console.log("&&&&&&&&&&&&&&&&&&&&");

  const [qty, setQty] = useState(item.quantity || 0);
  const [price, setPrice] = useState(item.price || 0);

  const total = qty * price;

  return (
    <div className="flex flex-col items-stretch justify-start space-y-6">
      <div className="flex flex-col items-stretch justify-start space-y-2.5">
        <label
          htmlFor={`item-name-${item._id}`}
          className="text-xs text-wild-blue-yonder"
        >
          Item Name
        </label>
        <input
          type="text"
          id={`item-name-${item._id}`}
          name={`item-name-${item._id}`}
          className="w-full rounded border border-link-water px-5 py-[14px] text-xs font-bold focus:border-purple-mimosa"
          defaultValue={item.name}
        />
      </div>

      <div className="flex flex-row items-stretch justify-between space-x-6">
        <div className="flex w-1/6 flex-col items-stretch justify-start space-y-2.5">
          <label
            htmlFor={`item-qty-${item._id}`}
            className="text-xs text-wild-blue-yonder"
          >
            Qty.
          </label>
          <input
            type="number"
            id={`item-qty-${item._id}`}
            name={`item-qty-${item._id}`}
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            className="w-full rounded border border-link-water px-4 py-[14px] text-xs font-bold [appearance:textfield] focus:border-purple-mimosa [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
        </div>

        <div className="flex w-2/6 flex-col items-stretch justify-start space-y-2.5">
          <label
            htmlFor={`item-price-${item._id}`}
            className="text-xs text-wild-blue-yonder"
          >
            Price
          </label>
          <input
            type="number"
            id={`item-price-${item._id}`}
            name={`item-price-${item._id}`}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full rounded border border-link-water px-5 py-[14px] text-xs font-bold [appearance:textfield] focus:border-purple-mimosa [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
        </div>

        <div className="relative flex w-3/6 flex-col items-stretch justify-start space-y-2.5">
          <label
            htmlFor={`item-total-${item._id}`}
            className="text-xs text-wild-blue-yonder"
          >
            Total
          </label>
          <span
            id={`item-total-${item._id}`}
            className="w-full rounded px-5 py-[14px] text-xs font-bold focus:border-purple-mimosa"
          >
            {total}
          </span>
          <div className="top- absolute right-2 top-[45%]">
            <IconDeleteSVG />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewItem;

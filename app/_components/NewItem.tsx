"use client";

import { useId, useState } from "react";
import IconDeleteSVG from "./IconDeleteSVG";

const NewItem = ({ item }) => {
  const [qty, setQty] = useState(item.quantity || 0);
  const [price, setPrice] = useState(item.price || 0);

  const total = qty * price;

  return (
    <div className="col-start-1 col-end-2 grid grid-cols-[2fr_3fr_2fr_1fr] gap-x-4 gap-y-6 md:grid-cols-[5fr_1fr_2fr_2fr_1fr] md:gap-y-4">
      <div className="hidden text-xs text-wild-blue-yonder md:col-start-1 md:col-end-6 md:grid md:grid-cols-[5fr_1fr_2fr_2fr_1fr] md:gap-x-4">
        <span className="md:col-start-1 md:col-end-2">Item Name</span>
        <span className="md:col-start-2 md:col-end-3">Qty.</span>
        <span className="md:col-start-3 md:col-end-4">Price</span>
        <span className="md:col-start-4 md:col-end-5">Total</span>
      </div>

      <div className="col-start-1 col-end-5 flex flex-col items-stretch justify-start space-y-2.5 md:col-start-1 md:col-end-2 md:space-y-0">
        <label
          htmlFor={`item-name-${item._id}`}
          className="text-xs text-wild-blue-yonder md:hidden dark:text-regent-gray"
        >
          Item Name
        </label>
        <input
          type="text"
          id={`item-name-${item._id}`}
          name={`item-name-${item._id}`}
          className="w-full rounded border border-link-water px-5 py-[14px] text-xs font-bold focus:border-purple-mimosa md:text-base dark:border-dark dark:bg-dark"
          defaultValue={item.name}
        />
      </div>

      <div className="col-start-1 col-end-2 flex flex-col items-stretch justify-start space-y-2.5 md:col-start-2 md:col-end-3 md:space-y-0">
        <label
          htmlFor={`item-qty-${item._id}`}
          className="text-xs text-wild-blue-yonder md:hidden dark:text-regent-gray"
        >
          Qty.
        </label>
        <input
          type="number"
          id={`item-qty-${item._id}`}
          name={`item-qty-${item._id}`}
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          className="w-full rounded border border-link-water px-4 py-[14px] text-xs font-bold [appearance:textfield] focus:border-purple-mimosa md:text-base dark:border-dark dark:bg-dark [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
      </div>

      <div className="col-start-2 col-end-3 flex flex-col items-stretch justify-start space-y-2.5 md:col-start-3 md:col-end-4 md:space-y-0">
        <label
          htmlFor={`item-price-${item._id}`}
          className="text-xs text-wild-blue-yonder md:hidden dark:text-regent-gray"
        >
          Price
        </label>
        <input
          type="number"
          id={`item-price-${item._id}`}
          name={`item-price-${item._id}`}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full rounded border border-link-water px-5 py-[14px] text-xs font-bold [appearance:textfield] focus:border-purple-mimosa md:text-base dark:border-dark dark:bg-dark [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
      </div>

      <div className="relative col-start-3 col-end-4 flex w-3/6 flex-col items-stretch justify-start space-y-2.5 md:col-start-4 md:col-end-5 md:space-y-0">
        <label
          htmlFor={`item-total-${item._id}`}
          className="text-xs text-wild-blue-yonder md:hidden dark:text-regent-gray"
        >
          Total
        </label>
        <span
          id={`item-total-${item._id}`}
          className="md: w-full rounded py-[14px] text-xs font-bold focus:border-purple-mimosa md:text-base dark:border-dark dark:text-regent-gray"
        >
          {total}
        </span>
      </div>

      <div className="col-start-4 col-end-5 flex items-center justify-center pt-3 md:col-start-5 md:col-end-6 md:-mt-2 md:pt-0">
        <IconDeleteSVG />
      </div>
    </div>
  );
};

export default NewItem;

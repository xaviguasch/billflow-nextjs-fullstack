"use client";

import { useId } from "react";
import IconDeleteSVG from "./IconDeleteSVG";

const NewItem = () => {
  const uniqueId = useId();

  return (
    <div className="flex flex-col items-stretch justify-start space-y-6">
      <div className="flex flex-col items-stretch justify-start space-y-2.5">
        <label
          htmlFor={`item-name${uniqueId}`}
          className="text-xs text-wild-blue-yonder"
        >
          Item Name
        </label>
        <input
          type="text"
          id={`item-name${uniqueId}`}
          className="w-full rounded border border-link-water px-5 py-[14px] text-xs font-bold focus:border-purple-mimosa"
        />
      </div>

      <div className="flex flex-row items-stretch justify-between space-x-6">
        <div className="flex w-1/6 flex-col items-stretch justify-start space-y-2.5">
          <label
            htmlFor={`item-qty-${uniqueId}`}
            className="text-xs text-wild-blue-yonder"
          >
            Qty.
          </label>
          <input
            type="number"
            id={`item-qty-${uniqueId}`}
            className="w-full rounded border border-link-water px-5 py-[14px] text-xs font-bold focus:border-purple-mimosa"
          />
        </div>

        <div className="flex w-2/6 flex-col items-stretch justify-start space-y-2.5">
          <label
            htmlFor={`item-price-${uniqueId}`}
            className="text-xs text-wild-blue-yonder"
          >
            Price
          </label>
          <input
            type="number"
            id={`item-price-${uniqueId}`}
            className="w-full rounded border border-link-water px-5 py-[14px] text-xs font-bold focus:border-purple-mimosa"
          />
        </div>

        <div className="relative flex w-3/6 flex-col items-stretch justify-start space-y-2.5">
          <label
            htmlFor={`item-total-${uniqueId}`}
            className="text-xs text-wild-blue-yonder"
          >
            Total
          </label>
          <input
            type="number"
            id={`item-total-${uniqueId}`}
            className="w-full rounded px-5 py-[14px] text-xs font-bold focus:border-purple-mimosa"
          />
          <div className="top- absolute right-2 top-[45%]">
            <IconDeleteSVG />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewItem;

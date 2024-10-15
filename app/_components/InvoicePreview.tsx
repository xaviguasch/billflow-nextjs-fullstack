import React from "react";

import { type InvoiceDataItem } from "@/app/types";

type InvoiceProps = {
  item: InvoiceDataItem;
};

const InvoicePreview = ({ item }: InvoiceProps) => {
  const date = new Date(item.paymentDue.toString());

  // Define options for the Intl.DateTimeFormat
  const options = { day: "numeric", month: "short", year: "numeric" };

  // Format the date
  const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(date);

  const statusString =
    item.status[0].toUpperCase() + item.status.slice(1).toLowerCase();

  const hoverShadowClass =
    "transition-shadow duration-300 hover:shadow-[0_8px_16px_rgba(0,0,0,0.07)]";

  return (
    <div
      className={`grid auto-rows-auto grid-cols-2 rounded-lg border border-white bg-white p-6 text-xs font-medium text-wild-blue-yonder hover:border hover:border-medium-slate-blue md:grid-cols-5 md:items-center md:px-6 md:py-4 dark:border-dark dark:bg-dark dark:text-white dark:hover:border-medium-slate-blue ${hoverShadowClass} transition-[border-color] duration-300 ease-in-out`}
    >
      <p className="pb-6 font-bold md:pb-0">
        #<span className="text-cinder dark:text-white">{item.original_id}</span>
      </p>

      <div className="flex items-center justify-self-end pb-6 md:col-start-3 md:col-end-4 md:justify-self-start md:pb-0">
        <p className=" ">{item.clientName}</p>
      </div>

      <p className="row-start-2 row-end-3 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-1 dark:text-link-water">
        {formattedDate}
      </p>

      <div
        className={`col-start-2 col-end-4 row-start-2 row-end-4 flex h-10 w-[104px] items-center justify-center space-x-2 self-center justify-self-end rounded-md font-bold md:col-start-5 md:col-end-6 md:row-start-1 md:row-end-1 ${item.status === "paid" && "bg-aqua-green/5 text-aqua-green"} ${item.status === "pending" && "bg-dark-orange/5 text-dark-orange"} ${item.status === "draft" && "bg-bright-grey/5 text-bright-grey"}`}
      >
        <span className="text-[32px]">·</span>

        <p className="">{statusString}</p>
      </div>

      <p className="row-start-3 row-end-4 mt-2 text-base font-bold text-cinder md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-1 md:mr-4 md:mt-0 md:justify-self-end dark:text-white">
        £{new Intl.NumberFormat("en-US").format(item.total)}
      </p>
    </div>
  );
};

export default InvoicePreview;

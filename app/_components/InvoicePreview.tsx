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

  return (
    <div className="grid auto-rows-auto grid-cols-2 gap-y-6 rounded-lg bg-white p-6 text-xs font-medium text-wild-blue-yonder">
      <p className="font-bold">
        #<span className="text-cinder">{item.original_id}</span>
      </p>
      <div className="justify-self-end">
        <p className="">{item.clientName}</p>
      </div>

      <div className="flex flex-col justify-between space-y-2">
        <p className="">{formattedDate}</p>
        <p className="text-base font-bold text-cinder">
          £{new Intl.NumberFormat("en-US").format(item.total)}
        </p>
      </div>

      <div
        className={`flex h-10 w-[104px] items-center justify-center space-x-2 self-center justify-self-end rounded-md font-bold ${item.status === "paid" && "bg-aqua-green/5 text-aqua-green"} ${item.status === "pending" && "bg-dark-orange/5 text-dark-orange"} ${item.status === "draft" && "bg-bright-grey/5 text-bright-grey"}`}
      >
        <span className="text-[32px]">·</span>

        <p className="">{statusString}</p>
      </div>
    </div>
  );
};

export default InvoicePreview;

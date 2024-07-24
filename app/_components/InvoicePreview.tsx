import React from "react";

import { type InvoiceDataItem } from "@/app/types";

type InvoiceProps = {
  item: InvoiceDataItem;
};

const InvoicePreview = ({ item }: InvoiceProps) => {
  return (
    <div className="text-wild-blue-yonder bg-white grid grid-cols-2 grid-rows-2 rounded-lg p-6 text-xs font-medium">
      <p className="font-bold">
        #<span className="text-cinder font-bold">RT3080</span>
      </p>
      <div className="justify-self-end">
        <p className="">Jensen Huang</p>
      </div>

      <div className="flex flex-col justify-between space-y-2">
        <p className="">Due 19 Aug 2021</p>
        <p className="text-cinder text-base font-bold">£1,800.9</p>
      </div>

      <div className="text-aqua-green bg-aqua-green/5 flex h-10 w-[104px] items-center justify-center space-x-2 self-center justify-self-end rounded-md font-bold">
        <span className="text-[32px]">·</span>

        <p className="">Paid</p>
      </div>
    </div>
  );
};

export default InvoicePreview;

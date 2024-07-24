import React from "react";

import { type InvoiceDataItem } from "@/app/types";

type InvoiceProps = {
  item: InvoiceDataItem;
};

const InvoicePreview = ({ item }: InvoiceProps) => {
  return (
    <div className="text-wild-blue-yonder text-xs font-medium">
      <p className="font-bold">
        #<span className="text-cinder font-bold">RT3080</span>
      </p>
      <div className="">
        <p className="">Jensen Huang</p>
      </div>

      <div className="">
        <p className="">Due 19 Aug 2021</p>
        <p className="text-cinder text-base font-bold">£1,800.9</p>
      </div>

      <div className="text-aqua-green font-bold">
        <span className="">·</span>

        <p className="">Paid</p>
      </div>
    </div>
  );
};

export default InvoicePreview;

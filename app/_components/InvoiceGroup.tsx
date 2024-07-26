import React from "react";
import InvoicePreview from "./InvoicePreview";

import { type InvoiceDataItem } from "@/app/types";

type InvoiceGroupProps = {
  invoices: InvoiceDataItem[];
};

const InvoiceGroup = ({ invoices }: InvoiceGroupProps) => {
  return (
    <div>
      <div className="">
        <h2 className="text-xl">Invoices</h2>
        <p>7 invoices</p>

        <div>Filter / New</div>
      </div>

      <div>Invoices list</div>

      <div className="flex flex-col justify-start gap-y-4">
        {invoices.map((invoice) => (
          <InvoicePreview item={invoice} key={invoice.original_id} />
        ))}
      </div>
    </div>
  );
};

export default InvoiceGroup;

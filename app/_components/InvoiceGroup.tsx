import React from "react";
import InvoicePreview from "./InvoicePreview";

import { type InvoiceDataItem } from "@/app/types";
import NewButton from "./NewButton";

type InvoiceGroupProps = {
  invoices: InvoiceDataItem[];
};

const InvoiceGroup = ({ invoices }: InvoiceGroupProps) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row justify-between">
        <div>
          <h2 className="text-xl">Invoices</h2>
          <p className="text-regent-gray text-xs">{invoices.length} invoices</p>
        </div>

        <div>
          <span>Filter</span>
          <NewButton />
        </div>
      </div>

      <div className="flex flex-col justify-start gap-y-4">
        {invoices.map((invoice) => (
          <InvoicePreview item={invoice} key={invoice.original_id} />
        ))}
      </div>
    </div>
  );
};

export default InvoiceGroup;

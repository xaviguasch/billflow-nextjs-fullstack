import React from "react";
import InvoicePreview from "./InvoicePreview";

const InvoiceGroup = () => {
  return (
    <div>
      <div className="">
        <h2 className="text-xl">Invoices</h2>
        <p>7 invoices</p>

        <div>Filter / New</div>
      </div>

      <div>Invoices list</div>

      <div className="flex flex-col justify-start gap-y-4">
        <InvoicePreview />
        <InvoicePreview />
        <InvoicePreview />
        <InvoicePreview />
      </div>
    </div>
  );
};

export default InvoiceGroup;

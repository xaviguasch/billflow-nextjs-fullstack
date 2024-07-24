import React from "react";
import InvoicePreview from "./InvoicePreview";

const InvoiceGroup = () => {
  return (
    <div>
      <div className="">
        <h2>Invoices</h2>
        <p>7 invoices</p>

        <div>Filter / New</div>
      </div>

      <div>Invoices list</div>

      <InvoicePreview />
    </div>
  );
};

export default InvoiceGroup;

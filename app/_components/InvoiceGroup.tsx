import React from "react";

import Link from "next/link";

import InvoicePreview from "./InvoicePreview";

import { type InvoiceDataItem } from "@/app/types";
import NewButton from "./NewButton";
import FilterSelect from "./FilterSelect";

type InvoiceGroupProps = {
  invoices: InvoiceDataItem[];
  filter: "all" | "draft" | "pending" | "paid";
};

const InvoiceGroup = ({ invoices, filter }: InvoiceGroupProps) => {
  console.log(filter);

  let selectedInvoices;
  if (!filter || filter === "all") {
    selectedInvoices = invoices;
  } else {
    selectedInvoices = invoices.filter((invoice) => invoice.status === filter);

    console.log("----------");
    console.log(selectedInvoices);
    console.log("----------");
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row justify-between">
        <div>
          <h2 className="text-xl">Invoices</h2>
          <p className="text-xs text-regent-gray">{invoices.length} invoices</p>
        </div>

        <div className="flex flex-row items-center justify-start gap-[18px]">
          <FilterSelect />
          <NewButton />
        </div>
      </div>

      <div className="flex flex-col justify-start gap-y-4">
        {selectedInvoices.map((invoice) => (
          <Link href={`/invoice/${invoice._id}`} key={invoice._id}>
            <InvoicePreview item={invoice} key={invoice.original_id} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InvoiceGroup;

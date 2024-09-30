import React from "react";

import Link from "next/link";

import InvoicePreview from "./InvoicePreview";

import { type InvoiceDataItem } from "@/app/types";
import NewButton from "./NewButton";
import FilterSelect from "./FilterSelect";

type InvoiceGroupProps = {
  invoices: InvoiceDataItem[];
  filter: "all" | "pending" | "paid";
};

const InvoiceGroup = ({ invoices, filter }: InvoiceGroupProps) => {
  console.log(filter);

  let selectedInvoices;
  if (!filter || filter === "all") {
    selectedInvoices = invoices;
  } else {
    selectedInvoices = invoices.filter((invoice) => invoice.status === filter);
  }

  return (
    <div className="flex flex-col gap-8 px-6 py-8 md:px-12 md:py-14">
      <div className="flex flex-row justify-between">
        <div>
          <h2 className="text-[20px] font-bold md:text-[32px]">Invoices</h2>
          <p className="text-xs text-regent-gray">
            <span className="hidden md:block">
              The are {selectedInvoices.length} selected invoices
            </span>
            <span className="text-xs md:hidden">
              {selectedInvoices.length} Invoices
            </span>
          </p>
        </div>

        <div className="flex flex-row items-center justify-start gap-[18px] md:gap-10">
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

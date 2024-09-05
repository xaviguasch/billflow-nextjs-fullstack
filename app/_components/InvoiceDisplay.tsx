"use client";

import { parseISO, format } from "date-fns";
import removeInvoice from "../actions/removeInvoice";

const InvoiceDisplay = ({ invoice }) => {
  console.log("Invoice data:", invoice);

  // Define a function to safely format dates
  const formatDate = (dateValue) => {
    console.log("Formatting date:", dateValue);
    if (!dateValue || typeof dateValue !== "string") {
      console.error("Invalid date value:", dateValue);
      return "Invalid Date";
    }
    try {
      const date = parseISO(dateValue);
      console.log("Parsed date:", date);
      return format(date, "dd MMM yyyy");
    } catch (error) {
      console.error("Error parsing date:", dateValue, error);
      return "Invalid Date";
    }
  };

  const formatedInvoiceCreationDate = formatDate(invoice.createdAt);
  console.log("Formatted creation date:", formatedInvoiceCreationDate);

  const formatedPaymentDueDate = formatDate(invoice.paymentDue);
  console.log("Formatted payment due date:", formatedPaymentDueDate);

  const statusString =
    invoice.status[0].toUpperCase() + invoice.status.slice(1).toLowerCase();

  return (
    <div>
      <div className="px-6 pt-8">
        <div>
          <button>Go Back</button>
        </div>

        <div className="flex flex-col items-stretch justify-start gap-4">
          <div className="flex flex-row items-center justify-between rounded-lg bg-white px-6 py-6 text-xs">
            <span className="text-wild-blue-yonder">Status</span>
            <div
              className={`flex h-10 w-[104px] items-center justify-center space-x-2 self-center justify-self-end rounded-md font-bold ${invoice.status === "paid" && "bg-aqua-green/5 text-aqua-green"} ${invoice.status === "pending" && "bg-dark-orange/5 text-dark-orange"} ${invoice.status === "draft" && "bg-bright-grey/5 text-bright-grey"}`}
            >
              <span className="text-[32px]">·</span>
              <p className="">{statusString}</p>
            </div>
          </div>
          <div className="flex flex-col justify-start gap-8 bg-white px-6 py-6 text-xs text-wild-blue-yonder">
            <div>
              <p>
                #
                <span className="font-bold text-cinder">
                  {invoice.original_id}
                </span>
              </p>
              <p className="">{invoice.description}</p>
            </div>

            <div className="text-[11px]">
              <p>{invoice.senderAddress.street}</p>
              <p>{invoice.senderAddress.city}</p>
              <p>{invoice.senderAddress.postCode}</p>
              <p>{invoice.senderAddress.country}</p>
            </div>

            <div className="grid grid-cols-2 gap-y-3 text-xs">
              <div>
                <p>Invoice Date</p>
                <p className="mt-2 text-[15px] font-bold text-cinder">
                  {formatedInvoiceCreationDate}
                </p>
              </div>
              <div>
                <p>Bill To</p>
                <p className="mt-2 text-[15px] font-bold text-cinder">
                  {invoice.clientName}
                </p>
              </div>
              <div className="self-end">
                <p>Payment Due</p>
                <p className="mt-2 text-[15px] font-bold text-cinder">
                  {formatedPaymentDueDate}
                </p>
              </div>
              <div className="self-end">
                <p>{invoice.clientAddress.street}</p>
                <p>{invoice.clientAddress.city}</p>
                <p>{invoice.clientAddress.postCode}</p>
                <p>{invoice.clientAddress.county}</p>
              </div>
            </div>

            <div>
              <p>Sent to</p>
              <p className="mt-2 text-[15px] font-bold text-cinder">
                {invoice.clientEmail}
              </p>
            </div>

            <div className="rounded-lg bg-alabaster">
              <div className="flex flex-col gap-y-6 p-6">
                {invoice.items.map((item) => (
                  <div
                    key={item._id}
                    className="flex flex-row items-center justify-between text-xs"
                  >
                    <div>
                      <p className="text-cinder">{item.name}</p>
                      <p className="text-wild-blue-yonder">
                        {item.quantity} x €{item.price}
                      </p>
                    </div>
                    <div className="">
                      <p className="text-cinder">
                        €{item.quantity * item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="item flex flex-row items-center justify-between rounded-b-lg bg-bright-grey p-6 text-white">
                <p className="text-[11px]">Grand Total</p>
                <p className="text-xl font-bold">
                  €
                  {invoice.items.reduce(
                    (acc, currV) => acc + currV.quantity * currV.price,
                    0,
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 flex grow flex-row items-center justify-stretch gap-x-2 bg-white p-6">
        <button className="rounded-3xl bg-alabaster px-6 py-4 text-xs font-bold text-wild-blue-yonder">
          Edit
        </button>
        <button
          className="rounded-3xl bg-valentine-red px-6 py-4 text-xs font-bold text-white"
          onClick={() => removeInvoice(invoice._id)}
        >
          Delete
        </button>
        <button className="grow rounded-3xl bg-medium-slate-blue px-7 py-4 text-xs font-bold text-white">
          Mark as paid
        </button>
      </div>
    </div>
  );
};

export default InvoiceDisplay;

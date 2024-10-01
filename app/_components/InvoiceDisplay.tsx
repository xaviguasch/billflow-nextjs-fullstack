"use client";

import { parseISO, format } from "date-fns";
import removeInvoice from "@/app/actions/removeInvoice";
import markInvoiceAsPaid from "@/app/actions/markInvoiceAsPaid";

import Link from "next/link";
import IconArrowLeftSVG from "@/app/_components/IconArrowLeftSVG";

const InvoiceDisplay = ({ invoice }) => {
  // Define a function to safely format dates
  const formatDate = (dateValue) => {
    console.log("Formatting date:", dateValue);
    if (!dateValue || typeof dateValue !== "string") {
      return "Invalid Date";
    }
    try {
      const date = parseISO(dateValue);
      return format(date, "dd MMM yyyy");
    } catch (error) {
      return "Invalid Date";
    }
  };

  const formatedInvoiceCreationDate = formatDate(invoice.createdAt);
  console.log("Formatted creation date:", formatedInvoiceCreationDate);

  const formatedPaymentDueDate = formatDate(invoice.paymentDue);
  console.log("Formatted payment due date:", formatedPaymentDueDate);

  const statusString =
    invoice.status[0].toUpperCase() + invoice.status.slice(1).toLowerCase();

  const handleDeleteInvoice = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this invoice",
    );

    if (!confirmed) return;

    await removeInvoice(id);
  };

  const handleMarkAsPaidInvoice = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to mark this invoice as paid",
    );

    if (!confirmed) return;

    try {
      await markInvoiceAsPaid(id);
    } catch (error) {
      console.error("Detailed error in handleMarkAsPaidInvoice:", error);
      alert(
        "Failed to mark invoice as paid. Please check the console for details.",
      );
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-start gap-8 px-6 pt-8 md:px-10 md:pb-32 md:pt-12">
        <div className="flex flex-row items-center gap-x-6 md:gap-x-8">
          <IconArrowLeftSVG />
          <Link href="/" className="font-bold hover:text-wild-blue-yonder">
            Go Back
          </Link>
        </div>

        <div className="flex flex-col items-stretch justify-start gap-4 md:gap-6">
          <div className="rounded-lg bg-white px-6 py-6 text-xs md:flex md:flex-row md:justify-between md:px-8 md:py-5 md:align-middle">
            <div className="flex flex-row items-center justify-between md:justify-start md:gap-5">
              <span className="text-wild-blue-yonder">Status</span>
              <div
                className={`flex h-10 w-[104px] items-center justify-center space-x-2 self-center justify-self-end rounded-md font-bold ${invoice.status === "paid" && "bg-aqua-green/5 text-aqua-green"} ${invoice.status === "pending" && "bg-dark-orange/5 text-dark-orange"} ${invoice.status === "draft" && "bg-bright-grey/5 text-bright-grey"}`}
              >
                <span className="text-[32px]">·</span>
                <p className="md:text-base">{statusString}</p>
              </div>
            </div>

            <div className="hidden md:block md:flex md:flex-row md:items-center md:justify-start md:gap-2">
              <Link
                className="rounded-3xl bg-alabaster px-6 py-4 text-xs font-bold text-wild-blue-yonder hover:bg-link-water"
                href={`/invoice/${invoice._id}/edit`}
              >
                Edit
              </Link>
              <button
                className="rounded-3xl bg-valentine-red px-6 py-4 text-xs font-bold text-white hover:bg-light-salmon-pink"
                onClick={() => handleDeleteInvoice(invoice._id)}
              >
                Delete
              </button>
              <button
                className={`grow rounded-3xl px-7 py-4 text-xs font-bold ${
                  invoice.status === "paid"
                    ? "cursor-not-allowed bg-medium-slate-blue-disabled text-white"
                    : "bg-medium-slate-blue text-white hover:bg-purple-mimosa"
                }`}
                onClick={() => handleMarkAsPaidInvoice(invoice._id)}
                disabled={invoice.status === "paid"}
              >
                {invoice.status === "paid" ? "Paid" : "Mark as paid"}
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-start gap-8 bg-white px-6 py-6 text-xs text-wild-blue-yonder md:gap-0 md:rounded-lg md:p-8">
            <div className="flex flex-col items-start justify-start gap-y-7 md:flex-row md:items-start md:justify-between md:gap-0">
              <div>
                <p>
                  #
                  <span className="font-bold text-cinder">
                    {invoice.original_id}
                  </span>
                </p>
                <p className="">{invoice.description}</p>
              </div>

              <div className="text-[11px] md:text-right">
                <p>{invoice.senderAddress.street}</p>
                <p>{invoice.senderAddress.city}</p>
                <p>{invoice.senderAddress.postCode}</p>
                <p>{invoice.senderAddress.country}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-y-3 text-xs md:mt-5 md:grid-cols-6 md:grid-rows-2">
              <div className="md:col-start-1 md:col-end-2 md:grid-rows-2">
                <p>Invoice Date</p>
                <p className="mt-2 text-[15px] font-bold text-cinder">
                  {formatedInvoiceCreationDate}
                </p>
              </div>

              <div className="md:col-start-3 md:col-end-4">
                <p>Bill To</p>
                <p className="mt-2 text-[15px] font-bold text-cinder">
                  {invoice.clientName}
                </p>
              </div>

              <div className="md:grid-row-start-2 md:grid-row-end-3 self-end md:col-start-1 md:col-end-2">
                <p>Payment Due</p>
                <p className="mt-2 text-[15px] font-bold text-cinder">
                  {formatedPaymentDueDate}
                </p>
              </div>

              <div className="self-end md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-3">
                <p>{invoice.clientAddress.street}</p>
                <p>{invoice.clientAddress.city}</p>
                <p>{invoice.clientAddress.postCode}</p>
                <p>{invoice.clientAddress.county}</p>
              </div>

              <div className="mt-8 md:col-start-5 md:col-end-6 md:row-start-1 md:row-end-2 md:mt-0">
                <p>Sent to</p>
                <p className="mt-2 text-[15px] font-bold text-cinder">
                  {invoice.clientEmail}
                </p>
              </div>
            </div>

            <div className="mt-1 rounded-lg bg-alabaster md:mt-12">
              <div className="mb-10 flex flex-col gap-y-6 p-6 md:mb-0 md:p-8 md:pb-9">
                <div className="hidden text-wild-blue-yonder md:grid md:grid-cols-5">
                  <span className="col-span-2">Item Name</span>
                  <span className="justify-self-end">QTY.</span>
                  <span className="justify-self-end">Price</span>
                  <span className="justify-self-end">Total</span>
                </div>

                {invoice.items.map((item) => (
                  <div
                    key={item._id}
                    className="flex flex-row items-center justify-between text-xs md:grid md:grid-cols-5 md:text-base md:font-bold"
                  >
                    <div className="md:col-start-1 md:col-end-2">
                      <p className="text-cinder md:text-base md:font-bold">
                        {item.name}
                      </p>
                      <p className="text-wild-blue-yonder md:hidden">
                        {item.quantity} x €{item.price}
                      </p>
                    </div>
                    <div className="md:col-start-3 md:col-end-4 md:justify-self-end">
                      <p className="text-cinder md:hidden">
                        €{item.quantity * item.price}
                      </p>
                      <span className="hidden text-wild-blue-yonder md:block">
                        {item.quantity}
                      </span>
                    </div>

                    <div className="hidden md:col-start-4 md:col-end-5 md:block md:justify-self-end">
                      <span className="text-wild-blue-yonder">
                        € {item.price.toFixed(2)}
                      </span>
                    </div>

                    <div className="hidden md:col-start-5 md:col-end-6 md:block md:justify-self-end">
                      <span className="text-cinder">
                        € {(item.quantity * item.price).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="item flex flex-row items-center justify-between rounded-b-lg bg-bright-grey p-6 text-white md:px-8 md:py-6">
                <p className="text-[11px] md:hidden">Grand Total</p>
                <p className="hidden text-xs md:block">Amount Due</p>
                <p className="text-xl font-bold md:text-2xl">
                  €{" "}
                  {invoice.items
                    .reduce(
                      (acc, currV) => acc + currV.quantity * currV.price,
                      0,
                    )
                    .toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 flex grow flex-row items-center justify-stretch gap-x-2 bg-white p-6 md:hidden">
        <Link
          className="rounded-3xl bg-alabaster px-6 py-4 text-xs font-bold text-wild-blue-yonder hover:bg-link-water"
          href={`/invoice/${invoice._id}/edit`}
        >
          Edit
        </Link>
        <button
          className="rounded-3xl bg-valentine-red px-6 py-4 text-xs font-bold text-white hover:bg-light-salmon-pink"
          onClick={() => handleDeleteInvoice(invoice._id)}
        >
          Delete
        </button>
        <button
          className={`grow rounded-3xl px-7 py-4 text-xs font-bold ${
            invoice.status === "paid"
              ? "cursor-not-allowed bg-medium-slate-blue-disabled text-white"
              : "bg-medium-slate-blue text-white hover:bg-purple-mimosa"
          }`}
          onClick={() => handleMarkAsPaidInvoice(invoice._id)}
          disabled={invoice.status === "paid"}
        >
          {invoice.status === "paid" ? "Paid" : "Mark as paid"}
        </button>
      </div>
    </div>
  );
};

export default InvoiceDisplay;

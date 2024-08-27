import connectDB from "@/config/database";

import Invoice from "@/models/Invoice";
import { connect } from "http2";

async function findInvoice(id) {
  try {
    connectDB();
    const invoice = await Invoice.findOne({ _id: id });

    return invoice;
  } catch (error) {
    console.error("Error finding document:", error);
  }
}

const InvoicePage = async ({ params }) => {
  connectDB();

  console.log(params);

  const invoice = await findInvoice(params.invoiceId);

  if (!invoice) {
    return <h2>NO INVOICE!!!! pending</h2>;
  }

  return (
    <div>
      <p>This is the invoice page for id: {params.invoiceId}</p>
      <p>{invoice.clientEmail}</p>
      <p>{invoice.clientName}</p>
      <p>{invoice.status}</p>
      <p>{invoice.description}</p>
    </div>
  );
};

export default InvoicePage;

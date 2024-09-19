import InvoiceDisplay from "@/app/_components/InvoiceDisplay";
import findInvoice from "@/app/actions/findInvoice";
import removeInvoice from "@/app/actions/removeInvoice";

const InvoicePage = async ({ params }) => {
  console.log(params);

  const invoice = await findInvoice(params.invoiceId);

  if (!invoice) {
    // PENDING FINISHING STYLING
    return <h2>NO INVOICE!!!! pending</h2>;
  }

  return <InvoiceDisplay invoice={invoice} />;
};

export default InvoicePage;

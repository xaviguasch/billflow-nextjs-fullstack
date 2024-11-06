import InvoiceEditForm from "@/app/_components/InvoiceEditForm";
import { useParams } from "next/navigation";
import Invoice from "@/models/Invoice";
import findInvoice from "@/app/actions/findInvoice";

const InvoiceEditPage = async ({ params }) => {
  console.log("============");
  console.log(params);
  console.log("============");

  const invoice = await findInvoice(params.invoiceId);

  if (!invoice) {
    return <h2>NO INVOICE!!!! pending</h2>;
  }

  console.log("invoice: ", invoice);

  return (
    <div className="bg-white pt-8 dark:bg-mirage md:pt-0">
      <InvoiceEditForm invoice={invoice} />
    </div>
  );
};

export default InvoiceEditPage;

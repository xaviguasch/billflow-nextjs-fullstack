import InvoiceEditForm from "@/app/_components/InvoiceEditForm";
import { useParams } from "next/navigation";
import Invoice from "@/models/Invoice";
import connectDB from "@/config/database";

const InvoiceEditPage = async ({ params }) => {
  console.log(params);

  const findInvoice = async (id) => {
    try {
      await connectDB();
      const invoice = await Invoice.findOne({ _id: id });
      return invoice;
    } catch (error) {
      console.error("Error finding document:", error);
      return null;
    }
  };

  const invoice = await findInvoice(params.invoiceId);

  if (!invoice) {
    return <h2>NO INVOICE!!!! pending</h2>;
  }

  console.log("invoice: ", invoice);

  return (
    <div className="bg-white px-6 pt-8">
      <InvoiceEditForm invoice={invoice} />
    </div>
  );
};

export default InvoiceEditPage;

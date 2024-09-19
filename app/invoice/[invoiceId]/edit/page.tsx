import { useParams } from "next/navigation";

const InvoiceEditPage = async ({ params }) => {
  console.log(params);

  return (
    <div>
      <p>Edit invoice page for invoice:</p>
      <span>{params.invoiceId}</span>
    </div>
  );
};

export default InvoiceEditPage;

import NewInvoiceForm from "@/app/_components/NewInvoiceForm";

const NewInvoice = async () => {
  return (
    <div className="bg-white px-6 pt-8">
      <button>Go back</button>
      <NewInvoiceForm />
    </div>
  );
};
export default NewInvoice;

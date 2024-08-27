const InvoicePage = ({ params }) => {
  console.log(params);

  return (
    <div>
      <p>This is the invoice page for id: {params.invoiceId}</p>
    </div>
  );
};

export default InvoicePage;

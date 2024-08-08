"use client";

const NewInvoiceForm = () => {
  return (
    <div className="flex flex-col items-stretch justify-start space-y-6 py-6">
      <h2 className="text-2xl font-bold tracking-wider">New Invoice</h2>
      <form
        action=""
        className="flex flex-col items-stretch justify-start space-y-6"
      >
        <span className="text-xs font-bold text-medium-slate-blue">
          Bill From
        </span>
        <div className="flex flex-col items-stretch justify-start space-y-2.5">
          <label
            htmlFor="street-address"
            className="text-xs text-wild-blue-yonder"
          >
            Street Address
          </label>
          <input type="text" id="street-address" />
        </div>
        <div></div>
        <div></div>
        <div></div>
      </form>
    </div>
  );
};

export default NewInvoiceForm;

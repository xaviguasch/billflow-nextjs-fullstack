"use client";

import DatePickerInForm from "./DatePickerInForm";

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
          <input
            type="text"
            id="street-address"
            className="w-full rounded border border-link-water px-5 py-[14px] text-xs font-bold focus:border-purple-mimosa"
          />
        </div>

        <div className="flex flex-row items-stretch justify-between space-x-6">
          <div className="flex flex-col items-stretch justify-start space-y-2.5">
            <label htmlFor="city" className="text-xs text-wild-blue-yonder">
              City
            </label>
            <input
              type="text"
              id="city"
              className="w-full rounded border border-link-water px-5 py-[14px] text-xs font-bold focus:border-purple-mimosa"
            />
          </div>

          <div className="flex flex-col items-stretch justify-start space-y-2.5">
            <label
              htmlFor="post-code"
              className="text-xs text-wild-blue-yonder"
            >
              Post Code
            </label>
            <input
              type="text"
              id="post-code"
              className="w-full rounded border border-link-water px-5 py-[14px] text-xs font-bold focus:border-purple-mimosa"
            />
          </div>
        </div>

        <div className="flex flex-col items-stretch justify-start space-y-2.5">
          <label htmlFor="country" className="text-xs text-wild-blue-yonder">
            Country
          </label>
          <input
            type="text"
            id="country"
            className="w-full rounded border border-link-water px-5 py-[14px] text-xs font-bold focus:border-purple-mimosa"
          />
        </div>

        <div className="flex flex-col items-stretch justify-start space-y-2.5">
          <label htmlFor="date" className="text-xs text-wild-blue-yonder">
            Invoice Date
          </label>

          <DatePickerInForm />
        </div>
        <div></div>
      </form>
    </div>
  );
};

export default NewInvoiceForm;

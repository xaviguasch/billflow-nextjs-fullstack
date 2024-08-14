"use client";

import DatePickerInForm from "./DatePickerInForm";
import SelectTerms from "./SelectTerms";
import ItemsList from "./ItemsList";

const NewInvoiceForm = () => {
  return (
    <div className="relative flex flex-col items-stretch justify-start">
      <h2 className="text-2xl font-bold tracking-wider">New Invoice</h2>
      <form
        action=""
        className="pt´p-6 flex flex-col items-stretch justify-start gap-y-10"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col items-stretch justify-start gap-y-6">
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
        </div>

        <div className="flex flex-col items-stretch justify-start gap-y-6">
          <span className="text-xs font-bold text-medium-slate-blue">
            Bill To
          </span>

          <div className="flex flex-col items-stretch justify-start space-y-2.5">
            <label
              htmlFor="client-name"
              className="text-xs text-wild-blue-yonder"
            >
              Client's Name
            </label>
            <input
              type="text"
              id="client-name"
              className="w-full rounded border border-link-water px-5 py-[14px] text-xs font-bold focus:border-purple-mimosa"
            />
          </div>

          <div className="flex flex-col items-stretch justify-start space-y-2.5">
            <label
              htmlFor="client-email"
              className="text-xs text-wild-blue-yonder"
            >
              Client's Email
            </label>
            <input
              type="email"
              id="client-email"
              className="w-full rounded border border-link-water px-5 py-[14px] text-xs font-bold focus:border-purple-mimosa"
            />
          </div>

          <div className="flex flex-col items-stretch justify-start space-y-2.5">
            <label
              htmlFor="client-street-address"
              className="text-xs text-wild-blue-yonder"
            >
              Street Address
            </label>
            <input
              type="text"
              id="client-street-address"
              className="w-full rounded border border-link-water px-5 py-[14px] text-xs font-bold focus:border-purple-mimosa"
            />
          </div>

          <div className="flex flex-row items-stretch justify-between space-x-6">
            <div className="flex flex-col items-stretch justify-start space-y-2.5">
              <label
                htmlFor="client-city"
                className="text-xs text-wild-blue-yonder"
              >
                City
              </label>
              <input
                type="text"
                id="client-city"
                className="w-full rounded border border-link-water px-5 py-[14px] text-xs font-bold focus:border-purple-mimosa"
              />
            </div>

            <div className="flex flex-col items-stretch justify-start space-y-2.5">
              <label
                htmlFor="client-post-code"
                className="text-xs text-wild-blue-yonder"
              >
                Post Code
              </label>
              <input
                type="text"
                id="client-post-code"
                className="w-full rounded border border-link-water px-5 py-[14px] text-xs font-bold focus:border-purple-mimosa"
              />
            </div>
          </div>

          <div className="flex flex-col items-stretch justify-start space-y-2.5">
            <label
              htmlFor="client-country"
              className="text-xs text-wild-blue-yonder"
            >
              Country
            </label>
            <input
              type="text"
              id="client-country"
              className="w-full rounded border border-link-water px-5 py-[14px] text-xs font-bold focus:border-purple-mimosa"
            />
          </div>

          <DatePickerInForm />

          <SelectTerms />

          <div className="flex flex-col items-stretch justify-start space-y-2.5">
            <label
              htmlFor="project-description"
              className="text-xs text-wild-blue-yonder"
            >
              Project Description
            </label>
            <input
              type="text"
              id="project-description"
              className="w-full rounded border border-link-water px-5 py-[14px] text-xs font-bold focus:border-purple-mimosa"
            />
          </div>
        </div>
        <ItemsList />
      </form>
    </div>
  );
};

export default NewInvoiceForm;

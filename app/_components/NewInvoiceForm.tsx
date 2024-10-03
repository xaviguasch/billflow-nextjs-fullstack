"use client";

import DatePickerInForm from "./DatePickerInForm";
import SelectTerms from "./SelectTerms";
import ItemsList from "./ItemsList";

import addInvoice from "@/app/actions/addInvoice";
import FormSubmitButtons from "@/app/_components/FormSubmitButtons";
import IconArrowLeftSVG from "@/app/_components/IconArrowLeftSVG";
import Link from "next/link";

const NewInvoiceForm = () => {
  return (
    <div className="relative flex flex-col items-stretch justify-start gap-6">
      <div className="flex flex-row items-center gap-x-6 md:gap-x-8">
        <IconArrowLeftSVG />
        <Link href="/" className="font-bold hover:text-wild-blue-yonder">
          Go Back
        </Link>
      </div>

      <div className="flex flex-col items-stretch justify-start gap-y-5">
        <h2 className="text-2xl font-bold tracking-wider">New Invoice</h2>
        <form
          action={addInvoice}
          className="flex flex-col items-stretch justify-start gap-y-10"
        >
          <div className="grid grid-cols-2 gap-6">
            <span className="text-xs font-bold text-medium-slate-blue">
              Bill From
            </span>

            <div className="col-start-1 col-end-3 flex flex-col items-stretch justify-start space-y-2.5">
              <label
                htmlFor="sender-street-address"
                className="text-xs text-wild-blue-yonder"
              >
                Street Address
              </label>
              <input
                type="text"
                id="sender-street-address"
                name="sender-street-address"
                className="w-full rounded border border-link-water px-5 py-[14px] text-xs font-bold focus:border-purple-mimosa"
              />
            </div>

            <div className="col-start-1 col-end-2 flex w-full flex-col items-stretch justify-start space-y-2.5">
              <label
                htmlFor="sender-city"
                className="text-xs text-wild-blue-yonder"
              >
                City
              </label>
              <input
                type="text"
                id="sender-city"
                name="sender-city"
                className="w-full rounded border border-link-water px-5 py-[14px] text-xs font-bold focus:border-purple-mimosa"
              />
            </div>

            <div className="col-start-2 col-end-3 flex w-full flex-col items-stretch justify-start space-y-2.5">
              <label
                htmlFor="sender-post-code"
                className="text-xs text-wild-blue-yonder"
              >
                Post Code
              </label>
              <input
                type="text"
                id="sender-post-code"
                name="sender-post-code"
                className="w-full rounded border border-link-water px-5 py-[14px] text-xs font-bold focus:border-purple-mimosa"
              />
            </div>

            <div className="col-start-1 col-end-3 flex flex-col items-stretch justify-start space-y-2.5">
              <label
                htmlFor="sender-country"
                className="text-xs text-wild-blue-yonder"
              >
                Country
              </label>
              <input
                type="text"
                id="sender-country"
                name="sender-country"
                className="w-full rounded border border-link-water px-5 py-[14px] text-xs font-bold focus:border-purple-mimosa"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <span className="col-start-1 col-end-3 text-xs font-bold text-medium-slate-blue">
              Bill To
            </span>

            <div className="col-start-1 col-end-3 flex flex-col items-stretch justify-start space-y-2.5">
              <label
                htmlFor="client-name"
                className="text-xs text-wild-blue-yonder"
              >
                Client's Name
              </label>
              <input
                type="text"
                id="client-name"
                name="client-name"
                className="w-full rounded border border-link-water px-5 py-[14px] text-xs font-bold focus:border-purple-mimosa"
              />
            </div>

            <div className="col-start-1 col-end-3 flex flex-col items-stretch justify-start space-y-2.5">
              <label
                htmlFor="client-email"
                className="text-xs text-wild-blue-yonder"
              >
                Client's Email
              </label>
              <input
                type="email"
                id="client-email"
                name="client-email"
                className="w-full rounded border border-link-water px-5 py-[14px] text-xs font-bold focus:border-purple-mimosa"
              />
            </div>

            <div className="col-start-1 col-end-3 flex flex-col items-stretch justify-start space-y-2.5">
              <label
                htmlFor="client-street-address"
                className="text-xs text-wild-blue-yonder"
              >
                Street Address
              </label>
              <input
                type="text"
                id="client-street-address"
                name="client-street-address"
                className="w-full rounded border border-link-water px-5 py-[14px] text-xs font-bold focus:border-purple-mimosa"
              />
            </div>

            <div className="col-start-1 col-end-2 flex flex-col items-stretch justify-start space-y-2.5">
              <label
                htmlFor="client-city"
                className="text-xs text-wild-blue-yonder"
              >
                City
              </label>
              <input
                type="text"
                id="client-city"
                name="client-city"
                className="w-full rounded border border-link-water px-5 py-[14px] text-xs font-bold focus:border-purple-mimosa"
              />
            </div>

            <div className="col-start-2 col-end-3 flex flex-col items-stretch justify-start space-y-2.5">
              <label
                htmlFor="client-post-code"
                className="text-xs text-wild-blue-yonder"
              >
                Post Code
              </label>
              <input
                type="text"
                id="client-post-code"
                name="client-post-code"
                className="w-full rounded border border-link-water px-5 py-[14px] text-xs font-bold focus:border-purple-mimosa"
              />
            </div>

            <div className="col-start-1 col-end-3 flex flex-col items-stretch justify-start space-y-2.5">
              <label
                htmlFor="client-country"
                className="text-xs text-wild-blue-yonder"
              >
                Country
              </label>
              <input
                type="text"
                id="client-country"
                name="client-country"
                className="w-full rounded border border-link-water px-5 py-[14px] text-xs font-bold focus:border-purple-mimosa"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2">
            <div>
              <DatePickerInForm />
            </div>

            <div>
              <SelectTerms />
            </div>

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
                name="project-description"
                className="w-full rounded border border-link-water px-5 py-[14px] text-xs font-bold focus:border-purple-mimosa"
              />
            </div>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-6">
            <ItemsList />
          </div>

          <FormSubmitButtons />
        </form>
      </div>
    </div>
  );
};

export default NewInvoiceForm;

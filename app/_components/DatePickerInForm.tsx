"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// import { DayPicker } from "react-day-picker";
// import "react-day-picker/style.css";

const DatePickerInForm = ({ invoiceDate }) => {
  const [date, setStartDate] = useState(invoiceDate || new Date());

  // const [selected, setSelected] = useState<Date>();
  console.log(".............");

  console.log(invoiceDate);

  console.log(".............");

  console.log("==========");

  console.log(date);

  console.log("==========");

  return (
    <div className="flex flex-col items-stretch justify-start space-y-2.5 md:col-start-1 md:col-end-2">
      <label
        htmlFor="invoice-date"
        className="w-full text-xs text-wild-blue-yonder"
      >
        Invoice Date
      </label>
      <DatePicker
        className="w-full rounded border border-link-water px-5 py-[14px] text-xs font-bold focus:border-purple-mimosa md:text-base"
        id="invoice-date"
        name="invoice-date"
        onChange={(date) => {
          setStartDate(date);
        }}
        selected={date}
        dateFormat="dd/MM/yyyy"
      />
    </div>

    // <div className="w-full rounded border border-link-water px-5 py-[14px] text-xs font-bold focus:border-purple-mimosa">
    //   <DayPicker
    //     className="place-self-center pt-12"
    //     mode="single"
    //     selected={selected}
    //     onSelect={setSelected}
    //     footer={
    //       selected
    //         ? `Selected: ${selected.toLocaleDateString()}`
    //         : "Pick a day."
    //     }
    //   />
    // </div>
  );
};

export default DatePickerInForm;

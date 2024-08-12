"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// import { DayPicker } from "react-day-picker";
// import "react-day-picker/style.css";

const DatePickerInForm = () => {
  const [date, setStartDate] = useState(new Date());

  // const [selected, setSelected] = useState<Date>();

  return (
    <DatePicker
      className="w-full rounded border border-link-water px-5 py-[14px] text-xs font-bold focus:border-purple-mimosa"
      id="date"
      onChange={(date) => setStartDate(date)}
      selected={date}
      dateFormat="dd/MM/yyyy"
    />

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

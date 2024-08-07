"use client";

import React, { useState } from "react";

const FilterSelect = () => {
  const [status, setStatus] = useState("draft");

  return (
    <div className="">
      <label htmlFor="status-filter"></label>
      <select
        className="bg-white-lilac"
        name="status-filter"
        id="status-filter"
        value={status}
        onChange={(e) => {
          console.log(e.target.value);
          setStatus(e.target.value);
        }}
      >
        <option value="draft">Draft</option>
        <option value="pending">Pending</option>
        <option value="paid">Paid</option>
      </select>
    </div>
  );
};

export default FilterSelect;

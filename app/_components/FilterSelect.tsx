"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const FilterSelect = () => {
  const [status, setStatus] = useState("draft");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const changeStatus = (value) => {
    setStatus(value);

    const params = new URLSearchParams(searchParams);

    params.set("status", value);

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="">
      <label htmlFor="status-filter"></label>
      <select
        className="cursor-pointer bg-white-lilac pr-3 text-right"
        name="status-filter"
        id="status-filter"
        value={status}
        onChange={(e) => {
          console.log(e.target.value);

          changeStatus(e.target.value);
        }}
      >
        <option value="all">Filter: All</option>
        <option value="pending">Pending</option>
        <option value="paid">Paid</option>
      </select>
    </div>
  );
};

export default FilterSelect;

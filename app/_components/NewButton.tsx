"use client";

import React from "react";
import IconPlusSVG from "./IconPlusSVG";

const NewButton = () => {
  return (
    <button>
      <div className="flex w-[90px] flex-row items-center justify-start gap-2 rounded-3xl bg-medium-slate-blue p-[6px]">
        <div className="bg-white flex h-8 w-8 items-center justify-center rounded-full">
          <IconPlusSVG />
        </div>
        <span className="text-white text-xs font-bold">New</span>
      </div>
    </button>
  );
};

export default NewButton;

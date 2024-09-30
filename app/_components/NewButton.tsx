"use client";

import React from "react";
import IconPlusSVG from "./IconPlusSVG";
import Link from "next/link";

const NewButton = () => {
  return (
    <Link
      className="flex w-[90px] flex-row items-center justify-start gap-2 rounded-3xl bg-medium-slate-blue p-[6px] hover:bg-purple-mimosa md:w-full"
      href="/new"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
        <IconPlusSVG />
      </div>
      <span className="whitespace-nowrap text-xs font-bold text-white md:px-4">
        New <span className="hidden md:inline">Invoice</span>
      </span>
    </Link>
  );
};

export default NewButton;

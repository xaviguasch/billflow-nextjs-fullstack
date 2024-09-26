"use client";

import React from "react";
import IconPlusSVG from "./IconPlusSVG";
import Link from "next/link";

const NewButton = () => {
  return (
    <button>
      <Link
        className="flex w-[90px] flex-row items-center justify-start gap-2 rounded-3xl bg-medium-slate-blue p-[6px] hover:bg-purple-mimosa"
        href="/new"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
          <IconPlusSVG />
        </div>
        <span className="text-xs font-bold text-white">New</span>
      </Link>
    </button>
  );
};

export default NewButton;

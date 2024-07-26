"use client";

import React from "react";
import IconPlusSVG from "./IconPlusSVG";

const NewButton = () => {
  return (
    <button>
      <div>
        <div className="bg-white flex h-8 w-8 items-center justify-center rounded-full">
          <IconPlusSVG />
        </div>
        <div className=""></div>
        <span>New</span>
      </div>
    </button>
  );
};

export default NewButton;

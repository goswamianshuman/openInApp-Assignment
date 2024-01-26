"use client";

import React from "react";

type Props = {
  label?: string;
  onRemove: () => void;
};

const Tag = (props: Props) => {
  return (
    <div className="max-w-max rounded-lg flex items-center gap-x-2 text-[10px] font-semibold font-figtree uppercase bg-primary text-white px-2 py-1">
      <p>{props.label}</p>
      <img
        onClick={props.onRemove}
        role="button"
        src="/images/cross.svg"
        alt="cross"
      />
    </div>
  );
};

export default Tag;

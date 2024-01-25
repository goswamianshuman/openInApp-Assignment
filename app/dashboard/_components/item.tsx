"use client";

import React from "react";

type Props = {
  icon?: any;
  label?: string;
  active?: boolean;
};

const Item = (props: Props) => {
  const { icon, label, active } = props;
  return (
    <div
      role="button"
      className={`relative min-h-[27px] text-sidebar/40 hover:bg-gradient-to-r from-primaryBackground to-transparent text-sm py-3 px-6 font-primary mt-2 rounded-sm w-full flex items-center gap-x-5 text-muted-foreground font-medium ${
        active &&
        "!text-primary after:content-[''] after:absolute after:bg-gradient-to-r after:from-primary/20 after:via-transparent after:to-transparent after:w-[50%] after:h-full after:top-0 after:left-0"
      }`}
    >
      {icon}
      <p className="font-nunito font-semibold text-base">{label}</p>
    </div>
  );
};

export default Item;

"use client";

import React from "react";

type Props = {};

const Loader = (props: Props) => {
  return (
    <div className="h-5 w-5 border-[2px] border-white rounded-full border-r-transparent animate-spin" />
  );
};

export default Loader;

"use client";

import { useShow } from "@/libs/hooks/useShow";
import { BellOutline, DashboardLogo, Menu } from "@/public/icons";
import Image from "next/image";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  const { setShow } = useShow();

  return (
    <header className="py-5">
      <div className="container flex items-center justify-between">
        <div className="flex md:hidden items-center gap-x-2">
          <div role="button" onClick={setShow}>
            <Menu />
          </div>
          <div className="scale-[0.8] max-w-max">
            <DashboardLogo />
          </div>
        </div>
        <h4 className="hidden md:block font-figtree font-semibold text-2xl">
          Upload CSV
        </h4>
        <div className="flex items-center gap-x-4">
          <BellOutline />
          <div className="h-6 w-6 relative rounded-full overflow-hidden">
            <Image
              className="object-center object-cover"
              fill
              src="/images/avatar.jpg"
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

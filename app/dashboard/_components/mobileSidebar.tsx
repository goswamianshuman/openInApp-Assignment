"use client";

import { sidebarMenu } from "@/libs/constants/sidebar";
import { useShow } from "@/libs/hooks/useShow";
import { DashboardLogo, Plus } from "@/public/icons";
import React from "react";
import Item from "./item";

type Props = {};

const MobileSidebar = (props: Props) => {
  const { show, setShow } = useShow();

  return (
    <div
      className={`md:hidden ${
        !show && "hidden"
      } absolute inset-0 bg-black/30 z-[99999] flex`}
    >
      {/* sidebar */}
      <div
        className={`h-full bg-white min-w-[300px] rounded-tr-3xl rounded-br-3xl static transition-all ease-linear duration-300`}
      >
        <div className="flex items-center justify-between container pr-3 py-4">
          <div className="scale-[0.8] max-w-max">
            <DashboardLogo />
          </div>

          <div role="button" onClick={setShow} className="max-w-max">
            <Plus />
          </div>
        </div>

        <div className="">
          {sidebarMenu.map((data, i) => (
            <Item
              key={i}
              active={i === 1 && true}
              icon={data.icon}
              label={data.label}
            />
          ))}
        </div>
      </div>
      <div role="button" onClick={setShow} className="flex-grow" />
    </div>
  );
};

export default MobileSidebar;

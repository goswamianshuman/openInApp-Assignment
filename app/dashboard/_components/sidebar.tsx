"use client";

import { DashboardLogo } from "@/public/icons";
import React from "react";
import Item from "./item";
import { sidebarMenu } from "@/libs/constants/sidebar";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <aside className="hidden min-w-[220px] md:flex flex-col bg-white">
      <div className="flex items-center justify-center py-4">
        <DashboardLogo />
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
    </aside>
  );
};

export default Sidebar;

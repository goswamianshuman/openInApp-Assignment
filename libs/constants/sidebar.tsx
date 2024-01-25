"use client";

import {
  Bell,
  Calender,
  Category,
  DashboardLogo,
  Document,
  Settings,
  Ticket,
  Upload,
} from "@/public/icons";

export const sidebarMenu = [
  {
    icon: <Category />,
    label: "Dashboard",
  },
  {
    icon: <Upload />,
    label: "Upload",
  },
  {
    icon: <Ticket />,
    label: "Invoice",
  },
  {
    icon: <Document />,
    label: "Schedule",
  },
  {
    icon: <Calender />,
    label: "Calendar",
  },
  {
    icon: <Bell />,
    label: "Notification",
  },
  {
    icon: <Settings />,
    label: "Settings",
  },
];

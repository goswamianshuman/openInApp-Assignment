import type { Metadata } from "next";
import Sidebar from "./_components/sidebar";
import Navbar from "./_components/navbar";
import MobileSidebar from "./_components/mobileSidebar";

export const metadata: Metadata = {
  title: "Base | Dashboard",
  description: "OpenInApp Assignment",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/favicon.ico?v=4"],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex relative">
      <MobileSidebar />
      <Sidebar />
      <div className="flex flex-col flex-grow h-screen relative overflow-y-scroll">
        <Navbar />
        <div className="flex-grow">{children}</div>
      </div>
    </main>
  );
}

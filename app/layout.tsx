import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import MyProfilePic from "./components/MyProfilePic";

export const metadata: Metadata = {
  title: "My Profile",
  description: "My Developer Profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Header />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}

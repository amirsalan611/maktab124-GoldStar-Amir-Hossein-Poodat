"use client";
import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isSignInPage = pathname === "/signIn";

  if (isSignInPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="bg-white w-full h-[135px] fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      <main className="h-full mt-36">{children}</main>
      <Footer />
    </div>
  );
}

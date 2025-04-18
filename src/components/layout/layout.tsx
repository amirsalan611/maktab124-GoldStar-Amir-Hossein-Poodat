"use client";
import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideHeaderFooter = ["/signIn"];
  const [shouldHideLayout, setShouldHideLayout] = useState(false);

  useEffect(() => {
    const shouldHide = hideHeaderFooter.some((route) =>
      pathname.startsWith(route)
    );
    setShouldHideLayout(shouldHide);
  }, [pathname]);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      {!shouldHideLayout && <Header />}
      <main>{children}</main>
      {!shouldHideLayout && <Footer />}
    </div>
  );
}

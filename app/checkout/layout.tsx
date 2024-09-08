import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Audiophile",
  description: "Checkout Products",
};

export default function ProductCategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="fixed inset-x-0 z-50 bg-neutral-900 clr-neutral-100">
        <Navbar />
      </header>
      {children}
      <Footer />
    </>
  );
}

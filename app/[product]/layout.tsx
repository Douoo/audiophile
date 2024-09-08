import BrandDetail from "@/components/BrandDetail";
import CategoryList from "@/components/CategoryList";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import React from "react";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="fixed inset-x-0 z-50 bg-neutral-900 clr-neutral-100">
        <Navbar className=" border-b-[0.25px] border-b-[var(--clr-neutral-700)]" />
      </header>
      <main className="container-custom pt-20 ">
        {children}
        <CategoryList />
        <BrandDetail />
      </main>

      <Footer />
    </>
  );
}

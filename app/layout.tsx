import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import { CartProvider } from "../context/CartContext";

const manrope = Manrope({ subsets: ["latin"], variable: "--ff-manrope" });

export const metadata: Metadata = {
  title: "Audiophile",
  description: "Ecommerce app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable}`}>
        <CartProvider>{children}</CartProvider>
        <div id="modal" />
      </body>
    </html>
  );
}

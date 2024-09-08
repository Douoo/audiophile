import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import { CartProvider } from "../context/CartContext";

const manrope = Manrope({ subsets: ["latin"], variable: "--ff-manrope" });

export const metadata: Metadata = {
  title: {
    template: "Audiophile - %s",
    default: "Audiophile",
  },
  description:
    "Discover top-quality audio equipment at Audiophile. Shop our wide selection of headphones, earphones, and speakers to enhance your listening experience. Enjoy unbeatable sound clarity and comfort with products from leading brands.",
  metadataBase: new URL("https://audiophile-sigma-one.vercel.app/"),
  openGraph: {
    images: ["/pageview.png"],
  },
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

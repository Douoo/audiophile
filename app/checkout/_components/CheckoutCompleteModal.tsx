"use client";
import React, { useState } from "react";
import ClientOnlyPortal from "@/components/Portals/ClientOnlyPortal";
import { Overlay } from "@/components/Portals/Overlay";
import Image from "next/image";
import CheckoutSummaryItems from "./CheckoutSummaryItems";
import { formatPrice } from "@/utils/currency_format";
import Link from "next/link";
import { CartContext, CartItem } from "@/context/CartContext";

import classes from "./CheckoutModal.module.css";

export default function CheckoutCompleteModal({
  items,
  totalCost,
}: {
  items: CartItem[];
  totalCost: number;
}) {
  // const { cartItems, totalPrice } = useCartContext;
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  return (
    <div>
      {" "}
      <ClientOnlyPortal selector="#modal">
        <Overlay onOverlayClick={function (): void {}} />
        <div
          className={`${classes.dialog} fixed inset-x-2 inset-y-1 md:inset-x-1/4 bg-white z-50 rounded-lg overflow-y-scroll md:overflow-hidden p-12 space-y-6`}
        >
          <Image
            src="/assets/checkout/icon-order-confirmation.svg"
            alt="confirmation icon"
            width={64}
            height={64}
          />
          <h2 className="text-[2rem] font-bold">
            THANK YOU <br /> FOR YOUR ORDER
          </h2>
          <p>You will receive an email confirmation shortly.</p>
          <div className="grid lg:grid-cols-[1.5fr_1fr] rounded-lg overflow-hidden">
            <div className="bg-neutral-300 p-6 ">
              <ul
                className={` grid gap-4  ${classes.collapse} ${
                  !isCollapsed && classes.active
                } no-scrollbar`}
              >
                {items.map((item) => (
                  <CheckoutSummaryItems key={item.id} item={item} />
                ))}
              </ul>
              {items.length > 1 && (
                <button
                  className="clr-neutral-700 text-[12px] block w-full border-t-2 hover:text-black"
                  onClick={() => {
                    setIsCollapsed((prevValue) => !prevValue);
                  }}
                >
                  {!isCollapsed
                    ? `View less`
                    : `and ${items.length} other item(s)`}
                </button>
              )}
            </div>

            <div className="bg-neutral-900 clr-neutral-100 p-6 flex flex-col justify-center gap-2">
              <h2 className="font-light clr-neutral-700">GRAND TOTAL</h2>
              <h3 className="tracking-wide leading-3">
                {formatPrice(totalCost)}
              </h3>
            </div>
          </div>
          <Link
            className="btn btn-primary w-full text-center"
            onClick={() => setIsCollapsed(true)}
            href="/"
          >
            Back to Home
          </Link>
        </div>
      </ClientOnlyPortal>
    </div>
  );
}

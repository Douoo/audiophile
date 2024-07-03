"use client";
import Link from "next/link";
import { useContext } from "react";

import { CartContext } from "@/context/CartContext";
import ItemTile from "./ItemTile";
import { formatPrice } from "@/utils/currency_format";

export default function CartItems() {
  const { cartItems, itemCount, totalPrice, removeAll } =
    useContext(CartContext);
  const totalCost = formatPrice(totalPrice);
  return (
    <div className="fixed right-[6.5rem] top-28 bg-white text-black w-[320px] lg:w-[375px] p-8 rounded-lg space-y-8 z-50">
      {itemCount !== 0 && (
        <div className="flex justify-between">
          <h4 className="uppercase font-bold">Cart ({itemCount})</h4>
          <button
            className="clr-neutral-800 underline hover:clr-primary-900"
            onClick={removeAll}
          >
            Remove all
          </button>
        </div>
      )}
      <div>
        {itemCount !== 0 ? (
          <ul className="max-h-72 overflow-y-scroll no-scrollbar mb-6">
            {cartItems.map((item) => (
              <ItemTile key={item.id} item={item} />
            ))}
          </ul>
        ) : (
          <div className="min-h-12 grid place-items-center">
            No items in cart
          </div>
        )}
        {itemCount !== 0 && (
          <div className="flex justify-between">
            <h4 className="uppercase">Total</h4>
            <span className="font-bold tracking-wider leading-6">
              {totalCost}
            </span>
          </div>
        )}
      </div>
      {itemCount !== 0 && (
        <Link
          className="btn btn-primary block w-full text-center"
          href="/checkout"
        >
          Checkout
        </Link>
      )}
    </div>
  );
}

"use client";
import { useState } from "react";
import {
  useCartContext,
  CartContext,
  CartItem,
  CartProvider,
  CartAddPayload,
} from "../../../../context/CartContext";

export default function AddToCartButton({ item }: { item: CartItem }) {
  const { addToCart } = useCartContext();
  const [qty, setQty] = useState(1);
  console.log("Rendered add to card btn");

  const incrementItem = () => setQty(qty + 1);
  const decrementItem = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const addItemToCart = () => {
    const payload: CartAddPayload = { item, quantity: qty };
    addToCart(payload);
  };
  return (
    <CartProvider>
      <div className="grid grid-flow-col gap-6">
        <div className="bg-neutral-300 flex items-center justify-center gap-4">
          <button className="clr-neutral-700" onClick={decrementItem}>
            -
          </button>
          <span>{qty}</span>
          <button
            className="clr-neutral-700 hover:clr-primary-900"
            onClick={incrementItem}
          >
            +
          </button>
        </div>
        <button onClick={addItemToCart} className="btn btn-primary">
          Add to cart
        </button>
      </div>
    </CartProvider>
  );
}

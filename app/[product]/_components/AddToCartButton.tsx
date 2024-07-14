"use client";
import { useContext, useState } from "react";
import {
  CartContext,
  CartItem,
  CartProvider,
} from "../../../context/CartContext";

export default function AddToCartButton({ item }: { item: CartItem }) {
  const { addToCart } = useContext(CartContext);
  const [qty, setQty] = useState(1);

  const incrementItem = () => setQty(qty + 1);
  const decrementItem = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const addItemToCart = () => {
    const product = { ...item, quantity: qty };
    addToCart(product);
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

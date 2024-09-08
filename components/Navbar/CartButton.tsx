"use client";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/context/CartContext";
import CartItems from "../CartItems";
import ClientOnlyPortal from "../Portals/ClientOnlyPortal";

import { Overlay } from "../Portals/Overlay";
import classes from "./CartButton.module.css";

export default function CartButton() {
  const [showCart, setShowCart] = useState(false);
  const [isHighlighted, setIsHighlight] = useState(false);

  const { itemCount } = useContext(CartContext);
  const handleShowCartState = () => {
    setShowCart((prevValue) => !prevValue);
  };

  useEffect(() => {
    setIsHighlight(true);
    const timer = setTimeout(() => setIsHighlight(false), 300);
    return () => {
      clearTimeout(timer);
    };
  }, [itemCount]);

  return (
    <>
      <button
        onClick={handleShowCartState}
        id={itemCount ? classes.cartBtn : ""}
        data-count={itemCount}
      >
        <Image
          className={`${isHighlighted && classes.bump}`}
          src="/assets/shared/desktop/icon-cart.svg"
          alt="cart"
          width={23}
          height={15}
        />
      </button>
      {showCart && (
        <ClientOnlyPortal selector="#modal">
          <Overlay onOverlayClick={handleShowCartState} />
          <CartItems />
        </ClientOnlyPortal>
      )}
    </>
  );
}

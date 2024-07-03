"use client";
import Image from "next/image";
import { useContext, useState } from "react";
import { CartContext } from "@/context/CartContext";
import CartItems from "../CartItems";
import ClientOnlyPortal from "../Portals/ClientOnlyPortal";

import { Overlay } from "../Portals/Overlay";
import styles from "./CartButton.module.css";

export default function CartButton() {
  const [showCart, setShowCart] = useState(false);
  const { itemCount } = useContext(CartContext);
  const handleShowCartState = () => {
    setShowCart((prevValue) => !prevValue);
  };
  return (
    <>
      <button
        onClick={handleShowCartState}
        id={itemCount ? styles.cartBtn : ""}
        data-count={itemCount}
      >
        <Image
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

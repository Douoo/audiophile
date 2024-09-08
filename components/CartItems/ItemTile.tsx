import Image from "next/image";
import { useCartContext, CartContext, CartItem } from "@/context/CartContext";

import { formatPrice } from "@/utils/currency_format";

export default function ItemTile({ item }: { item: CartItem }) {
  const { addToCart, removeFromCart, cartItems } = useCartContext();
  console.log("item");
  return (
    <li className="flex justify-between items-center mb-6">
      <div className="flex gap-3 items-center">
        <Image
          className="rounded-lg"
          src={item.image}
          alt={item.name}
          height={64}
          width={64}
        />
        <div>
          <h4 className="font-bold">{item.name}</h4>
          <span className="tracking-wider font-semibold leading-6">
            {formatPrice(item.price)}
          </span>
        </div>
      </div>
      <div className="bg-neutral-300 flex items-center justify-center gap-4 px-3 py-2">
        <button
          className="clr-neutral-700"
          onClick={() => removeFromCart(item.id)}
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          className="clr-neutral-700 hover:clr-primary-900"
          onClick={() => addToCart({ item, quantity: 1 })}
        >
          +
        </button>
      </div>
    </li>
  );
}

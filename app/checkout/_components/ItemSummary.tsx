import { CartItem } from "@/context/CartContext";
import { formatPrice } from "@/utils/currency_format";
import Image from "next/image";

export default function ItemSummary({ item }: { item: CartItem }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Image
          className="rounded-lg"
          src={item.image}
          alt="product image"
          width={64}
          height={64}
        />
        <div>
          <span className="block uppercase font-bold">{item.name}</span>
          <span className="tracking-wider leading-6" data-currency="$">
            {formatPrice(item.price)}
          </span>
        </div>
      </div>
      <span className="clr-neutral-800">x{item.quantity}</span>
    </div>
  );
}

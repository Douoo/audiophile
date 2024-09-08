import { CartItem } from "@/context/CartContext";
import { formatPrice } from "@/utils/currency_format";
import Image from "next/image";

export default function CheckoutSummaryItems({ item }: { item: CartItem }) {
  return (
    <li className="flex justify-between items-start mb-6">
      <div className="flex items-start gap-4">
        <Image
          className="rounded-lg"
          src={item.image}
          alt="product image"
          width={64}
          height={64}
        />
        <div>
          <span className="block mb-1 uppercase font-bold">{item.name}</span>
          <span className="tracking-wider leading-6" data-currency="$">
            {formatPrice(item.price)}
          </span>
        </div>
      </div>
      <span className="clr-neutral-800">x{item.quantity}</span>
    </li>
  );
}

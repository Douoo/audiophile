import Image from "next/image";
import { MediaImage } from "@/app/product/[slug]/page";
import Link from "next/link";

export interface Item {
  name: string;
  image: MediaImage;
  slug: string;
}

export default function ProductItem({ item }: { item: Item }) {
  return (
    <div className="text-center grid place-items-center gap-8">
      <Image
        className="px-12 bg-neutral-300 w-full object-contain rounded-xl overflow-hidden"
        src={item.image.desktop}
        alt="xx99-mark-one-headphone"
        width={150}
        height={195}
      />
      <h3 className="font-bold">{item.name}</h3>
      <Link href={`/product/${item.slug}`} className="btn btn-primary">
        See Product
      </Link>
    </div>
  );
}

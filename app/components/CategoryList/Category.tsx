import Image from "next/image";
import Link from "next/link";

export default function Category({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <div className="flex items-center text-center uppercase">
      <div>
        <Image src={image} width={124} height={145} alt="earphones" />
        <h1>{title}</h1>
        <Link href="">Shop</Link>
      </div>
    </div>
  );
}

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
    <div className="relative flex flex-col items-center justify-end text-center uppercase">
      <Image
        className="absolute bottom-24 z-10"
        src={image}
        width={124}
        height={100}
        alt="earphones"
      />
      <div className="bg-neutral-300 | relative min-w-64 rounded-xl overflow-hidden flex flex-col items-center justify-end py-12 w-full">
        <h1 className="font-bold mb-4">{title}</h1>
        <Link
          className="text-[#787878] text-sm flex items-center gap-2 font-bold"
          href=""
        >
          Shop
          <span>
            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.322 1l5 5-5 5"
                stroke="#D87D4A"
                stroke-width="2"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}

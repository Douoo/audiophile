import Image from "next/image";
import Link from "next/link";

export default function Category({
  image,
  title,
  linkTo,
}: {
  image: string;
  title: string;
  linkTo: string;
}) {
  return (
    <div className="relative flex flex-col items-center justify-end text-center uppercase">
      <Image
        className="absolute bottom-24 z-10"
        src={image}
        width={124}
        height={100}
        alt={title}
      />
      <div className="bg-neutral-300 | relative lg:min-w-64 rounded-xl overflow-hidden flex flex-col items-center justify-end py-12 w-full">
        <h1 className="font-bold mb-4">{title}</h1>
        <Link
          className="group text-[#787878] hover:text-black hover:[&>span]:translate-x-3 text-sm flex items-center gap-2 font-bold"
          href={linkTo}
        >
          Shop
          <span className="group-hover:translate-x-1 motion-reduce:transform- transition-transform">
            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.322 1l5 5-5 5"
                stroke="#D87D4A"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}

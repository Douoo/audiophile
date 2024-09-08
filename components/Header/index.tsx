import Link from "next/link";
import Navbar from "../Navbar";

export default function Header() {
  return (
    <header className="bg-[var(--clr-neutral-900)] text-[var(--clr-neutral-100)]">
      <Navbar className="lg:absolute top-0 left-0 lg:translate-x-[8%] " />
      <div className="hero h-[45rem]">
        <div className="container-custom lg:flex flex-col justify-center h-full">
          <div className="text-center mx-auto lg:mx-0 lg:text-start max-w-[375px] h-full  lg:flex flex-col justify-center items-start">
            <span className="block mb-6 clr-neutral-200 tracking-[10px] leading-3 font-light text-caption">
              NEW PRODUCT
            </span>
            <h1 className="uppercase font-bold heading-lg">
              XX99 Mark II Headphones
            </h1>
            <p className="mt-6 mb-7">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link
              className="btn btn-primary"
              href={"/product/xx99-mark-one-headphones"}
            >
              See Product
            </Link>
          </div>
        </div>
        {/* <div className="">
          <Image
            className="w-[500px] h-full object-cover"
            src="/assets/home/desktop/image-hero.jpg"
            alt="hero"
            width={700}
            height={880}
          />
        </div> */}
      </div>
    </header>
  );
}

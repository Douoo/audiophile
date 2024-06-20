import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[var(--clr-neutral-900)] text-[var(--clr-neutral-100)]">
      <div className="absolute top-0 left-0 translate-x-[10%] py-8 container-custom mx-auto flex justify-between items-center">
        <button className="md:hidden">
          <Image
            src="assets/shared/tablet/icon-hamburger.svg"
            height={16}
            width={15}
            alt="menu"
          />
          <span className="sr-only">Menu</span>
        </button>
        <Image
          src="assets/shared/desktop/logo.svg"
          height={165}
          width={143}
          alt="audiophile logo"
        />
        <nav className="hidden md:block">
          <ul className="flex gap-10">
            <li>
              <Link className="uppercase font-semibold" href="">
                Home
              </Link>
            </li>
            <li>
              <Link className="uppercase font-semibold" href="">
                Headphones
              </Link>
            </li>
            <li>
              <Link className="uppercase font-semibold" href="">
                Speakers
              </Link>
            </li>
            <li>
              <Link className="uppercase font-semibold" href="">
                Earphones
              </Link>
            </li>
          </ul>
        </nav>
        <button>
          <Image
            src="assets/shared/desktop/icon-cart.svg"
            alt="cart"
            width={23}
            height={15}
          />
        </button>
      </div>

      <div className="hero h-[45rem]">
        <div className="container-custom lg:flex flex-col justify-center h-full">
          <div className="text-center lg:text-start w-[375px] h-full  lg:flex flex-col justify-center items-start">
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
            <Link className="btn btn-primary" href={"/"}>
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

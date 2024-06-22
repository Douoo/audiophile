import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
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
            <Link
              className="uppercase font-semibold hover:text-[var(--clr-primary-900)]"
              href=""
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="uppercase font-semibold hover:text-[var(--clr-primary-900)]"
              href=""
            >
              Headphones
            </Link>
          </li>
          <li>
            <Link
              className="uppercase font-semibold hover:text-[var(--clr-primary-900)]"
              href=""
            >
              Speakers
            </Link>
          </li>
          <li>
            <Link
              className="uppercase font-semibold hover:text-[var(--clr-primary-900)]"
              href=""
            >
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
  );
}

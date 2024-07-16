import Image from "next/image";
import Link from "next/link";
import CartButton from "./CartButton";

export default function Navbar({ className }: { className?: string }) {
  return (
    <div
      className={`${className} z-50 relative py-8 container-custom mx-auto flex justify-between items-center`}
    >
      <button className="md:hidden">
        <Image
          src="/assets/shared/tablet/icon-hamburger.svg"
          height={16}
          width={15}
          alt="menu"
        />
        <span className="sr-only">Menu</span>
      </button>
      <a href="/">
        <Image
          priority={true}
          src="/assets/shared/desktop/logo.svg"
          height={165}
          width={143}
          alt="audiophile logo"
        />
      </a>

      <nav className="hidden md:block">
        <ul className="flex gap-10">
          <li>
            <Link
              className="uppercase font-semibold hover:text-[var(--clr-primary-900)]"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="uppercase font-semibold hover:text-[var(--clr-primary-900)]"
              href="/headphones"
            >
              Headphones
            </Link>
          </li>
          <li>
            <Link
              className="uppercase font-semibold hover:text-[var(--clr-primary-900)]"
              href="/speakers"
            >
              Speakers
            </Link>
          </li>
          <li>
            <Link
              className="uppercase font-semibold hover:text-[var(--clr-primary-900)]"
              href="/earphones"
            >
              Earphones
            </Link>
          </li>
        </ul>
      </nav>
      <CartButton />
    </div>
  );
}

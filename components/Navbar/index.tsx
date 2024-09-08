"use client";
import Image from "next/image";
import Link from "next/link";
import CartButton from "./CartButton";
import { useState } from "react";

export default function Navbar({ className }: { className?: string }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const handleIsCollapsed = () => {
    setIsCollapsed((prevValue) => !prevValue);
  };
  return (
    <div
      className={`${className} z-50 relative py-8 container-custom mx-auto flex justify-between items-center`}
    >
      <button
        type="button"
        className="relative inline-flex items-center justify-center rounded-md text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none lg:hidden"
        aria-controls="mobile-menu"
        aria-expanded="false"
        onClick={handleIsCollapsed}
      >
        <span className="absolute -inset-0.5"></span>
        <span className="sr-only">Open main menu</span>

        <svg
          className={`${isCollapsed ? "block" : "hidden"} h-6 w-6`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="var(--clr-neutral-100)"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <svg
          className={`${isCollapsed ? "hidden" : "block"} h-6 w-6`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="var(--clr-neutral-100)"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <Link href="/">
        <Image
          priority={true}
          src="/assets/shared/desktop/logo.svg"
          height={165}
          width={143}
          alt="audiophile logo"
        />
      </Link>

      <nav className="">
        <div className="hidden md:block">
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
        </div>
        <div className={`${isCollapsed && "hidden"} lg:hidden`}>
          <ul className="flex flex-col absolute bg-black top-20 left-0 right-0 p-6 pl-0 gap-6 full-bleed">
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
        </div>
      </nav>
      <CartButton />
    </div>
  );
}

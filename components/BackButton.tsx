"use client";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      className="block pt-8 hover:text-[var(--clr-primary-900)] font-semibold clr-neutral-700"
      onClick={() => router.back()}
    >
      Go Back
    </button>
  );
}

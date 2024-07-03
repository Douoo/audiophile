"use client";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      className="block mt-4 hover:text-[var(--clr-primary-900)]"
      onClick={() => router.back()}
    >
      Go Back
    </button>
  );
}

import React from "react";

export default function LoadingProductSkeleton({
  pictureFirst,
}: {
  pictureFirst?: boolean;
}) {
  return (
    <div className="mt-10 grid lg:grid-cols-2 gap-28 lg:place-items-center">
      <div
        className={`relative h-96 w-full mb-4 ${
          pictureFirst ? "order-2" : ""
        } flex justify-center items-center bg-gray-300  animate-pulse`}
      >
        <svg
          className="w-10 h-10 text-[var(--clr-neutral-300)]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className="w-full animate-pulse">
        <div className="p-6 bg-gray-300 mb-4"></div>
        <div className="p-6 w-1/2 bg-gray-300 mb-6"></div>
        <div className="h-4 bg-gray-300 rounded-full mb-4"></div>
        <div className="h-4 bg-gray-300 rounded-full mb-4"></div>
        <div className="h-4 bg-gray-300 rounded-full mb-4"></div>
        <div className="h-4 w-1/3"></div>
      </div>
    </div>
  );
}

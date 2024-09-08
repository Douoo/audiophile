import React from "react";
import ProductList from "@/app/[product]/_components/ProductList";
import { Suspense } from "react";
import LoadingProducts from "./_components/LoadingProducts";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { product: string };
}): Promise<Metadata> {
  const { product } = params;
  return {
    title: `Audiophile ${product.charAt(0).toUpperCase() + product.slice(1)}`,
    description:
      "Discover top-quality audio equipment at Audiophile. Shop our wide selection of headphones, earphones, and speakers to enhance your listening experience. Enjoy unbeatable sound clarity and comfort with products from leading brands.",
  };
}

export default function Categories({
  params,
}: {
  params: { product: string };
}) {
  return (
    <>
      <div className="bg-neutral-900 clr-neutral-300 full-bleed">
        <h2 className="heading-md uppercase font-semibold text-center py-12">
          {params.product}
        </h2>
      </div>
      <Suspense fallback={<LoadingProducts />}>
        <ProductList category={params.product} />
      </Suspense>
    </>
  );
}

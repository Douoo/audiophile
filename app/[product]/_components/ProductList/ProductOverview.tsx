import Product from "@/models/product_model";
import Link from "next/link";
import React from "react";

export default function ProductOverview({
  pictureFirst,
  product,
}: {
  pictureFirst: boolean;
  product: Product;
}) {
  return (
    <div className="grid lg:grid-cols-2 gap-28 lg:place-items-center">
      <div
        className={`mt-6 mb-8 rounded-xl overflow-hidden ${
          pictureFirst ? "lg:order-1" : ""
        }`}
      >
        <picture>
          <source
            media="(min-width: 60rem)"
            srcSet={`${product.image.desktop}`}
          />
          <source
            media="(min-width: 45rem)"
            srcSet={`${product.image.tablet}`}
          />
          <img src={`${product.image.mobile}`} alt={product.name} />
        </picture>
      </div>
      <div className="text-center lg:text-start">
        {product.new && (
          <span className="block mb-6 clr-primary-900 tracking-[10px] leading-3 font-light text-caption">
            NEW PRODUCT
          </span>
        )}
        <h1 className="heading-md font-bold">{product.name}</h1>
        <p className="clr-neutral-700 my-6">{product.description}</p>
        <Link
          className="btn btn-primary"
          href={`/${product.category}/${product.slug}`}
        >
          See Product
        </Link>
      </div>
    </div>
  );
}

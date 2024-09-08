import React from "react";
import AddToCartButton from "./AddToCartButton";
import BackButton from "@/components/BackButton";
import PreviewGridImages from "./PreviewGridImages";
import Product from "@/models/product_model";
import RelatedProducts from "../../../../components/RelatedProducts";

import { formatPrice } from "@/utils/currency_format";

export default async function ProductDetail({
  slug,
}: Readonly<{ slug: string }>) {
  const fetchProduct = async () => {
    const response = await fetch("https://api.npoint.io/85b198e0228f38646e30/");
    const data = await response.json();

    return data.find((product: Product) => product.slug === slug);
  };

  const product: Product = await fetchProduct();
  const price = formatPrice(product.price);

  return (
    <>
      <BackButton />
      <div className="grid md:grid-cols-2 gap-28 md:place-items-center">
        <div className="mt-6 mb-8 rounded-xl overflow-hidden object-cover w-full">
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
        <div>
          {product.new && (
            <span className="block mb-6 clr-primary-900 tracking-[10px] leading-3 font-light text-caption">
              NEW PRODUCT
            </span>
          )}
          <h1 className="heading-md font-bold">{product.name}</h1>
          <p className="clr-neutral-700 my-6">{product.description}</p>
          <span className="price | block mb-8 font-bold tracking-wider leading-6">
            {price}
          </span>
          <AddToCartButton
            item={{
              id: product.id,
              name: product.name,
              image: product.image.mobile,
              price: product.price,
              quantity: 0,
            }}
          />
        </div>
      </div>

      <section className="features | my-20 grid lg:grid-flow-col place-items-start gap-20">
        <div>
          <h1 className="heading-md font-bold mb-6">FEATURES</h1>
          <p className="whitespace-pre text-wrap clr-neutral-700">
            {product.features}
          </p>
        </div>
        <div className="md:grid grid-cols-2 lg:block w-full">
          <h2 className="heading-md font-bold uppercase mb-6">In the Box</h2>
          <ul>
            {product.includes.map((content, index) => (
              <li key={index} className="mb-2">
                <span className="clr-primary-900 uppercase font-semibold">
                  {content.quantity}X
                </span>
                <span className="capitalize clr-neutral-700">
                  {" "}
                  {content.item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <PreviewGridImages gallery={product.gallery} />
      <section className="py-12 mt-12">
        <h2 className="text-[1.5rem] md:text-[2rem]  font-bold uppercase text-center mb-6">
          You may also like
        </h2>
        <RelatedProducts items={product.others} />
      </section>
    </>
  );
}

import React from "react";
import ProductOverview from "./ProductOverview";
import Product from "@/models/product_model";

export default async function ProductList({ category }: { category: string }) {
  const fetchProduct = async () => {
    const response = await fetch("https://api.npoint.io/85b198e0228f38646e30/");
    const data = await response.json();

    return data
      .reverse()
      .filter((product: Product) => product.category === category);
  };

  const products: Product[] = await fetchProduct();
  return (
    <div className="grid gap-20 mt-12">
      {products.map((product, id) => (
        <ProductOverview
          key={id}
          product={product}
          pictureFirst={id % 2 == 0}
        />
      ))}
    </div>
  );
}

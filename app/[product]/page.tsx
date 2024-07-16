import BrandDetail from "@/components/BrandDetail";
import CategoryList from "@/components/CategoryList";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import ProductOverviewCard from "@/components/ProductOverview/product";
import { Item } from "@/components/ProductHorizontalList/ProductItem";
import { Gallery } from "./_components/preview_grid_images";
import { it } from "node:test";

type Product = {
  id: number;
  category: string;
  description: string;
  features: string;
  image: MediaImage;
  name: string;
  new: boolean;
  slug: string;
};

export interface MediaImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

async function Product({ params }: { params: { product: string } }) {
  const fetchProduct = async () => {
    const res = await fetch("https://api.npoint.io/85b198e0228f38646e30/");
    const data = await res.json();

    return data.filter(
      (product: Product) => product.category === params.product
    );
  };
  const products: Product[] = await fetchProduct();

  return (
    <>
      <header className="bg-black">
        <Navbar className=" border-b-[1px] border-[var(--clr-neutral-600)] clr-neutral-100 "></Navbar>
        <section className=" py-24 w-full flex justify-center items-center ">
          <h1 className="text-3xl font-bold clr-neutral-100 uppercase">
            {products[0].category}
          </h1>
        </section>
      </header>

      <main className="flex flex-col justify-center items-center py-16 gap-10">
        <section className="flex flex-col justify-center items-center gap-32">
          {products
            .map((item, index) => (
              <ProductOverviewCard
                key={index}
                order={index % 2 == 0 ? 1 : 2}
                title={products[index].name}
                overview={products[index].description}
                image={products[index].image.desktop}
                newItem={products[index].new}
                nav={params.product + "/" + products[index].slug}
              />
            ))
            .reverse()}
        </section>
        <CategoryList />
        <div className="container-custom">
          <BrandDetail />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Product;

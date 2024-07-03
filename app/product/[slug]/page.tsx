import AddToCartButton from "../_components/AddToCartButton";
import BrandDetail from "../../../components/BrandDetail";
import BackButton from "@/components/BackButton";
import CategoryList from "../../../components/CategoryList";
import Footer from "../../../components/Footer";
import { Item } from "@/components/ProductHorizontalList/ProductItem";
import Navbar from "../../../components/Navbar";
import PreviewGridImages, { Gallery } from "../_components/preview_grid_images";
import ProductList from "../../../components/ProductHorizontalList";

type Product = {
  id: number;

  category: string;
  categoryImage: MediaImage;
  currency: {
    unit: string;
    symbol: string;
  };
  description: string;
  features: string;
  gallery: Gallery;
  image: MediaImage;
  includes: [
    {
      quantity: string;
      item: string;
    }
  ];
  name: string;
  new: boolean;
  others: Item[];
  price: number;
  slug: string;
};

export interface MediaImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const fetchProduct = async () => {
    const response = await fetch("https://api.npoint.io/85b198e0228f38646e30/");
    const data = await response.json();

    return data.find((product: Product) => product.slug === params.slug);
  };

  const product: Product = await fetchProduct();
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  return (
    <>
      <header className="bg-neutral-900 clr-neutral-100">
        <Navbar />
      </header>
      <main className="container-custom">
        <BackButton />
        <div className="grid lg:grid-cols-2 gap-28 lg:place-items-center">
          <div className="mt-6 mb-8 rounded-xl overflow-hidden">
            <picture>
              <source
                media="(min-width: 60rem)"
                srcSet={`/${product.image.desktop}`}
              />
              <source
                media="(min-width: 45rem)"
                srcSet={`/${product.image.tablet}`}
              />
              <img src={`/${product.image.mobile}`} alt="" />
            </picture>
          </div>
          <div>
            {product.new && (
              <span className="block mb-6 clr-primary-900 tracking-[10px] leading-3 font-light text-caption">
                NEW PRODUCT
              </span>
            )}
            <h1 className="heading-md font-bold">{product.name}</h1>
            <p className="clr-neutral-800 my-6">{product.description}</p>
            <span className="price | block mb-8 font-bold tracking-wider leading-6">
              {price}
            </span>
            <AddToCartButton
              item={{
                id: product.id,
                name: product.name,
                image: product.image.mobile,
                price: product.price,
              }}
            />
          </div>
        </div>

        <section className="features | my-20 grid lg:grid-flow-col place-items-start gap-20">
          <div>
            <h1 className="heading-md font-bold mb-6">FEATURES</h1>
            <p className="whitespace-pre text-wrap">{product.features}</p>
          </div>
          <div>
            <h2 className="heading-md font-bold uppercase mb-6">In the box</h2>
            <ul>
              {product.includes.map((content) => (
                <li className="mb-2">
                  <span className="clr-primary-900 uppercase font-semibold">
                    {content.quantity}X
                  </span>
                  <span className="capitalize"> {content.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <PreviewGridImages gallery={product.gallery} />
        <section className="py-12">
          <h2 className="heading-md font-bold uppercase text-center mb-6">
            You may also like
          </h2>
          <ProductList items={product.others} />
        </section>
        <CategoryList />
        <BrandDetail />
      </main>

      <Footer />
    </>
  );
}

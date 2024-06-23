import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BrandDetail from "../components/BrandDetail";
import Image from "next/image";
import CategoryList from "../components/CategoryList";
import PreviewGridImages from "./preview_grid_images";

export default function Product() {
  return (
    <>
      <header className="bg-neutral-900 clr-neutral-100">
        <Navbar />
      </header>
      <main className="container-custom">
        <Link className="block mt-4" href={""}>
          Go Back
        </Link>
        <div className="grid lg:grid-cols-2 gap-28 lg:place-items-center">
          <div className="mt-6 mb-8 rounded-xl overflow-hidden">
            <picture>
              <source
                media="(min-width: 45rem)"
                srcSet="/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg"
              />
              <img
                src="/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg"
                alt=""
              />
            </picture>
          </div>
          <div>
            <span className="block mb-6 clr-primary-900 tracking-[10px] leading-3 font-light text-caption">
              NEW PRODUCT
            </span>
            <h1 className="heading-md font-bold">XX99 Mark II Headphones</h1>
            <p className="clr-neutral-800 my-6">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <span className="block mb-8 font-bold tracking-wider leading-6">
              $2,999
            </span>
            <div className="grid grid-flow-col gap-6">
              <div className="bg-neutral-300 flex items-center justify-center gap-4">
                <button className="clr-neutral-700">-</button>
                <span>1</span>
                <button className="clr-neutral-700">+</button>
              </div>
              <button className="btn btn-primary">Add to cart</button>
            </div>
          </div>
        </div>

        <section className="features | my-20 grid lg:grid-flow-col place-items-start gap-20">
          <div>
            <h1 className="heading-md font-bold mb-6">FEATURES</h1>

            <p>
              Featuring a genuine leather head strap and premium earcups, these
              headphones deliver superior comfort for those who like to enjoy
              endless listening. It includes intuitive controls designed for any
              situation. Whether you’re taking a business call or just in your
              own personal space, the auto on/off and pause features ensure that
              you’ll never miss a beat.
              <br />
              The advanced Active Noise Cancellation with built-in equalizer
              allow you to experience your audio world on your terms. It lets
              you enjoy your audio in peace, but quickly interact with your
              surroundings when you need to. Combined with Bluetooth 5. 0
              compliant connectivity and 17 hour battery life, the XX99 Mark II
              headphones gives you superior sound, cutting-edge technology, and
              a modern design aesthetic.
            </p>
          </div>
          <div>
            <h2 className="heading-md font-bold uppercase mb-6">In the box</h2>
            <div>
              <span className="clr-primary-900 uppercase">1X</span>
              <span className="capitalize"> headphone unit</span>
            </div>
          </div>
        </section>
        <PreviewGridImages />
        <section className="py-12">
          <h2 className="heading-md font-bold uppercase text-center mb-6">
            You may also like
          </h2>
          <div className="flex">
            <div className="text-center grid place-items-center gap-8">
              <Image
                className="lg:py-16 px-24 bg-neutral-300 w-full"
                src={
                  "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
                }
                alt="xx99-mark-one-headphone"
                width={150}
                height={195}
              />
              <h3 className="font-bold">XX99 MARK I</h3>
              <button className="btn btn-primary">See Product</button>
            </div>
          </div>
        </section>
        <CategoryList />
        <BrandDetail />
      </main>

      <Footer />
    </>
  );
}

import Image from "next/image";
import Header from "./components/Header";
import Link from "next/link";
import CategoryList from "./components/CategoryList";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container-custom">
        <CategoryList />
        <section className="featured">
          <div className="bg-primary-900 clr-neutral-100 | text-center lg:text-start grid place-items-center py-14 px-6 rounded-lg lg:grid-flow-col overflow-hidden">
            <Image
              className="lg:relative top-24 w-[172px] h-[200px] lg:w-[415px] lg:h-[495px] object-contain pb-8 flex-1"
              src="/assets/home/desktop/image-speaker-zx9.png"
              alt="zx9 speaker"
              width={410}
              height={490}
            />
            <div className="max-w-[345px]">
              <h1 className="heading-lg font-bold uppercase">ZX9 SPEAKER</h1>
              <p>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <button className="btn btn-dark mt-6">See Product</button>
            </div>
          </div>
          <div className="relative rounded-lg py-8 overflow-hidden">
            <div className="absolute top-0 left-0 translate-y-20 pl-4 lg:pl-12">
              <h1 className="heading-lg | font-bold uppercase mb-8">
                ZX7 SPEAKER
              </h1>
              <Link className="btn btn-outline" href="">
                See Product
              </Link>
            </div>
            <Image
              className="w-full h-[320px] object-cover"
              src="/assets/home/desktop/image-speaker-zx7.jpg"
              alt="zx7 speaker"
              width={410}
              height={490}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <Image
              className="rounded-lg overflow-hidden w-full"
              src="/assets/product-yx1-earphones/desktop/image-gallery-2.jpg"
              alt="zx9 speaker"
              width={445}
              height={280}
            />
            <div className="bg-neutral-300 rounded-lg overflow-hidden py-8 px-4 w-full lg:flex flex-col justify-center items-start">
              <h1 className="heading-lg font-bold uppercase mb-8">
                YX1 SPEAKER
              </h1>
              <Link className="btn btn-outline" href="">
                See Product
              </Link>
            </div>
          </div>
        </section>
        <section className="brand | flex items-center flex-col lg:flex-row gap-8 lg:gap-28 my-40">
          <Image
            className="flex-1 rounded-lg overflow-hidden w-full lg:order-2"
            src="/assets/shared/desktop/image-best-gear.jpg"
            width={540}
            height={580}
            alt="best gear brand"
          />
          <div className="flex-1 text-center lg:text-start lg:order-1">
            <h1 className="heading-md uppercase font-bold my-8">
              Bringing you the <span className="clr-primary-900">best</span>
              audio gear
            </h1>
            <p className="clr-neutral-800">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

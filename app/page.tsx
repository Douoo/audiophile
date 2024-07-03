import Image from "next/image";
import Header from "../components/Header";
import Link from "next/link";
import CategoryList from "../components/CategoryList";
import Footer from "../components/Footer";
import BrandDetail from "../components/BrandDetail";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container-custom">
        <CategoryList />
        <section className="featured">
          <div className="featured_card bg-primary-900 clr-neutral-100 | text-center lg:text-start grid place-items-center py-14 px-6 rounded-lg lg:grid-flow-col overflow-hidden">
            <Image
              className="lg:relative top-24 w-[172px] h-[200px] lg:w-[415px] lg:h-[495px] object-contain pb-8 flex-1"
              src="/assets/home/desktop/image-speaker-zx9.png"
              alt="zx9 speaker"
              width={410}
              height={490}
            />
            <div className="max-w-[345px] z-10">
              <h1 className="heading-lg font-bold uppercase">ZX9 SPEAKER</h1>
              <p>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link href={"/product/zx9-speaker"} className="btn btn-dark mt-6">
                See Product
              </Link>
            </div>
          </div>
          <div className="relative rounded-lg py-8 overflow-hidden">
            <div className="absolute top-0 left-0 translate-y-20 pl-4 lg:pl-12">
              <h1 className="heading-lg | font-bold uppercase mb-8">
                ZX7 SPEAKER
              </h1>
              <Link className="btn btn-outline" href="/product/zx7-speaker">
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
              <Link className="btn btn-outline" href="product/yx1-earphones">
                See Product
              </Link>
            </div>
          </div>
        </section>
        <BrandDetail />
      </main>
      <Footer />
    </>
  );
}

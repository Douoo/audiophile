import Image from "next/image";
import Header from "../components/Header";
import Link from "next/link";
import CategoryList from "../components/CategoryList";
import Footer from "../components/Footer";
import BrandDetail from "../components/BrandDetail";

import { getResponsiveImages } from "@/utils/responsive_images";

export default function Home() {
  const {
    desktopImg: zx9DesktopImg,
    mobileImg: zx9MobileImg,
    tabletImg: zx9TabletImg,
  } = getResponsiveImages({
    imgSrc: "/assets/home/desktop/image-speaker-zx9.png",
    alt: "ZX7 Speaker",
    baseWidth: 1025,
    baseHeight: 320,
  });
  const {
    desktopImg: zx7DesktopImg,
    mobileImg: zx7MobileImg,
    tabletImg: zx7TabletImg,
  } = getResponsiveImages({
    imgSrc: "/assets/home/desktop/image-speaker-zx7.jpg",
    alt: "ZX7 Speaker",
    baseWidth: 1025,
    baseHeight: 320,
  });
  const {
    desktopImg: yx1DesktopImg,
    tabletImg: yx1TabletImg,
    mobileImg: yx1MobileImg,
  } = getResponsiveImages({
    imgSrc: "/assets/home/desktop/image-earphones-yx1.jpg",
    alt: "YX1 Speaker",
    baseWidth: 520,
    baseHeight: 325,
  });

  return (
    <>
      <Header />
      <main className="container-custom">
        <CategoryList />
        <section className="featured">
          <div className="featured_card bg-primary-900 clr-neutral-100 | text-center lg:text-start grid place-items-center py-14 px-6 rounded-lg lg:grid-flow-col overflow-hidden">
            <div className="z-10">
              <picture>
                <source media="(min-width: 64rem)" srcSet={zx9DesktopImg} />
                <source
                  media="(min-width:45rem) and (max-width: 64rem)"
                  srcSet={zx9TabletImg}
                />
                <Image
                  className="lg:relative top-24 w-[172px] h-[200px] lg:w-[415px] lg:h-[495px] object-contain pb-8 flex-1"
                  src="/assets/home/desktop/image-speaker-zx9.png"
                  alt="zx9 speaker"
                  width={410}
                  height={490}
                />
              </picture>
            </div>

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
          <div className="relative rounded-lg my-8 overflow-hidden">
            <div className="absolute overflow-hidden top-0 left-0 translate-y-20 pl-4 lg:pl-12">
              <h1 className="heading-sm | font-bold uppercase mb-8">
                ZX7 SPEAKER
              </h1>
              <Link className="btn btn-outline" href="/product/zx7-speaker">
                See Product
              </Link>
            </div>
            <div>
              <picture>
                <source media="(min-width: 64rem)" srcSet={zx7DesktopImg} />
                <source
                  media="(min-width:45rem) and (max-width: 64rem)"
                  srcSet={zx7TabletImg}
                />
                <Image
                  className="w-full h-[320px] object-cover"
                  src="/assets/home/desktop/image-speaker-zx7.jpg"
                  alt="zx7 speaker"
                  width={1025}
                  height={320}
                />
              </picture>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="flex-1">
              <picture>
                <source media="(min-width: 64rem)" srcSet={yx1DesktopImg} />
                <source
                  media="(min-width:45rem) and (max-width: 64rem)"
                  srcSet={yx1TabletImg}
                />
                <Image
                  className="rounded-lg overflow-hidden w-full object-cover"
                  src="/assets/home/desktop/image-earphones-yx1.jpg"
                  alt="yx1 speaker"
                  width={520}
                  height={200}
                />
              </picture>
            </div>

            <div className="bg-neutral-300 | flex-1 rounded-lg overflow-hidden py-6 px-4 w-full lg:flex flex-col justify-center items-start">
              <h1 className="heading-sm font-bold uppercase mb-8">
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

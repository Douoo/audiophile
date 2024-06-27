import Image from "next/image";
export default function BrandDetail() {
  return (
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
          Bringing you the <span className="clr-primary-900">best </span>
          audio gear
        </h1>
        <p className="clr-neutral-800">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
}

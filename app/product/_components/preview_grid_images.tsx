import Image, { getImageProps } from "next/image";
import { getResponsiveImageProps } from "../../utils/responsive_images";

import { MediaImage } from "../[slug]/page";
import styles from "./preview_grid_image.module.css";

export interface Gallery {
  first: MediaImage;
  second: MediaImage;
  third: MediaImage;
}

export default function PreviewGridImages({ gallery }: { gallery: Gallery }) {
  const common = {
    alt: "xx99 mark two headphones",
    width: 445,
    height: 280,
    className: "mx-auto",
  };

  const desktopImg = getResponsiveImageProps(
    common,
    "/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg"
  );
  const tabletImg = getResponsiveImageProps(
    common,
    "/assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg"
  );

  return (
    <section>
      <div className={styles.preview}>
        <Image
          className="grid-row-start-1 rounded-xl overflow-hidden w-full"
          src={`/${gallery.first.desktop}`}
          alt="Best gear"
          width={500}
          height={500}
        />
        <img
          className="md:col-start-1  md:col-end-2 md:row-start-2 rounded-xl overflow-hidden w-full h-full"
          src={`/${gallery.second.desktop}`}
          alt="Best gear"
        />
        <img
          className="md:col-start-2 md:row-start-1 md:row-span-2 rounded-xl object-cover overflow-hidden h-full"
          src={`/${gallery.third.desktop}`}
          alt="xx99-mark-two-headphones preview 3"
        />
      </div>
    </section>
  );
}

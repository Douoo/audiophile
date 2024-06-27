import Image, { getImageProps } from "next/image";
import { getResponsiveImageProps } from "../utils/responsive_images";
import styles from "./preview_grid_image.module.css";
import { table } from "console";

export default function PreviewGridImages() {
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
        <img
          className="grid-row-start-1 rounded-xl overflow-hidden"
          src="/assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg"
          alt="Best gear"
        />
        <img
          className="md:col-start-1  md:col-end-2 md:row-start-2 rounded-xl overflow-hidden w-full h-full"
          src="/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg"
          alt="Best gear"
        />
        <img
          className="md:col-start-2 md:row-start-1 md:row-span-2 rounded-xl object-cover overflow-hidden h-full"
          src="/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg"
          alt="xx99-mark-two-headphones preview 3"
        />
      </div>
    </section>
  );
}

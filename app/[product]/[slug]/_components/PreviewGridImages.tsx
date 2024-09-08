import Image, { getImageProps } from "next/image";

import { MediaImage, Gallery } from "@/models/image_model";
import styles from "./preview_grid_image.module.css";

export default function PreviewGridImages({ gallery }: { gallery: Gallery }) {
  return (
    <section>
      <div className={styles.preview}>
        <Image
          className="grid-row-start-1 rounded-xl overflow-hidden w-full"
          src={gallery.first.desktop}
          alt="Best gear"
          width={470}
          height={295}
        />
        <Image
          className="md:col-start-1  md:col-end-2 md:row-start-2 rounded-xl overflow-hidden w-full h-full"
          src={`${gallery.second.desktop}`}
          alt="Best gear"
          width={470}
          height={295}
        />
        <Image
          className="md:col-start-2 md:row-start-1 md:row-span-2 rounded-xl object-cover overflow-hidden h-full"
          src={`${gallery.third.desktop}`}
          alt="xx99-mark-two-headphones preview 3"
          width={585}
          height={615}
        />
      </div>
    </section>
  );
}

import styles from "./preview_grid_image.module.css";

export default function PreviewGridImages() {
  return (
    <section>
      <div className='grid grid-flow-col'>
        <div className="rounded-xl overflow-hidden" data-first="">
          <picture>
            <source
              srcSet="/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg"
              media="(min-width: 60rem)"
            />
            <source
              srcSet="/assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg"
              media="(min-width: 45rem)"
            />
            <img
              src="/assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg"
              alt="Best gear"
            />
          </picture>
        </div>
        <div className="rounded-xl overflow-hidden" data-second="">
          <picture>
            <source
              srcSet="/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg"
              media="(min-width: 60rem)"
            />
            <source
              srcSet="/assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg"
              media="(min-width: 45rem)"
            />
            <img
              src="/assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg"
              alt="Best gear"
            />
          </picture>
        </div>
        <div className="rounded-xl overflow-hidden" data-third="">
          <picture>
            <source
              srcSet="/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg"
              media="(min-width: 60rem)"
            />
            <source
              srcSet="/assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg"
              media="(min-width: 45rem)"
            />
            <img
              src="/assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg"
              alt="Best gear"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}

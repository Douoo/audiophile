import Category from "./Category";

export default function CategoryList() {
  return (
    <section className="categories | relative z-10 my-28 grid md:grid-flow-col gap-20 md:gap-6  w-full">
      <Category
        image="/assets/shared/desktop/image-category-thumbnail-headphones.png"
        title="Headphones"
        linkTo="/headphones"
      />
      <Category
        image="/assets/shared/desktop/image-category-thumbnail-speakers.png"
        title="Speakers"
        linkTo="/speakers"
      />
      <Category
        image="/assets/shared/desktop/image-category-thumbnail-earphones.png"
        title="Earphones"
        linkTo="/earphones"
      />
    </section>
  );
}

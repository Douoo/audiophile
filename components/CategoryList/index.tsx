import Category from "./Category";

export default function CategoryList() {
  return (
    <section className="categories my-28 grid lg:grid-flow-col gap-20 lg:gap-6  w-full">
      <Category
        image="/assets/shared/desktop/image-category-thumbnail-headphones.png"
        title="Earphones"
      />
      <Category
        image="/assets/shared/desktop/image-category-thumbnail-speakers.png"
        title="Earphones"
      />
      <Category
        image="/assets/shared/desktop/image-category-thumbnail-earphones.png"
        title="Earphones"
      />
    </section>
  );
}

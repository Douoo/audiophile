import Category from "./Category";

export default function CategoryList() {
  return (
    <section className="categories my-28 flex flex-col sm:flex-row justify-evenly w-full">
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

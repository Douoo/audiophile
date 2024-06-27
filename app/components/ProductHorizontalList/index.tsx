import ProductItem from "./ProductItem";

export default function ProductList() {
  return (
    <div className="grid md:grid-cols-3 gap-7  items-center justify-center">
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
}

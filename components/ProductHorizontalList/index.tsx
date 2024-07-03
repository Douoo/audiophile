import ProductItem, { Item } from "./ProductItem";

export default function ProductList({ items }: { items: Item[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-7  items-center justify-center">
      {items.map((item) => (
        <ProductItem item={item} />
      ))}
    </div>
  );
}

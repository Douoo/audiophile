import { title } from "process";
import ProductDetail from "./_components/ProductDetail";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const productTitle = params.slug.replaceAll("-", " ");
  return {
    title: productTitle,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  return <ProductDetail slug={params.slug} />;
}

import Image from "next/image";
export default function ProductItem() {
  return (
    <div className="text-center grid place-items-center gap-8">
      <Image
        className="px-12 bg-neutral-300 w-full object-contain rounded-xl overflow-hidden"
        src={"/assets/shared/desktop/image-xx99-mark-one-headphones.jpg"}
        alt="xx99-mark-one-headphone"
        width={150}
        height={195}
      />
      <h3 className="font-bold">XX99 MARK I</h3>
      <button className="btn btn-primary">See Product</button>
    </div>
  );
}

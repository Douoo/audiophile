import React from "react";
import ProductOverviewCard from "./product";
import Image from "next/image";
import {
  InstagramIcon,
  headphone,
} from "./../../../public/assets/shared/desktop";
const ProductOverview = () => {
  const shoot = () => {
    console.log(headphone);
  };
  return (
    <section className="flex flex-col justify-center items-center gap-32">
      <ProductOverviewCard
        order={1}
        title="XX99 Mark II Headphones"
        overview="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        image={"/assets/shared/desktop/image-xx99-mark-two-headphones.jpg"}
        nav={"headphone2"}
      />
      <ProductOverviewCard
        order={2}
        title="XX99 Mark I Headphones"
        overview="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
        image="/assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
        nav={"headphone1"}
      />
      <ProductOverviewCard
        order={3}
        title="XX59 Headphones"
        overview="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
        image="/assets/shared/desktop/image-xx59-headphones.jpg"
        nav={"headphone3"}
      />
    </section>
  );
};

export default ProductOverview;

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductOverviewCard = ({
  image,
  title,
  overview,
  order,
  nav,
  newItem,
}: {
  image: string;
  title: string;
  overview: string;
  order: number;
  nav: string;
  newItem?: boolean;
}) => {
  return (
    <div className=" grid lg:grid-cols-2 justify-center items-center  mx-auto">
      <div
        className={
          " m-5 flex items-center" + (order === 1 ? " order-0" : " order-3")
        }
      >
        <Image
          className=" w-[550px] h-[510px] object-cover"
          src={image}
          width={340}
          height={380}
          alt="item"
        />
      </div>
      <div className=" max-w-[445px] px-2 mx-10 ">
        {newItem == true && (
          <h1 className=" tracking-[10px] clr-primary-800 font-normal">
            NEW PRODUCT
          </h1>
        )}

        <h1 className=" font-bold text-4xl my-5">{title}</h1>
        <p className=" my-10">{overview}</p>
        <Link className="btn btn-primary" href={nav}>
          See Product
        </Link>
      </div>
    </div>
  );
};

export default ProductOverviewCard;

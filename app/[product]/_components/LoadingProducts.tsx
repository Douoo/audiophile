import React from "react";
import LoadingProductSkeleton from "@/components/Loading/LoadingProductSkeleton";

export default function LoadingProducts() {
  const list = Array(3).fill(null);
  return (
    <>
      {list.map((_, id) => (
        <LoadingProductSkeleton key={id} pictureFirst={id % 2 == 0} />
      ))}
    </>
  );
}

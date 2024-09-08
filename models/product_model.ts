import { Item } from "@/components/RelatedProducts/ProductItem";
import { Gallery, MediaImage } from "./image_model";

type Product = {
    id: number;
  
    category: string;
    categoryImage: MediaImage;
    currency: {
      unit: string;
      symbol: string;
    };
    description: string;
    features: string;
    gallery: Gallery;
    image: MediaImage;
    includes: [
      {
        quantity: string;
        item: string;
      }
    ];
    name: string;
    new: boolean;
    others: Item[];
    price: number;
    slug: string;
  };
  
  export default Product;
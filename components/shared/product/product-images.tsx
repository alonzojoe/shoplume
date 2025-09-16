"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ProductImagesProps = {
  images: string[];
};

const ProductImages = ({ images }: ProductImagesProps) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="space-y-4">
      <Image
        className="min-h-[300px] object-cover object-center"
        src={images[selected]}
        alt={`product-image`}
        width={1000}
        height={1000}
      />
      <div className="flex gap-2">
        {images.map((image, index) => (
          <div
            className={cn(
              `border mr-2 cursor-pointer hover:border-orange-600`,
              selected === index && "border-orange-500"
            )}
            onClick={() => setSelected(index)}
            key={index}
          >
            <Image
              src={image}
              alt={`image-${index + 1}`}
              height={100}
              width={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;

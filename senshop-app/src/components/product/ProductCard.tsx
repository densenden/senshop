import Link from "next/link";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils/cn";

interface ProductCardProps {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  currency?: string;
  className?: string;
}

/**
 * Product card for displaying products in grid
 */
const ProductCard = ({
  id,
  title,
  thumbnail,
  price,
  currency = "EUR",
  className,
}: ProductCardProps) => {
  const formattedPrice = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency,
  }).format(price / 100);

  return (
    <Link
      href={`/products/${id}`}
      className={cn(
        "group block rounded-lg overflow-hidden transition-all hover:shadow-md",
        className
      )}
    >
      <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-100">
            <span className="text-sm text-gray-500">No image</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-700">{formattedPrice}</p>
      </div>
    </Link>
  );
};

export default ProductCard; 
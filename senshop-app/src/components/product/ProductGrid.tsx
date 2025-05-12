import React from "react";
import ProductCard from "./ProductCard";
import { cn } from "@/lib/utils/cn";

export interface Product {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  currency?: string;
}

interface ProductGridProps {
  products: Product[];
  className?: string;
}

/**
 * Grid display for multiple products
 */
const ProductGrid = ({ products, className }: ProductGridProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        className
      )}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          thumbnail={product.thumbnail}
          price={product.price}
          currency={product.currency}
        />
      ))}
    </div>
  );
};

export default ProductGrid; 
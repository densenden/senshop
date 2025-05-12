import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

/**
 * Not found page for products that don't exist
 */
export default function ProductNotFound() {
  return (
    <div className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-12 text-center md:px-6">
      <h1 className="text-4xl font-bold text-gray-900">Product Not Found</h1>
      <p className="mt-4 text-xl text-gray-600">
        Sorry, the product you&apos;re looking for does not exist or has been removed.
      </p>
      <div className="mt-10">
        <Link href="/products">
          <Button size="lg">Browse Other Products</Button>
        </Link>
      </div>
    </div>
  );
} 
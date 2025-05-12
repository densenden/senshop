import React from "react";
import ProductGrid from "@/components/product/ProductGrid";
import Button from "@/components/ui/Button";
import Link from "next/link";

// Mock data for products (would be fetched from Medusa API in production)
const featuredProducts = [
  {
    id: "prod_01",
    title: "Minimalist T-Shirt",
    thumbnail: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop",
    price: 2900,
    currency: "EUR"
  },
  {
    id: "prod_02",
    title: "Everyday Backpack",
    thumbnail: "https://images.unsplash.com/photo-1622560480605-d83c B0832fef?q=80&w=1000&auto=format&fit=crop",
    price: 8900,
    currency: "EUR"
  },
  {
    id: "prod_03",
    title: "Designer Watch",
    thumbnail: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?q=80&w=1000&auto=format&fit=crop",
    price: 19900,
    currency: "EUR"
  },
  {
    id: "prod_04",
    title: "Modern Lamp",
    thumbnail: "https://images.unsplash.com/photo-1543198453-c4db560989ae?q=80&w=1000&auto=format&fit=crop",
    price: 12900,
    currency: "EUR"
  }
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Modern, minimal, aesthetic.
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              A carefully curated collection of products focused on minimalist design and functionality.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/products">
                <Button size="lg">Shop Now</Button>
              </Link>
              <Link href="/collections">
                <Button size="lg" variant="outline">
                  Explore Collections
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Featured Products</h2>
            <p className="mt-4 text-center text-gray-600">
              Our most popular items, selected for their exceptional design and quality.
            </p>
            <div className="mt-12 w-full">
              <ProductGrid products={featuredProducts} />
            </div>
            <div className="mt-12">
              <Link href="/products">
                <Button variant="outline">View All Products</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Fast Shipping</h3>
              <p className="mt-2 text-sm text-gray-600">Free shipping on all orders over €100.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Secure Payment</h3>
              <p className="mt-2 text-sm text-gray-600">SSL secured checkout with all major payment methods.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M3 3l18 18" />
                  <path d="M10.5 10.5L3 18h18L10.5 10.5z" />
                  <path d="M12 22v-8.3" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Easy Returns</h3>
              <p className="mt-2 text-sm text-gray-600">30-day hassle-free return policy.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

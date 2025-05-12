import React from "react";
import ProductGrid from "@/components/product/ProductGrid";

// Mock data for products (would be fetched from Medusa API in production)
const allProducts = [
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
    thumbnail: "https://images.unsplash.com/photo-1622560480605-d83cB0832fef?q=80&w=1000&auto=format&fit=crop",
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
  },
  {
    id: "prod_05",
    title: "Ceramic Mug",
    thumbnail: "https://images.unsplash.com/photo-1614704540538-de324e4b01c8?q=80&w=1000&auto=format&fit=crop",
    price: 1900,
    currency: "EUR"
  },
  {
    id: "prod_06",
    title: "Linen Shirt",
    thumbnail: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1000&auto=format&fit=crop",
    price: 4900,
    currency: "EUR"
  },
  {
    id: "prod_07",
    title: "Wooden Chair",
    thumbnail: "https://images.unsplash.com/photo-1551298370-9d3d53740c72?q=80&w=1000&auto=format&fit=crop",
    price: 14900,
    currency: "EUR"
  },
  {
    id: "prod_08",
    title: "Minimalist Vase",
    thumbnail: "https://images.unsplash.com/photo-1612196808214-76b836156781?q=80&w=1000&auto=format&fit=crop",
    price: 3900,
    currency: "EUR"
  }
];

export const metadata = {
  title: "All Products | SenShop",
  description: "Explore our complete collection of minimalist products."
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
        <p className="mt-4 text-gray-600">
          Explore our complete collection of minimalist products designed for modern living.
        </p>
      </div>

      {/* Filters could be added here */}
      
      <div>
        <ProductGrid products={allProducts} />
      </div>
    </div>
  );
} 
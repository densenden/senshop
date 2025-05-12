import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock data for products (would be fetched from Medusa API in production)
const products = [
  {
    id: "prod_01",
    title: "Minimalist T-Shirt",
    thumbnail: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop",
    price: 2900,
    currency: "EUR",
    description: "A versatile minimalist t-shirt crafted from 100% organic cotton. Features a clean, modern design that pairs well with any outfit.",
    details: [
      "100% organic cotton",
      "Regular fit",
      "Machine washable",
      "Available in multiple sizes",
      "Made in Portugal"
    ]
  },
  {
    id: "prod_02",
    title: "Everyday Backpack",
    thumbnail: "https://images.unsplash.com/photo-1622560480605-d83cB0832fef?q=80&w=1000&auto=format&fit=crop",
    price: 8900,
    currency: "EUR",
    description: "A functional everyday backpack with minimalist design. Features multiple compartments and durable water-resistant material.",
    details: [
      "Water-resistant polyester",
      "15-inch laptop compartment",
      "Multiple interior pockets",
      "Padded shoulder straps",
      "20L capacity"
    ]
  },
  {
    id: "prod_03",
    title: "Designer Watch",
    thumbnail: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?q=80&w=1000&auto=format&fit=crop",
    price: 19900,
    currency: "EUR",
    description: "An elegant designer watch with minimalist face and premium leather strap. Perfect for both casual and formal occasions.",
    details: [
      "Japanese quartz movement",
      "Genuine leather strap",
      "Stainless steel case",
      "Water resistant to 50m",
      "2-year warranty"
    ]
  },
  {
    id: "prod_04",
    title: "Modern Lamp",
    thumbnail: "https://images.unsplash.com/photo-1543198453-c4db560989ae?q=80&w=1000&auto=format&fit=crop",
    price: 12900,
    currency: "EUR",
    description: "A modern table lamp with minimalist design. Features adjustable brightness and warm lighting for a cozy atmosphere.",
    details: [
      "Aluminum and wood construction",
      "LED light source",
      "3 brightness levels",
      "Touch controls",
      "Energy efficient"
    ]
  }
];

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id);
  
  if (!product) {
    return {
      title: "Product Not Found | SenShop",
      description: "Sorry, the product you're looking for does not exist."
    };
  }
  
  return {
    title: `${product.title} | SenShop`,
    description: product.description
  };
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id);
  
  if (!product) {
    notFound();
  }
  
  const formattedPrice = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: product.currency,
  }).format(product.price / 100);
  
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <Link href="/products" className="mb-4 text-sm text-gray-500 hover:text-gray-900">
            ← Back to products
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          <p className="mt-4 text-xl font-medium text-gray-900">{formattedPrice}</p>
          <div className="mt-6">
            <h2 className="text-lg font-medium text-gray-900">Description</h2>
            <p className="mt-2 text-gray-600">{product.description}</p>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-medium text-gray-900">Details</h2>
            <ul className="mt-2 list-inside list-disc text-gray-600">
              {product.details.map((detail, index) => (
                <li key={index} className="mt-1">{detail}</li>
              ))}
            </ul>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg">Add to Cart</Button>
            <Button size="lg" variant="outline">Save for Later</Button>
          </div>
        </div>
      </div>
    </div>
  );
} 
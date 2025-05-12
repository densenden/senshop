import React from "react";
import Link from "next/link";
import Image from "next/image";

// Mock data for collections (would be fetched from Medusa API in production)
const collections = [
  {
    id: "col_01",
    title: "Minimalist Home",
    description: "Clean, simple designs for your living space.",
    thumbnail: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "col_02",
    title: "Everyday Essentials",
    description: "Practical items for your daily routine.",
    thumbnail: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "col_03",
    title: "Monochrome",
    description: "Timeless black and white pieces.",
    thumbnail: "https://images.unsplash.com/photo-1516692935701-4f35bff8b9f6?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "col_04",
    title: "Scandinavian Design",
    description: "Inspired by Nordic aesthetics.",
    thumbnail: "https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?q=80&w=1000&auto=format&fit=crop"
  }
];

export const metadata = {
  title: "Collections | SenShop",
  description: "Browse our carefully curated product collections."
};

export default function CollectionsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Collections</h1>
        <p className="mt-4 text-gray-600">
          Browse our carefully curated collections, each with its own unique aesthetic.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {collections.map((collection) => (
          <Link
            key={collection.id}
            href={`/collections/${collection.id}`}
            className="group block overflow-hidden rounded-lg transition-all hover:shadow-md"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={collection.thumbnail}
                alt={collection.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity group-hover:bg-opacity-30" />
              <div className="absolute bottom-0 w-full p-4 text-white">
                <h2 className="text-xl font-bold">{collection.title}</h2>
                <p className="mt-2 text-sm opacity-90">{collection.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 
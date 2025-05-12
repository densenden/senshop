import React from "react";

export const metadata = {
  title: "About Us | SenShop",
  description: "Learn more about SenShop, our mission, and our commitment to quality."
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900">About SenShop</h1>
        <p className="mt-4 text-gray-600">
          Our story, mission, and the values that drive us.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Our Story</h2>
          <p className="mt-4 text-gray-600">
            SenShop was founded in 2023 with a simple yet powerful vision: to create a platform 
            that celebrates minimalist design and high-quality products. We believe that 
            well-designed, functional items enhance our daily lives.
          </p>
          <p className="mt-4 text-gray-600">
            Our carefully curated collection brings together products that embody the principles of 
            modern minimalism: clean lines, thoughtful functionality, and timeless aesthetic.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900">Our Mission</h2>
          <p className="mt-4 text-gray-600">
            We&apos;re dedicated to making beautiful, high-quality design accessible. We work directly 
            with designers and artisans to bring exceptional products to our customers, focusing 
            on sustainability and ethical production practices.
          </p>
          <p className="mt-4 text-gray-600">
            Each item in our collection is selected with intention, ensuring that it meets our 
            standards for design excellence, quality craftsmanship, and environmental responsibility.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-bold text-gray-900">Our Values</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-gray-100 p-6">
            <h3 className="text-lg font-medium text-gray-900">Quality</h3>
            <p className="mt-2 text-gray-600">
              We believe in investing in products that are built to last, reducing waste and providing 
              better value in the long term.
            </p>
          </div>
          <div className="rounded-lg border border-gray-100 p-6">
            <h3 className="text-lg font-medium text-gray-900">Sustainability</h3>
            <p className="mt-2 text-gray-600">
              We prioritize environmentally responsible materials and production methods, minimizing 
              our ecological footprint.
            </p>
          </div>
          <div className="rounded-lg border border-gray-100 p-6">
            <h3 className="text-lg font-medium text-gray-900">Transparency</h3>
            <p className="mt-2 text-gray-600">
              We believe in being open and honest about our products, pricing, and business practices.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-bold text-gray-900">Meet the Team</h2>
        <p className="mt-4 text-gray-600">
          SenShop is brought to you by a small team of design enthusiasts and e-commerce professionals 
          dedicated to creating an exceptional shopping experience.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto h-32 w-32 overflow-hidden rounded-full bg-gray-100"></div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Alex Chen</h3>
            <p className="text-sm text-gray-600">Founder & Creative Director</p>
          </div>
          <div className="text-center">
            <div className="mx-auto h-32 w-32 overflow-hidden rounded-full bg-gray-100"></div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Mia Thompson</h3>
            <p className="text-sm text-gray-600">Product Curator</p>
          </div>
          <div className="text-center">
            <div className="mx-auto h-32 w-32 overflow-hidden rounded-full bg-gray-100"></div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Daniel Park</h3>
            <p className="text-sm text-gray-600">Customer Experience Lead</p>
          </div>
        </div>
      </div>
    </div>
  );
} 
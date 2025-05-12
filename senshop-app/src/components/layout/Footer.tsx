import Link from "next/link";
import React from "react";

/**
 * Footer component with links and copyright
 */
const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-100 bg-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">SenShop</h3>
            <p className="text-sm text-gray-500">
              Modern, minimal and aesthetic online shop.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium">Shop</h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/products" className="text-sm text-gray-500 hover:text-gray-900">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-sm text-gray-500 hover:text-gray-900">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/featured" className="text-sm text-gray-500 hover:text-gray-900">
                  Featured
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium">Company</h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-500 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-900">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-500 hover:text-gray-900">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium">Legal</h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-sm text-gray-500 hover:text-gray-900">
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-100 pt-6">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} SenShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
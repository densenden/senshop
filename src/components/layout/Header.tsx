import Link from "next/link";
import React from "react";

/**
 * Header component for navigation and cart
 */
const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              SenShop
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-gray-900/70">
              Home
            </Link>
            <Link href="/products" className="text-sm font-medium hover:text-gray-900/70">
              Products
            </Link>
            <Link href="/collections" className="text-sm font-medium hover:text-gray-900/70">
              Collections
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-gray-900/70">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link 
              href="/cart" 
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-900 hover:bg-gray-200"
            >
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
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              <span className="sr-only">Cart</span>
            </Link>
            <Link 
              href="/account" 
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-900 hover:bg-gray-200"
            >
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
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span className="sr-only">Account</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 
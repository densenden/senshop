import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const config: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      // For demo purposes using unsplash images
      'images.unsplash.com',
      // For Medusa uploads
      'localhost',
    ],
  },
};

export default config;

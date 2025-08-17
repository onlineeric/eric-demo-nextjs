// Minimal Next.js config; extend if needed
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {},
  images: {
    domains: ['picsum.photos'],
  }
};

export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF primeiro (menor), WebP como fallback.
    formats: ["image/avif", "image/webp"],
    qualities: [60, 75],
  },
  experimental: {
    // Site de uma página com Tailwind: CSS pequeno, inline evita o request
    // que bloqueia a renderização.
    inlineCss: true,
  },
};

export default nextConfig;

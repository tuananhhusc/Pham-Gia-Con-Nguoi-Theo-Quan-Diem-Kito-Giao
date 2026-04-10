import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Pham-Gia-Con-Nguoi-Theo-Quan-Diem-Kito-Giao.",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

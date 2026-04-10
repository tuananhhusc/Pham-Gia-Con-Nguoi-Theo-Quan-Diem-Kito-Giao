import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Trong Next.js 16+, các tùy chọn này có thể có cấu trúc khác hoặc được xử lý tự động.
  // Chúng ta sẽ giữ các tùy chọn tối thiểu cần thiết cho Static Export.
};

export default nextConfig;

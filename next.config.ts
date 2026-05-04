import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** 静态导出，产物目录为 ./out，可直接上传到任意静态托管/对象存储 + CDN。 */
  output: "export",
  /** 让 /team/ 这种目录形式可被 OSS / CloudBase Hosting 直接命中。 */
  trailingSlash: true,
  /** 静态导出无法使用 next/image 运行时优化，必须降级为普通 <img>。 */
  images: { unoptimized: true },
};

export default nextConfig;

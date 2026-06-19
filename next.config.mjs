/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export -> outputs to ./out, deployable on any static host
  // (xCloud / OpenLiteSpeed) with no Node runtime required.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;

import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || "",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

if (process.env.NODE_ENV === "development") {
  // await setupDevPlatform();
}

export default nextConfig;

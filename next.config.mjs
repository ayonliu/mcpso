import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants'

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  // After running next build, Next.js will produce an out folder which contains the HTML/CSS/JS assets for your application.
  // output: "export",
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const nextConfig = {
    assetPrefix: isDev ? "" : process.env.NEXT_PUBLIC_ASSET_PREFIX,
  };
  return nextConfig;
};

if (process.env.NODE_ENV === "development") {
  // await setupDevPlatform();
}

export default nextConfig;

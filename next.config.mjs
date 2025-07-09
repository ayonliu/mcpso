import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // After running next build, Next.js will produce an out folder which contains the HTML/CSS/JS assets for your application.
  // output: "export",
};

if (process.env.NODE_ENV === "development") {
  // await setupDevPlatform();
}

export default nextConfig;

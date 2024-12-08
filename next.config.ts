module.exports = {
  eslint: {
    // Disable ESLint during production build (e.g., for performance)
    ignoreDuringBuilds: true,
  },
};

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images: {
  remotePatterns: [
    {protocol: "https", hostname: "cdn.sanity.io"},
    {protocol: "https", hostname: "lh3.googleusercontent.com"},
  ],
    // domains: ['cdn.sanity.io'],
  }

};

export default nextConfig;

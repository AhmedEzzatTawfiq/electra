// module.exports = {
//     eslint: {
//         // Disable ESLint during production build (e.g., for performance)
//         ignoreDuringBuilds: true,
//     },
// };

// import type { NextConfig } from "next";

const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "cdn.sanity.io" },
            { protocol: "https", hostname: "lh3.googleusercontent.com" },
        ],
        domains: ['avatars.githubusercontent.com'],
    }

};

export default nextConfig;
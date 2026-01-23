import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'moccasin-cheerful-stingray-119.mypinata.cloud',
      },
    ],
  },
};

export default nextConfig;

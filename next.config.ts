import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Root path → default locale (permanent redirect)
      {
        source: "/",
        destination: "/en",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

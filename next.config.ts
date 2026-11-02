import type { NextConfig } from "next";

const CLOUDRAILS_URL = process.env.NEXT_PUBLIC_CLOUDRAILS_URL || "https://db.echo.oqens.me";

const nextConfig: NextConfig = {
  experimental: {
    agentUpgrade: "security",
  },
  async rewrites() {
    return [
      // Same-origin proxy for the CloudRails DBaaS API (avoids browser CORS).
      {
        source: "/api/dbaas/:path*",
        destination: `${CLOUDRAILS_URL}/api/dbaas/:path*`,
      },
    ];
  },
};

export default nextConfig;

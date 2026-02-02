import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "*.replit.dev",
    "*.replit.app",
    "*.repl.co",
    "*.kirk.replit.dev",
  ],
};

export default nextConfig;
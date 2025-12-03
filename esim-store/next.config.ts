import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      "@chakra-ui/react",
      "framer-motion",
      "react-icons",
    ],
  },
};

export default nextConfig;

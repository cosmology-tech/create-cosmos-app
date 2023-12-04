const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /**
   *
   * @param {import('webpack').Configuration} config
   * @param {import('next/dist/server/config-shared').WebpackConfigContext} _context
   * @returns {import('webpack').Configuration}
   */
  webpack: (config, _context) => {
    const overridePath = path.resolve(__dirname, "../..", "node_modules/react");
    config.resolve.alias["react"] = overridePath;
    return config;
  },
};

module.exports = nextConfig;

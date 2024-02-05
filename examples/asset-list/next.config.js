// const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Workaround for locally linked packages with yarn link/npm link
  // webpack: (config, _context) => {
  //   const overridePath = path.resolve(
  //     __dirname,
  //     "../..",
  //     "node_modules/react"
  //   );
  //   config.resolve.alias["react"] = overridePath;
  //   return config;
  // },
}

module.exports = nextConfig

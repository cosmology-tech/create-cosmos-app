// const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // webpack: (config, options) => {
  //   if (options.isServer) {
  //     config.externals = ['react', ...config.externals];
  //   }

  //   config.resolve.alias['react'] = path.resolve(
  //     __dirname,
  //     '.',
  //     'node_modules',
  //     'react'
  //   );
  //   config.resolve.alias['react-dom'] = path.resolve(
  //     __dirname,
  //     '.',
  //     'node_modules',
  //     'react-dom'
  //   );
  //   config.resolve.alias['@interchain-ui/react'] = path.resolve(
  //     __dirname,
  //     '.',
  //     'node_modules',
  //     '@interchain-ui/react/dist/interchain-ui-kit-react.cjs.js'
  //   );

  //   config.resolve.alias['@interchain-ui/react/styles'] = path.resolve(
  //     __dirname,
  //     '.',
  //     'node_modules',
  //     '@interchain-ui/react/dist/interchain-ui-kit-react.cjs.css'
  //   );

  //   return config;
  // },
};

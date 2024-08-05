export type ProductCategory =
  | 'cosmwasm'
  | 'cosmos-sdk'
  | 'frontend'
  | 'testing';

export type Product = {
  name: string;
  description: string;
  link: string;
  category: ProductCategory;
};

export const products: Product[] = [
  {
    name: 'Cosmos Kit',
    description:
      'A wallet adapter for react with mobile WalletConnect support for the Cosmos ecosystem.',
    link: 'https://cosmology.zone/products/cosmos-kit',
    category: 'frontend',
  },
  {
    name: 'Telescope',
    description:
      'A TypeScript Transpiler for Cosmos Protobufs to generate libraries for Cosmos blockchains.',
    link: 'https://cosmology.zone/products/telescope',
    category: 'cosmos-sdk',
  },
  {
    name: 'Interchain UI',
    description:
      'A simple, modular and cross-framework component library for Cosmos ecosystem.',
    link: 'https://cosmology.zone/products/interchain-ui',
    category: 'frontend',
  },
  {
    name: 'TS Codegen',
    description:
      'The quickest and easiest way to convert CosmWasm Contracts into dev-friendly TypeScript classes.',
    link: 'https://cosmology.zone/products/ts-codegen',
    category: 'cosmwasm',
  },
  {
    name: 'Chain Registry',
    description:
      'Get chain and asset list information from the npm package for the Official Cosmos chain registry.',
    link: 'https://cosmology.zone/products/chain-registry',
    category: 'frontend',
  },
  {
    name: 'OsmoJS',
    description:
      'OsmosJS makes it easy to compose and broadcast Osmosis and Cosmos messages.',
    link: 'https://cosmology.zone/products/osmojs',
    category: 'frontend',
  },
  {
    name: 'Starship',
    description:
      'Starship makes it easy to build a universal interchain development environment in k8s.',
    link: 'https://cosmology.zone/products/starship',
    category: 'testing',
  },
  {
    name: 'Create Cosmos App',
    description:
      'One-Command Setup for Modern Cosmos dApps. Speed up your development and bootstrap new web3 dApps quickly.',
    link: 'https://cosmology.zone/products/create-cosmos-app',
    category: 'frontend',
  },
  {
    name: 'CosmWasm Academy',
    description:
      'Master CosmWasm and build your secure, multi-chain dApp on any CosmWasm chain!',
    link: 'https://cosmology.zone/learn/ts-codegen',
    category: 'cosmwasm',
  },
  {
    name: 'Videos',
    description:
      'How-to videos from the official Cosmology website, with learning resources for building in Cosmos.',
    link: 'https://cosmology.zone/learn',
    category: 'frontend',
  },
  {
    name: 'Next.js',
    description: 'A React Framework supports hybrid static & server rendering.',
    link: 'https://nextjs.org/',
    category: 'frontend',
  },
];

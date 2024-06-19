export type Project = {
  name: string;
  desc: string;
  link: string;
};

export const products: Project[] = [
  {
    name: 'Cosmos Kit',
    desc: 'A wallet adapter for react with mobile WalletConnect support for the Cosmos ecosystem.',
    link: 'https://github.com/cosmology-tech/cosmos-kit',
  },
  {
    name: 'Telescope',
    desc: 'A TypeScript Transpiler for Cosmos Protobufs to generate libraries for Cosmos blockchains.',
    link: 'https://github.com/cosmology-tech/telescope',
  },
  {
    name: 'TS Codegen',
    desc: 'The quickest and easiest way to convert CosmWasm Contracts into dev-friendly TypeScript classes.',
    link: 'https://github.com/CosmWasm/ts-codegen',
  },
  {
    name: 'CosmWasm Academy',
    desc: 'Master CosmWasm and build your secure, multi-chain dApp on any CosmWasm chain!',
    link: 'https://academy.cosmwasm.com/',
  },
  {
    name: 'Chain Registry',
    desc: 'Get chain and asset list information from the npm package for the Official Cosmos chain registry.',
    link: 'https://github.com/cosmology-tech/chain-registry',
  },
  {
    name: 'Videos',
    desc: 'How-to videos from the official Cosmology website, with learning resources for building in Cosmos.',
    link: 'https://cosmology.zone/learn',
  },
];

export const dependencies: Project[] = [
  {
    name: 'Interchain UI',
    desc: 'Cross-framework UI Kit for Crafting dApps.',
    link: 'https://github.com/cosmology-tech/interchain-ui',
  },
  {
    name: 'Next.js',
    desc: 'A React Framework supports hybrid static & server rendering.',
    link: 'https://nextjs.org/',
  },
];

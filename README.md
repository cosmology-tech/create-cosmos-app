# create-cosmos-app

<p align="center" width="100%">
    <img height="148" src="https://user-images.githubusercontent.com/545047/186589196-e75c9540-86a7-4a71-8096-207be9a4216f.svg" />
</p>

<p align="center" width="100%">
   <a href="https://www.npmjs.com/package/create-cosmos-app"><img height="20" src="https://img.shields.io/npm/dt/create-cosmos-app"></a>
   <a href="https://github.com/cosmology-tech/create-cosmos-app/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://www.npmjs.com/package/create-cosmos-app"><img height="20" src="https://img.shields.io/github/package-json/v/cosmology-tech/create-cosmos-app?filename=packages%2Fcreate-cosmos-app%2Fpackage.json"></a>
</p>

Set up a modern Cosmos app by running one command ⚛️

## Demo

https://user-images.githubusercontent.com/545047/192061992-f0e1106d-f4b2-4879-ab0a-896f22ee4f49.mp4

## Overview

```
# install
npm install -g create-cosmos-app

# run one command
create-cosmos-app

> name: my-app
cd my-app
yarn && yarn dev

# now your app is running on localhost:3000!
```

### Get Started Immediately

You don’t need to install or configure cosmjs, keplr, nextjs, webpack or Babel.

Everything is preconfigured, ready-to-go, so you can focus on your code!

- ⚡️ Connect easily to keplr + keplr mobile via wallet connect
- ⚛️ Sign and broadcast with [cosmjs](https://github.com/cosmos/cosmjs) stargate + cosmwasm signers
- 🛠 Render pages with [next.js](https://nextjs.org/) hybrid static & server rendering
- 🎨 Build awesome UI with [Cosmos Kit](https://github.com/cosmology-tech/cosmos-kit) and [Chakra UI](https://chakra-ui.com/docs/components)
- 📝 Leverage [chain-registry](https://github.com/cosmology-tech/chain-registry) for Chain and Asset info for all Cosmos chains

## Education & Resources

🎥 [Checkout our videos](https://cosmology.tech/learn) to learn to learn more about `create-cosmos-app` and tooling for building frontends in the Cosmos!

Checkout [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) for more docs as well as [cosmos-kit/react](https://github.com/cosmology-tech/cosmos-kit/tree/main/packages/react#signing-clients) for getting cosmjs stargate and cosmjs signers.

## Creating an App

To create a new app, you may choose one of the following methods:

### global install

```sh
npm install -g create-cosmos-app
```

Then run the command:

```sh
create-cosmos-app
```

we also made an alias `cca` if you don't want to type `create-cosmos-app`:

```sh
cca
```

### npx

```sh
npx create-cosmos-app
```

### npm

```sh
npm init cosmos-app
```

### Yarn

```sh
yarn create cosmos-app
```

## Examples

Explore examples!

```
cca --example
```

### Send Tokens

<p align="center" width="100%">
    <img height="48" src="https://user-images.githubusercontent.com/545047/186589196-e75c9540-86a7-4a71-8096-207be9a4216f.svg" />
</p>

```
cca --name mysendtokensapp --example --template send-tokens
```

### Stake Tokens

<p align="center" width="100%">
    <img height="48" src="https://user-images.githubusercontent.com/545047/186589196-e75c9540-86a7-4a71-8096-207be9a4216f.svg" />
</p>

```
cca --name mystaketokensapp --example --template stake-tokens
```

### Vote Proposal

<p align="center" width="100%">
    <img height="48" src="https://user-images.githubusercontent.com/545047/186589196-e75c9540-86a7-4a71-8096-207be9a4216f.svg" />
</p>

```
cca --name myvoteproposalapp --example --template vote-proposal
```

### IBC Transfer

<p align="center" width="100%">
    <img height="48" src="https://user-images.githubusercontent.com/545047/186589196-e75c9540-86a7-4a71-8096-207be9a4216f.svg" />
</p>

```
cca --name myibctransferapp --example --template ibc-transfer
```

### Osmosis

<p align="center" width="100%">
    <img height="48" src="https://user-images.githubusercontent.com/545047/184519024-2d34bf20-2440-4837-943f-4915a46409f5.svg" />
</p>

uses [osmojs](https://github.com/osmosis-labs/osmojs)

```
cca --name myosmoapp --example --template osmosis
```

or the cosmwasm example:

```
cca --name osmowasm --example --template osmosis-cosmwasm
```

### Swap Tokens

<p align="center" width="100%">
    <img height="48" src="https://user-images.githubusercontent.com/545047/184519024-2d34bf20-2440-4837-943f-4915a46409f5.svg" />
</p>

uses [osmojs](https://github.com/osmosis-labs/osmojs) to swap tokens

```
cca --name myswaptokensapp --example --template swap-tokens
```

### Provide Liquidity

<p align="center" width="100%">
    <img height="48" src="https://user-images.githubusercontent.com/545047/184519024-2d34bf20-2440-4837-943f-4915a46409f5.svg" />
</p>

uses [osmojs](https://github.com/osmosis-labs/osmojs) to provide liquidity

```
cca --name myprovideliquidityapp --example --template provide-liquidity
```

### Asset List

<p align="center" width="100%">
    <img height="48" src="https://user-images.githubusercontent.com/545047/184519024-2d34bf20-2440-4837-943f-4915a46409f5.svg" />
</p>

```
cca --name myassetlistapp --example --template asset-list
```

### Juno

<p align="center" width="100%">
    <img height="48" src="https://user-images.githubusercontent.com/545047/184516834-4b8190b0-0721-4778-b4fb-fa19ed3f9279.svg" />
</p>

uses [juno-network](https://github.com/CosmosContracts/typescript)

```
cca --name myjunoapp --example --template juno
```

### Stargaze

<p align="center" width="100%">
    <img height="48" src="https://user-images.githubusercontent.com/545047/184694732-f4a3d397-14fb-415a-9562-a532f510f812.png" />
</p>

uses [stargazejs](https://github.com/cosmology-tech/stargazejs)

```
cca --name mystarsapp --example --template stargaze
```

### CosmWasm

<p align="center" width="100%">
    <img height="48" src="https://user-images.githubusercontent.com/545047/197502724-4cb0f898-116c-4c14-89c8-3358e89eab70.svg" />
</p>

```
cca --name mywasmapp --example --template cosmwasm
```

### Tailwind

```
cca --name cca-tailwind --example --template tailwindcss
```

## Development

Because the nature of how template boilerplates are generated, we generate `yarn.lock` files inside of nested packages so we can fix versions to avoid non-deterministic installations.

When adding packages, yarn workspaces will use the root `yarn.lock`. It could be ideal to remove it while adding packages, and when publishing or pushing new changes, generating the nested lock files.

In the root, to remove all nested lock files:

```
yarn locks:remove
```

When you need to remove/generate locks for all nested packages, simply run `yarn locks` in the root:

```
yarn locks
```

## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.tech/validator)

Code built with the help of these related projects:

- [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
- [@osmonauts/telescope](https://github.com/osmosis-labs/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
- [chain-registry](https://github.com/cosmology-tech/chain-registry) Cosmos chain registry and chain info.
- [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) A wallet connector for the Cosmos.

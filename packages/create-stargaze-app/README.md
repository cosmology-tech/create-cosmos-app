# create-stargaze-app

<p align="center" width="100%">
    <img height="148" src="https://user-images.githubusercontent.com/545047/186589196-e75c9540-86a7-4a71-8096-207be9a4216f.svg" />
</p>

<p align="center" width="100%">
   <a href="https://github.com/cosmology-tech/create-cosmos-app/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://www.npmjs.com/package/create-stargaze-app"><img height="20" src="https://img.shields.io/github/package-json/v/cosmology-tech/create-cosmos-app?filename=packages%2Fcreate-stargaze-app%2Fpackage.json"></a>
</p>

Set up a modern Stargaze app by running one command ⚛️

## Demo

https://user-images.githubusercontent.com/545047/192061992-f0e1106d-f4b2-4879-ab0a-896f22ee4f49.mp4

## Overview

```
# install
npm install -g create-stargaze-app

# run one command
create-stargaze-app

> name: my-app
cd my-app
yarn && yarn dev

# now your app is running on localhost:3000!
```

### Get Started Immediately

You don’t need to install or configure cosmjs, keplr, nextjs, webpack or Babel.

Everything is preconfigured, ready-to-go, so you can focus on your code!

* ⚡️ Connect easily to keplr + keplr mobile via wallet connect 
* ⚛️ Sign and broadcast with [cosmjs](https://github.com/cosmos/cosmjs) stargate + cosmwasm signers
* 🛠 Render pages with [next.js](https://nextjs.org/) hybrid static & server rendering
* 🎨 Build awesome UI with [Cosmos Kit](https://github.com/cosmology-tech/cosmos-kit) and [Chakra UI](https://chakra-ui.com/docs/components)
* 📝 Leverage [chain-registry](https://github.com/cosmology-tech/chain-registry) for Chain and Asset info for all Cosmos chains
## Education & Resources

🎥 [Checkout our videos](https://cosmology.tech/learn) to learn to learn more about `create-cosmos-app` and tooling for building frontends in the Cosmos!

Checkout [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) for more docs as well as [cosmos-kit/react](https://github.com/cosmology-tech/cosmos-kit/tree/main/packages/react#signing-clients) for getting cosmjs stargate and cosmjs signers.

## Creating an App

To create a new app, you may choose one of the following methods:

### global install

```sh
npm install -g create-stargaze-app
```

Then run the command:

```sh
create-stargaze-app
```

we also made an alias `csa` if you don't want to type `create-stargaze-app`:

```sh
csa
```

### npx

```sh
npx create-stargaze-app
```
### npm

```sh
npm init stargaze-app 
```
### Yarn

```sh
yarn create stargaze-app 
```

## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.tech/validator)

Code built with the help of these related projects:

* [create-cosmos-app](https://github.com/cosmology-tech/create-cosmos-app) Set up a modern Cosmos app by running one command ⚛️
* [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
* [@osmonauts/telescope](https://github.com/osmosis-labs/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
* [chain-registry](https://github.com/cosmology-tech/chain-registry) Cosmos chain registry and chain info.
* [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) A wallet connector for the Cosmos.

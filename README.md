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

- [Overview](#overview)
- [Education & Resources](#education--resources)
- [Creating an App](#creating-an-app)
- [Examples](#examples)
- [Options](#options)
- [Development](#development)

https://user-images.githubusercontent.com/545047/192061992-f0e1106d-f4b2-4879-ab0a-896f22ee4f49.mp4


## Overview

First, install `create-cosmos-app` globally using npm:

```sh
npm install -g create-cosmos-app
```

Then, create your new Cosmos app by running the following command:

```sh
# you can also use `cca` instead of `create-cosmos-app` for shortcut ;)
create-cosmos-app
```

During the setup process, you'll be prompted to enter the name of your app. For example:

```plaintext
> name: my-app
```

Once the app is created, move into the app directory and start the development server:

```sh
cd my-app
yarn && yarn dev
```

Now your app should be running on `http://localhost:3000`!

### Get Started Immediately

You don’t need to install or configure cosmjs, keplr, nextjs, webpack or Babel.

Everything is preconfigured, ready-to-go, so you can focus on your code!

- ⚡️ Connect easily to 20+ wallets via [Cosmos Kit](https://github.com/cosmology-tech/cosmos-kit) — including Ledger, Keplr, Cosmostation, Leap, Trust Wallet, OKX, XDEFI, Exodus, Wallet Connect and more!
- ⚛️ Sign and broadcast with [cosmjs](https://github.com/cosmos/cosmjs) stargate + cosmwasm signers
- 🎨 Build awesome UI with [Interchain UI](https://cosmology.zone/products/interchain-ui) and [Explore Components](https://cosmology.zone/components)
- 🛠 Render pages with [next.js](https://nextjs.org/) hybrid static & server rendering
- 📝 Leverage [chain-registry](https://github.com/cosmology-tech/chain-registry) for Chain and Asset info for all Cosmos chains

## Education & Resources

🎥 [Checkout our videos](https://cosmology.zone/learn) to learn to learn more about `create-cosmos-app` and tooling for building frontends in the Cosmos!

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

The `create-cosmos-app` tool provides a range of examples to help you understand and test various features and integrations. By executing the examples, you can quickly see how to implement specific functionalities in your Cosmos app.

```
cca --example
```

If you know the example name, you can do

```
cca --example <example-name>
```

Alternatively, you can use the shorthand `-e` flag to achieve the same:

```
cca -e <example-name>
```

This command will generate a new project configured with the selected example, allowing you to dive into the code and functionality right away.

### Stake Tokens

<p align="center" width="100%">
    <img height="48" src="https://user-images.githubusercontent.com/545047/186589196-e75c9540-86a7-4a71-8096-207be9a4216f.svg" />
</p>

Initiate and manage staking operations directly within your application, allowing users to stake tokens securely and efficiently.


```
cca --name stake-example --example stake-tokens
```

### Vote Proposal

<p align="center" width="100%">
    <img height="48" src="https://user-images.githubusercontent.com/545047/186589196-e75c9540-86a7-4a71-8096-207be9a4216f.svg" />
</p>

Facilitate on-chain governance by enabling users to vote on proposals, enhancing community engagement and decision-making.

```
cca --name vote-example --example vote-proposal
```

### Authz

<p align="center" width="100%">
    <img height="48" src="https://user-images.githubusercontent.com/545047/186589196-e75c9540-86a7-4a71-8096-207be9a4216f.svg" />
</p>

Leverage the Authz module to grant and manage authorizations, allowing users to perform actions on behalf of others.

```
cca --name authz-example --example authz
```

### grpc-web and grpc-gateway

<p align="center" width="100%">
    <img height="48" src="https://user-images.githubusercontent.com/545047/186589196-e75c9540-86a7-4a71-8096-207be9a4216f.svg" />
</p>

Integrate gRPC-web and gRPC-gateway in your app for robust and efficient communication between your Cosmos SDK blockchain and web clients.

```
cca --name grpc-example --example grpc-web-grpc-gateway
```

### Swap Tokens

<p align="center" width="100%">
    <img height="48" src="https://user-images.githubusercontent.com/545047/184519024-2d34bf20-2440-4837-943f-4915a46409f5.svg" />
</p>

Utilize [osmojs](https://github.com/osmosis-labs/osmojs) for streamlined token swapping capabilities within your Osmosis app.

```
cca --name swap-example --example swap-tokens
```

### Provide Liquidity

<p align="center" width="100%">
    <img height="48" src="https://user-images.githubusercontent.com/545047/184519024-2d34bf20-2440-4837-943f-4915a46409f5.svg" />
</p>

Use [osmojs](https://github.com/osmosis-labs/osmojs) to enable liquidity provision features, enhancing the DeFi experience in your app.

```
cca --name liquidity-example --example provide-liquidity
```

### Asset List

<p align="center" width="100%">
    <img height="48" src="https://user-images.githubusercontent.com/545047/184519024-2d34bf20-2440-4837-943f-4915a46409f5.svg" />
</p>

Create and manage an asset list, offering comprehensive insights into the available assets, and empower your application with Inter-Blockchain Communication (IBC) capabilities for transferring tokens across different chains.

```
cca --name asset-list-example --example asset-list
```

### NFT

<p align="center" width="100%">
    <img height="48" src="https://user-images.githubusercontent.com/545047/184694732-f4a3d397-14fb-415a-9562-a532f510f812.png" />
</p>

Incorporate NFT functionalities into your Stargaze app using [stargazejs](https://github.com/cosmology-tech/stargazejs), enabling seamless NFT minting, transfer, and management.

```
cca --name nft-example --example nft
```

## Options

| Argument             | Description                                    | Default    |
|----------------------|------------------------------------------------|------------|
| `--repo`             | Set custom repository for cca templates        | None       |
| `--install`          | Automatically install dependencies             | `true`     |
| `--printCmd`         | Print the command to run after setup           | `true`     |
| `-n`, `--name`       | Provide a project name                         | None       |
| `-e`, `--example`    | Provide an example name                        | None       |
| `-t`, `--template`   | Define the template to use                     | None       |
| `-b`, `--fromBranch` | Specify the branch to use for cloning          | None       |

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

## Related

Checkout these related projects:

- [@cosmology/telescope](https://github.com/cosmology-tech/telescope) Your Frontend Companion for Building with TypeScript with Cosmos SDK Modules.
- [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) Convert your CosmWasm smart contracts into dev-friendly TypeScript classes.
- [chain-registry](https://github.com/cosmology-tech/chain-registry) Everything from token symbols, logos, and IBC denominations for all assets you want to support in your application.
- [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) Experience the convenience of connecting with a variety of web3 wallets through a single, streamlined interface.
- [create-cosmos-app](https://github.com/cosmology-tech/create-cosmos-app) Set up a modern Cosmos app by running one command.
- [interchain-ui](https://github.com/cosmology-tech/interchain-ui) The Interchain Design System, empowering developers with a flexible, easy-to-use UI kit.
- [starship](https://github.com/cosmology-tech/starship) Unified Testing and Development for the Interchain.

## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.zone/validator)

## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.

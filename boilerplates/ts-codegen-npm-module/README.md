# __MODULENAME__

<p align="center">
  <img src="https://user-images.githubusercontent.com/545047/188804067-28e67e5e-0214-4449-ab04-2e0c564a6885.svg" width="80"><br />
    __MODULEDESC__
</p>

## install

```sh
npm install __MODULENAME__
```
## Table of contents

- [__MODULENAME__](#__MODULENAME__)
  - [Install](#install)
  - [Table of contents](#table-of-contents)
- [Developing](#developing)
- [Credits](#credits)

## Developing

When first cloning the repo:

```
yarn
yarn build
```

### Codegen

Contract schemas live in `./contracts`. Look inside of `scripts/codegen.js` and configure the settings for bundling your SDK and contracts into `__MODULENAME__`:

```
yarn codegen
```

### Publishing

Build the types and then publish:

```
yarn build
yarn publish
```

## Related

Checkout these related projects:

* [telescope](https://github.com/hyperweb-io/telescope) Your Frontend Companion for Building with TypeScript with Cosmos SDK Modules.
* [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) Convert your CosmWasm smart contracts into dev-friendly TypeScript classes.
* [chain-registry](https://github.com/hyperweb-io/chain-registry) Everything from token symbols, logos, and IBC denominations for all assets you want to support in your application.
* [cosmos-kit](https://github.com/hyperweb-io/cosmos-kit) Experience the convenience of connecting with a variety of web3 wallets through a single, streamlined interface.
* [create-cosmos-app](https://github.com/hyperweb-io/create-cosmos-app) Set up a modern Cosmos app by running one command.
* [interchain-ui](https://github.com/hyperweb-io/interchain-ui) The Interchain Design System, empowering developers with a flexible, easy-to-use UI kit.
* [starship](https://github.com/hyperweb-io/starship) Unified Testing and Development for the Interchain.

## Credits

🛠 Built by Hyperweb (formerly Cosmology) — if you like our tools, please checkout and contribute to [our github ⚛️](https://github.com/hyperweb-io)


## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.

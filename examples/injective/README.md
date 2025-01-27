# Injective React Example

<p align="center">
  <img src="https://user-images.githubusercontent.com/545047/193426489-d5d3c9a9-d738-43a0-a628-b8b4f1a8034b.png" width="80"><br />
    Building the future of decentralized exchange
</p>

## Introduction

This example demonstrates the usage of React hooks provided by [injective-react](https://github.com/hyperweb-io/interchainjs/tree/main/libs/injective-react) and how to interact with the Injective blockchain on the frontend.

## Getting Started

First, install the packages and run the development server:

```bash
yarn && yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Overview

This example demonstrates how to build a React application that interacts with the Injective blockchain. By following this guide, you will learn how to set up a development environment, use React hooks, and integrate various Cosmos ecosystem tools to enhance your application.

## Query and Tx Hooks

This example uses the query hooks(e.g. useGetBalance) and tx hooks(e.g. useSend) from the `injective-react` package to interact with the Injective blockchain. These hooks allow you to query data from the blockchain and send transactions to the blockchain.

```js
import { useDelegate } from "injective-react/cosmos/staking/v1beta1/tx.rpc.func";
import { useGetValidators } from "injective-react/cosmos/staking/v1beta1/query.rpc.func";

const {
  data,
  isSuccess: isGetValidatorsDone,
  isLoading: isGetValidatorsLoading,
} = useGetValidators({
  request: {
    status: "BOND_STATUS_BONDED",
  },
  options: {
    context: defaultContext,
    enabled: !validatorAddress,
  },
  rpcClient,
});

const { mutate: delegate, isSuccess: isDelegateSuccess } = useDelegate({
  clientResolver: signingClient,
  options: {
    context: defaultContext,
    onSuccess: (data: any) => {
      console.log("onSuccess", data);
    },
    onError: (error) => {
      console.log("onError", error);
    },
  },
});
```

For more information on how to use these hooks, please refer to the [injective-react](https://github.com/hyperweb-io/interchainjs/tree/main/libs/injective-react)

## Learn More

### Chain Registry

The npm package for the Official Cosmos chain registry. Get chain and token data for you application.

* https://github.com/hyperweb-io/chain-registry

### Hyperweb Videos

Checkout more videos for how to use various frontend tooling in the Cosmos!

* https://hyperweb.io/learn

### Interchain Kit

A wallet connector for the Cosmos ⚛️

* https://github.com/hyperweb-io/interchain-kit

### Telescope

A "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs. Telescope is used to generate libraries for Cosmos blockchains. Simply point to your protobuffer files and create developer-friendly Typescript libraries for teams to build on your blockchain.

* https://github.com/hyperweb-io/telescope

🎥 [Checkout the Telescope video playlist](https://www.youtube.com/watch?v=n82MsLe82mk&list=PL-lMkVv7GZwyQaK6bp6kMdOS5mzosxytC) to learn how to use `telescope`!

### CosmWasm TS Codegen

The quickest and easiest way to interact with CosmWasm Contracts. @cosmwasm/ts-codegen converts your CosmWasm smart contracts into dev-friendly TypeScript classes so you can focus on shipping code.

* https://github.com/CosmWasm/ts-codegen

🎥 [Checkout the CosmWasm/ts-codegen video playlist](https://www.youtube.com/watch?v=D_A5V2PfNLA&list=PL-lMkVv7GZwz1KO3jANwr5W4MoziruXwK) to learn how to use `ts-codegen`!


## Learn More about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Related

Checkout these related projects:

* [telescope](https://github.com/hyperweb-io/telescope) Your Frontend Companion for Building with TypeScript with Cosmos SDK Modules.
* [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) Convert your CosmWasm smart contracts into dev-friendly TypeScript classes.
* [chain-registry](https://github.com/hyperweb-io/chain-registry) Everything from token symbols, logos, and IBC denominations for all assets you want to support in your application.
* [interchain-kit](https://github.com/hyperweb-io/interchain-kit) Experience the convenience of connecting with a variety of web3 wallets through a single, streamlined interface.
* [create-cosmos-app](https://github.com/hyperweb-io/create-cosmos-app) Set up a modern Cosmos app by running one command.
* [interchain-ui](https://github.com/hyperweb-io/interchain-ui) The Interchain Design System, empowering developers with a flexible, easy-to-use UI kit.
* [starship](https://github.com/hyperweb-io/starship) Unified Testing and Development for the Interchain.

## Credits

🛠 Built by Hyperweb (formerly Cosmology) — if you like our tools, please checkout and contribute to [our github ⚛️](https://github.com/hyperweb-io)


## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.

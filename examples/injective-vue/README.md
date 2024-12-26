# Injective Vue Example

This example demonstrates the usage of Vue composables provided by [@interchain-kit/vue](https://github.com/cosmology-tech/interchain-kit/tree/main/packages/vue) and [injective-vue](https://github.com/cosmology-tech/interchainjs/tree/main/libs/injective-vue).

## Getting Started

First, install the packages and run the development server:

```bash
yarn && yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

### Asset List

- **Completion Status:** ✅ Completed

- **Functionalities:**
  - Wallet connect
  - Assets display
  - IBC transfer

- **Telescope generated `Vue Composables` Used:**

```ts
cosmos.bank.v1beta1.useBalance
cosmos.bank.v1beta1.useAllBalances
cosmos.staking.v1beta1.useDelegatorDelegations
osmosis.gamm.v1beta1.usePools
```

- **`msgType`s are signAndBroadcasted:**

```ts
/ibc.applications.transfer.v1.MsgTransfer
```

### Auth

- **Completion Status:** ✅ Completed

- **Functionalities:**
  - Vote permission granting and revoking
  - Send permission granting and revoking
  - Delegate permission granting and revoking
  - Claim rewards granting and revoking

- **Telescope generated `Vue Composables` Used:**

```ts
cosmos.authz.v1beta1.useGranterGrants
cosmos.authz.v1beta1.useGranteeGrants
cosmos.staking.v1beta1.useValidators
```

- **`msgType`s are signAndBroadcasted:**

```ts
/cosmos.authz.v1beta1.MsgRevoke
/cosmos.authz.v1beta1.MsgGrant
```

### Voting

- **Completion Status:** ✅ Completed

- **Functionalities:**
  - Proposals display
  - Proposal voting

- **Telescope generated `Vue Composables` Used:**

```ts
cosmos.gov.v1.useProposals
cosmos.gov.v1.useParams
cosmos.gov.v1.useProposals
cosmos.staking.v1beta1.usePools
```

- **`msgType`s are signAndBroadcasted:**

```ts
/cosmos.gov.v1.MsgVote
```

### Injective

- **Completion Status:** ✅ Completed

- **Functionalities:**
  - inj balance display
  - inj tokens transfer

- **Telescope generated `Vue Composables` Used:**

```ts
cosmos.bank.v1beta1.useBalance
```

- **`msgType`s are signAndBroadcasted:**

```ts
/cosmos.bank.v1beta1.MsgSend
```

- **Telescope generated `Vue Composables` Used:**

```ts
cosmos.mint.v1beta.useAnnualProvisions
cosmos.distribution.v1beta1.useParams
cosmos.distribution.v1beta1.useDelegationTotalRewards
codegen.cosmos.staking.v1beta1.useDelegatorValidators
cosmos.staking.v1beta1.useParams
```

## Learn More

### Chain Registry

The npm package for the Official Cosmos chain registry. Get chain and token data for you application.

* https://github.com/cosmology-tech/chain-registry

### Cosmology Videos

Checkout more videos for how to use various frontend tooling in the Cosmos!

* https://cosmology.zone/learn

### Interchain Kit

A wallet connector for the Cosmos ⚛️

* https://github.com/cosmology-tech/interchain-kit

### Telescope

A "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs. Telescope is used to generate libraries for Cosmos blockchains. Simply point to your protobuffer files and create developer-friendly Typescript libraries for teams to build on your blockchain.

* https://github.com/cosmology-tech/telescope

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

* [@cosmology/telescope](https://github.com/cosmology-tech/telescope) Your Frontend Companion for Building with TypeScript with Cosmos SDK Modules.
* [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) Convert your CosmWasm smart contracts into dev-friendly TypeScript classes.
* [chain-registry](https://github.com/cosmology-tech/chain-registry) Everything from token symbols, logos, and IBC denominations for all assets you want to support in your application.
* [interchain-kit](https://github.com/cosmology-tech/interchain-kit) Experience the convenience of connecting with a variety of web3 wallets through a single, streamlined interface.
* [create-cosmos-app](https://github.com/cosmology-tech/create-cosmos-app) Set up a modern Cosmos app by running one command.
* [interchain-ui](https://github.com/cosmology-tech/interchain-ui) The Interchain Design System, empowering developers with a flexible, easy-to-use UI kit.
* [starship](https://github.com/cosmology-tech/starship) Unified Testing and Development for the Interchain.

## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.zone/validator)


## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.

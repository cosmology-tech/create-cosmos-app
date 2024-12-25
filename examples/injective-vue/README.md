# Introduction

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

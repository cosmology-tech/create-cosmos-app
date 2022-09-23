# create-cosmos-app

<p align="center" width="100%">
    <img height="148" src="https://user-images.githubusercontent.com/545047/186589196-e75c9540-86a7-4a71-8096-207be9a4216f.svg" />
</p>

<p align="center" width="100%">
   <a href="https://github.com/cosmology-tech/create-cosmos-app/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://www.npmjs.com/package/create-cosmos-app"><img height="20" src="https://img.shields.io/github/package-json/v/cosmology-tech/create-cosmos-app?filename=packages%2Fcreate-cosmos-app%2Fpackage.json"></a>
</p>

Set up a modern Cosmos app by running one command ⚛️
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

🎥 [Checkout our videos](https://cosmology.tech/learn) to learn to learn more about `create-cosmos-app` and tooling for building frontends in the Cosmos!
### Get Started Immediately

You **don’t** need to install or configure tools like cosmjs, keplr, nextjs, webpack or Babel.

They are preconfigured so that you can focus on the code.

Create a project, and you’re good to go.
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
## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.tech/validator)

Code built with the help of these related projects:

* [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
* [@osmonauts/telescope](https://github.com/osmosis-labs/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
* [chain-registry](https://github.com/cosmology-tech/chain-registry) Cosmos chain registry and chain info.
* [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) A wallet connector for the Cosmos.

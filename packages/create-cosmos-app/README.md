# create-cosmos-app

<p align="center" width="100%">
    <img height="148" src="https://user-images.githubusercontent.com/545047/186589196-e75c9540-86a7-4a71-8096-207be9a4216f.svg" />
</p>

<p align="center" width="100%">
   <a href="https://github.com/cosmology-tech/create-cosmos-app/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://www.npmjs.com/package/create-cosmos-app"><img height="20" src="https://img.shields.io/github/package-json/v/cosmology-tech/create-cosmos-app?filename=packages%2Fcreate-cosmos-app%2Fpackage.json"></a>
</p>

Set up a modern Cosmos app by running one command
## Overview

```
npx create-cosmos-app my-app
cd my-app
yarn && yarn dev
```

Or you can install in globally

```
npm install -g create-cosmos-app
```
### Get Started Immediately

You **don’t** need to install or configure tools like cosmjs, keplr, nextjs, webpack or Babel.<br>
They are preconfigured so that you can focus on the code.

Create a project, and you’re good to go.
## Creating an App

To create a new app, you may choose one of the following methods:
### npm global (preferred method)

if you installed it globally, you can do one of two methods:

```sh
create-cosmos-app
```

or, which we prefer, we made an alias to `cca` which is much easier to type:

```sh
cca
```

### npx

```sh
npx create-cosmos-app my-app
```
### npm

```sh
npm init cosmos-app my-app
```
### Yarn

```sh
yarn create cosmos-app my-app
```

It will create a directory called `my-app` inside the current folder.

## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.tech/validator)

Code built with the help of these related projects:

* [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
* [@osmonauts/telescope](https://github.com/osmosis-labs/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
* [chain-registry](https://github.com/cosmology-tech/chain-registry) Cosmos chain registry and chain info.
* [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) A wallet connector for the Cosmos.

# create-cosmos-app

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
### npx

```sh
npx create-cosmos-app my-app
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) is a package runner tool that comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

### npm

```sh
npm init cosmos-app my-app
```

_`npm init <initializer>` is available in npm 6+_

### Yarn

```sh
yarn create cosmos-app my-app
```

_[`yarn create <starter-kit-package>`](https://yarnpkg.com/lang/en/docs/cli/create/) is available in Yarn 0.25+_

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

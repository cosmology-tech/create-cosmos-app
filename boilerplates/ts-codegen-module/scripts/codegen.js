const codegen = require('@cosmwasm/ts-codegen').default;

codegen({
  contracts: [
    {
      name: 'SG721',
      dir: './contracts/stargaze-sg721/schema'
    },
    {
      name: 'Minter',
      dir: './contracts/stargaze-minter/schema'
    }
  ],
  outPath: './src/',
  options: {
    bundle: {
      bundleFile: 'index.ts',
      scope: 'contracts'
    },
    messageComposer: {
      enabled: true
    },
    useContractsHooks: {
      enabled: false // if you enable this, add react!
    }
  }
}).then(() => {
  console.log('✨ all done!');
});

import codegen from '@cosmwasm/ts-codegen';

codegen({
  contracts: [
    {
      name: 'CW20',
      dir: '../../contracts/cw20-base/schema'
    }
  ],
  outPath: './src/',
  options: {
    client: {
      useDeclareKeyword: true
    },
    bundle: {
      bundleFile: 'index.ts',
      scope: 'contracts'
    },
    messageComposer: {
      enabled: true
    },
    useContractsHook: {
      enabled: false // if you enable this, add react!
    }
  }
}).then(() => {
  console.log('✨ all done!');
}).catch((e) => {
  console.error(e);
  process.exit(1);
});

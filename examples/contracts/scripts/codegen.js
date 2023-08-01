const { join, resolve } = require('path');
const telescope = require('@cosmology/telescope').default;

const protoDirs = [join(__dirname, '/../proto')];
const contractsDir = resolve(join(__dirname, '/../contracts'));
const contracts = [
  {
    name: 'JunoSwap',
    dir: join(contractsDir, 'wasmswap')
  }
];

telescope({
  protoDirs,
  outPath: join(__dirname, '../codegen'),
  options: {
    tsDisable: {
      files: [
        'ibc/core/types/v1/genesis.ts',
        'google/protobuf/descriptor.ts',
        'google/protobuf/struct.ts'
      ]
    },
    prototypes: {
      allowUndefinedTypes: true,
      fieldDefaultIsOptional: true,
      includePackageVar: false,
      typingsFormat: {
        useDeepPartial: false,
        useExact: false,
        timestamp: 'date',
        duration: 'duration'
      },
    },
    cosmwasm: {
      contracts,
      outPath: join(__dirname, '../codegen'),
      options: {
        bundle: {
          enabled: true,
          bundleFile: 'contracts.ts',
          scope: 'contracts'
        },
        types: {
          enabled: true
        },
        client: {
          enabled: true
        },
        reactQuery: {
          enabled: false,
          optionalClient: true,
          version: 'v4',
          mutations: true
        },
        recoil: {
          enabled: false
        },
        messageComposer: {
          enabled: false
        }
      }
    },
    aminoEncoding: {
      enabled: true
    },
    lcdClients: {
      enabled: true
    },
    rpcClients: {
      enabled: true,
      camelCase: true
    }
  }
}).then(() => {
  console.log('✨ all done!');
}).catch(e=>{
  console.error(e);
});


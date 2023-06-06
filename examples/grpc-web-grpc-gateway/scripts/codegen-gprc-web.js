const { join, resolve } = require('path');
const telescope = require('@osmonauts/telescope').default;

const protoDirs = [join(__dirname, '/../proto')];

telescope({
  protoDirs,
  outPath: join(__dirname, '../codegen_grpc_web'),
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
        num64: "bigint",
        timestamp: 'date',
        duration: 'duration'
      },
    },
    aminoEncoding: {
      enabled: true
    },
    lcdClients: {
      enabled: true
    },
    bundle: {
        enabled: true
    },
    stargateClients: {
        enabled: true,
        includeCosmosDefaultTypes: true
    },
    rpcClients: {
      type: 'grpc-web',
      enabled: true,
      camelCase: true
    },
    // need new query extension from telescope for this to work, don't enable it for now
    reactQuery: {
      enabled: false
    },
    mobx: {
      enabled: false
    }
  }
}).then(() => {
  console.log('✨ all done!');
}).catch(e=>{
  console.error(e);
});

const { join, resolve } = require('path');
const telescope = require('@osmonauts/telescope').default;

const protoDirs = [join(__dirname, '/../proto')];

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
});


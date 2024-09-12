const { join, resolve } = require('path');
const telescope = require('@cosmology/telescope').default;
const AMINO_MAP = require('./aminos').default;

const protoDirs = [join(__dirname, '/../proto')];

telescope({
  protoDirs,
  outPath: join(__dirname, '../src/codegen'),
  options: {
    env: 'v-next',
    tsDisable: {
      patterns: ['**/tx.registry.ts'],
      files: [
        'ibc/core/types/v1/genesis.ts',
        'ibc/applications/interchain_accounts/genesis/v1/genesis.ts',
        'cosmos/tx/signing/v1beta1/signing.ts',
        'cosmos/staking/v1beta1/tx.ts',
        'cosmos/staking/v1beta1/staking.ts',

        'cosmos/authz/v1beta1/tx.amino.ts',
        'cosmos/staking/v1beta1/tx.amino.ts',
      ],
    },
    interfaces: {
      enabled: false,
      useUnionTypes: false,
    },
    prototypes: {
      enabled: true,
      parser: {
        keepCase: false,
      },
      excluded: {
        packages: ['cosmos.autocli.v1'],
      },
      addAminoTypeToObjects: true,
      addTypeUrlToObjects: true,
      typingsFormat: {
        customTypes: {
          useCosmosSDKDec: true,
        },
        num64: 'bigint',
        useDeepPartial: true,
        useExact: false,
        timestamp: 'date',
        duration: 'duration',
      },

      methods: {
        encode: true,
        decode: true,
        fromJSON: true,
        toJSON: true,
        fromPartial: true,
        toSDK: true,
        fromSDK: true,
        //
        toAmino: true,
        fromAmino: true,
        fromProto: true,
        toProto: true,
      },
      includePackageVar: false,
      fieldDefaultIsOptional: true,
      useOptionalNullable: true,
      allowUndefinedTypes: true,
    },
    reactQuery: {
      enabled: true,
      instantExport: {
        include: {
          patterns: ['**'],
        },
      },
    },
    aminoEncoding: {
      enabled: true,
      useRecursiveV2encoding: true,
    },
    lcdClients: {
      enabled: false,
    },
    rpcClients: {
      enabled: true,
      camelCase: true,
    },
    mobx: {
      enabled: true,
    },
  },
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
  });

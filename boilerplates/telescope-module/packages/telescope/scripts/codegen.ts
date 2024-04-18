const { join } = require('path');
const telescope = require('@cosmology/telescope').default;
const rimraf = require('rimraf').rimrafSync;
const { AMINO_MAP } = require('./aminos');

const protoDirs = [join(__dirname, '/../proto')];
const outPath = join(__dirname, '../src/codegen');
rimraf(outPath);

telescope({
  protoDirs,
  outPath,
  options: {
    tsDisable: {
      files: [
        'cosmos/authz/v1beta1/tx.amino.ts',
        'cosmos/staking/v1beta1/tx.amino.ts'
      ],
      patterns: ['**/*amino.ts', '**/*registry.ts']
    },
    prototypes: {
      includePackageVar: false,
      removeUnusedImports: true,
      experimentalGlobalProtoNamespace: true,
      interfaces: {
        enabled: true,
        useUnionTypes: false
      },
      excluded: {
        packages: [
          'ibc.applications.fee.v1', // issue with parsing protos (LCD routes with nested objects in params)

          'cosmos.app.v1alpha1',
          'cosmos.app.v1beta1',
          'cosmos.base.kv.v1beta1',
          'cosmos.base.reflection.v1beta1',
          'cosmos.base.snapshots.v1beta1',
          'cosmos.base.store.v1beta1',
          'cosmos.base.tendermint.v1beta1',
          'cosmos.crisis.v1beta1',
          'cosmos.evidence.v1beta1',
          'cosmos.genutil.v1beta1',

          'cosmos.autocli.v1',

          'cosmos.msg.v1',
          'cosmos.nft.v1beta1',
          'cosmos.capability.v1beta1',
          'cosmos.orm.v1alpha1',
          'cosmos.orm.v1',
          'cosmos.slashing.v1beta1',
          'google.api',
          'ibc.core.port.v1',
          'ibc.core.types.v1'
        ]
      },
      methods: {
        fromJSON: false,
        toJSON: false,
        encode: true,
        decode: true,
        fromPartial: true,
        toAmino: true,
        fromAmino: true,
        fromProto: true,
        toProto: true
      },
      parser: {
        keepCase: false
      }
    },
    typingsFormat: {
      duration: 'duration',
      timestamp: 'date',
      useExact: false,
      useDeepPartial: false,
      num64: 'bigint',
      customTypes: {
        useCosmosSDKDec: true
      }
    },
    aminoEncoding: {
      enabled: true,
      exceptions: AMINO_MAP
    },
    lcdClients: {
      enabled: false
    },
    rpcClients: {
      enabled: true,
      camelCase: true
    }
  }
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });

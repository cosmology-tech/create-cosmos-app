const { join, resolve } = require('path');
const telescope = require('@cosmology/telescope').default;

const protoDirs = [join(__dirname, '/../proto')];

telescope({
  protoDirs,
  outPath: join(__dirname, '../src/codegen'),
  options: {
    env: 'v-next',
    removeUnusedImports: false,
    classesUseArrowFunctions: true,

    tsDisable: {
      disableAll: true
    },
    interfaces: {
      enabled: true,
      useGlobalDecoderRegistry: true,
      registerAllDecodersToGlobal: false,
      useUnionTypes: true
    },

    prototypes: {
      enabled: true,
      addTypeUrlToObjects: true,
      addTypeUrlToDecoders: true,
      addAminoTypeToObjects: true,
      excluded: {
        packages: ['google.api.**', 'google.logging.**', 'google.protobuf.**']
      },
      parser: {
        keepCase: false
      },
      methods: {
        encode: true,
        decode: true,
        fromJSON: true,
        toJSON: true,
        fromPartial: true,
        toSDK: true,
        fromSDK: true,
        toAmino: true,
        fromAmino: true,
        toProto: true,
        fromProto: true
      },
      strictNullCheckForPrototypeMethods: true,
      paginationDefaultFromPartial: true,
      includePackageVar: true,
      fieldDefaultIsOptional: false,
      useOptionalNullable: true,
      allowUndefinedTypes: false,
      allowEncodeDefaultScalars: true,
      typingsFormat: {
        customTypes: {
          useCosmosSDKDec: true
        },
        num64: 'bigint',
        useDeepPartial: true,
        useExact: false,
        timestamp: 'date',
        duration: 'duration',
        useTelescopeGeneratedType: true
      }
    },

    bundle: {
      enabled: true
    },

    stargateClients: {
      enabled: true,
      includeCosmosDefaultTypes: true,
      addGetTxRpc: true
    },

    aggregatedLCD: {
      dir: 'osmosis',
      filename: 'agg-lcd.ts',
      packages: ['cosmos.bank.v1beta1', 'osmosis.gamm.v1beta1'],
      addToBundle: true
    },

    lcdClients: {
      enabled: true,
      scopedIsExclusive: false,
      scoped: [
        {
          dir: 'osmosis',
          filename: 'custom-lcd-client.ts',
          packages: [
            'cosmos.bank.v1beta1',
            'cosmos.gov.v1beta1',
            'osmosis.gamm.v1beta1'
          ],
          addToBundle: true,
          methodName: 'createCustomLCDClient'
        },
        {
          dir: 'evmos',
          filename: 'custom-lcd-client.ts',
          packages: [
            'cosmos.bank.v1beta1',
            'cosmos.gov.v1beta1',
            'evmos.erc20.v1'
          ],
          addToBundle: true,
          methodName: 'createEvmosLCDClient'
        }
      ]
    },

    rpcClients: {
      enabled: true,
      extensions: true,
      camelCase: true,
      scopedIsExclusive: false,
      useConnectComet: true,
      scoped: [
        {
          dir: 'cosmos',
          filename: 'cosmos-rpc-client.ts',
          packages: ['cosmos.bank.v1beta1', 'cosmos.gov.v1beta1'],
          addToBundle: true,
          methodNameQuery: 'createCosmicRPCQueryClient',
          methodNameTx: 'createCosmicRPCTxClient'
        },
        {
          dir: 'evmos',
          filename: 'evmos-rpc-client.ts',
          packages: [
            'cosmos.bank.v1beta1',
            'cosmos.gov.v1beta1',
            'evmos.erc20.v1'
          ],
          addToBundle: true,
          methodNameQuery: 'createEvmosRPCQueryClient',
          methodNameTx: 'createEvmosRPCTxClient'
        }
      ],
      serviceImplement: {
        Msg: {
          type: 'Tx'
        }
      },
      enabledServices: [
        'Msg',
        'Query',
        'Service',
        'ReflectionService',
        'ABCIApplication'
      ]
    },

    helperFuncCreators: {
      enabled: true,
      useGlobalDecoderRegistry: true,
      genCustomHooks: true
    },

    aminoEncoding: {
      enabled: true
    }
  },
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
  });

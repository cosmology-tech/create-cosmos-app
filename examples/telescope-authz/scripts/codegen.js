const { join, resolve } = require('path');
const telescope = require('@cosmology/telescope').default;

const protoDirs = [join(__dirname, '/../proto')];

telescope({
  protoDirs,
  outPath: join(__dirname, '../src/codegen'),
  options: {
    env: 'v-next',
    classesUseArrowFunctions: true,
    interfaces: {
      enabled: true,
      useGlobalDecoderRegistry: true,
      useUnionTypes: true,
    },
    prototypes: {
      enabled: true,
      parser: {
        keepCase: false,
      },
      addTypeUrlToDecoders: true,
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
        useTelescopeGeneratedType: true,
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
      useOptionalNullable: true,
      allowUndefinedTypes: true,
    },
    reactQuery: {
      enabled: true,
    },
    aminoEncoding: {
      enabled: true,
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

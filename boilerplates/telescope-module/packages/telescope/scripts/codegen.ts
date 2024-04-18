import { TelescopeInput } from '@cosmology/telescope';
import telescope from '@cosmology/telescope';
import { join } from 'path';
import { rimrafSync as rimraf } from 'rimraf';

import { AMINO_MAP } from './aminos';

const protoDirs: string[] = [join(__dirname, '/../proto')];
const outPath: string = join(__dirname, '../src');
rimraf(outPath);

export const options: TelescopeInput = {
  protoDirs,
  outPath,
  options: {
    interfaces: {
      enabled: true,
      useUnionTypes: true
    },
    prototypes: {
      enabled: true,
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
    },

    bundle: {
      enabled: true
    },

    tsDisable: {
      files: [],
      patterns: [],
      disableAll: true
    },

    eslintDisable: {
      files: [],
      patterns: [],
      disableAll: false
    },

    stargateClients: {
      enabled: true,
      includeCosmosDefaultTypes: true
    },

    aminoEncoding: {
      enabled: true,
      customTypes: {
        useCosmosSDKDec: false
      },
      exceptions: {
        ...AMINO_MAP
      },
    },
    lcdClients: {
      enabled: false
    },
    rpcClients: {
      type: 'tendermint',
      enabled: true
    },

    reactQuery: {
      enabled: false
    },

    mobx: {
      enabled: false
    },

    pinia: {
      enabled: false
    }
  }
};


telescope(options)
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });

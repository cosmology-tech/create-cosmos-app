import { Chain, AssetList } from '@chain-registry/types';

export const chainName = 'mini';

export const chainInfo: Chain = {
  chain_name: "mini",
  status: "live",
  network_type: "localnet",
  pretty_name: "Mini",
  chain_id: "demo",
  bech32_prefix: "mini",
  daemon_name: "minid",
  key_algos: [
    "secp256k1"
  ],
  node_home: "/root/.minid",
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: "mini",
        fixed_min_gas_price: 0.0025,
        low_gas_price: 0.0025,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: "mini"
      }
    ],
    lock_duration: {
      time: "1209600s",
    },
  },
  apis: {
    rpc: [
      {
        address: "http://localhost:26657",
        provider: "test",
      }
    ],
    rest: [
      {
        address: "http://localhost:1317",
        provider: "test",
      }
    ],
  }
};

export const chainAsset: AssetList = {
  chain_name: "mini",
  assets: [
    {
      description: "Native token for mini chain",
      denom_units: [
        {
          denom: "mini",
          exponent: 0,
        },
      ],
      base: "mini",
      name: "Mini",
      display: "mini",
      symbol: "MINI",
    },
  ],
};

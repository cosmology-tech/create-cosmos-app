import { assets, chains } from "chain-registry";

export const CHAIN_NAME = "gmrollup";
export const CHAIN_NAME_STORAGE_KEY = "selected-chain";

export const GMROLLUP_CHAIN = {
  "$schema": "../../chain.schema.json",
  "chain_name": "gmrollup",
  "chain_id": "gm",
  "pretty_name": "GMROLLUP TESTING",
  "status": "testnet",
  "network_type": "testnet",
  "bech32_prefix": "gm",
  "daemon_name": "gmd",
  "node_home": "$HOME/.gm",
  "key_algos": [
    "secp256k1",
  ],
  "slip44": 118,
  "fees": {
    "fee_tokens": [
      {
        "denom": "ustake",
        "fixed_min_gas_price": 0,
      },
    ],
  },
  "apis": {
    "rpc": [
      {
        "address": "http://localhost:26657",
        "provider": "local-network",
      },
    ],
    "rest": [
      {
        "address": "http://localhost:1317",
        "provider": "local-network",
      },
    ],
  },
  "beta": true,
};

export const GMROLLUP_ASSETS = {
  "$schema": "../../assetlist.schema.json",
  "chain_name": "gmrollup",
  "assets": [
    {
      "description": "",
      "denom_units": [
        {
          "denom": "ustake",
          "exponent": 0,
        },
        {
          "denom": "stake",
          "exponent": 6,
        },
      ],
      "base": "stake",
      "name": "GM rollup",
      "display": "stake",
      "symbol": "STAKE",
      "logo_URIs": {
        "svg":
          "https://raw.githubusercontent.com/jcstein/gm-portal/b030ce3fe548d188fbacb6b932d7e51dc7afd65e/frontend/public/gm.svg",
      },
    },
  ],
};

export const CHAINS = [...chains, GMROLLUP_CHAIN];
export const ASSETS = [...assets, GMROLLUP_ASSETS];

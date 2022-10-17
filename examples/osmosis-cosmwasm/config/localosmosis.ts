import { Chain, AssetList } from '@chain-registry/types';

export const localosmosis: Chain = {
    "$schema": "../../chain.schema.json",
    "chain_name": "localosmosis",
    "status": "live",
    "network_type": "testnet",
    "pretty_name": "Osmosis Localnet",
    "chain_id": "osmosis-local-1",
    "bech32_prefix": "osmo",
    "daemon_name": "osmosisd",
    "node_home": "$HOME/.osmosisd",
    "key_algos": [
        "secp256k1"
    ],
    "slip44": 118,
    "fees": {
        "fee_tokens": [
            {
                "denom": "uosmo",
                "fixed_min_gas_price": 0,
                "low_gas_price": 0,
                "average_gas_price": 0.025,
                "high_gas_price": 0.04
            }
        ]
    },
    "staking": {
        "staking_tokens": [
            {
                "denom": "uosmo"
            }
        ]
    },
    "codebase": {
        "git_repo": "https://github.com/osmosis-labs/osmosis",
        "recommended_version": "v11.0.0",
        "compatible_versions": [
            "v11.0.0"
        ],
        "cosmos_sdk_version": "0.45",
        "tendermint_version": "0.34",
        "cosmwasm_version": "0.24",
        "cosmwasm_enabled": true,
        "genesis": {
            "genesis_url": "https://github.com/osmosis-labs/networks/raw/main/osmo-test-4/genesis.tar.bz2"
        }
    },
    "apis": {
        "rpc": [
            {
                "address": "http://localhost:3535",
            }
        ],
        "rest": [
            {
                "address": "http://localhost:35357"
            }
        ],
        "grpc": []
    },
    "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png"
    },
    "keywords": [
        "dex",
        "testnet"
    ]
};

export const localosmosisAssets: AssetList = {
    "$schema": "../../assetlist.schema.json",
    "chain_name": "localosmosis",
    "assets": [
        {
            "description": "The native token of Osmosis",
            "denom_units": [
                {
                    "denom": "uosmo",
                    "exponent": 0,
                    "aliases": []
                },
                {
                    "denom": "osmo",
                    "exponent": 6,
                    "aliases": []
                }
            ],
            "base": "uosmo",
            "name": "Osmosis",
            "display": "osmo",
            "symbol": "OSMO",
            "logo_URIs": {
                "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
                "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
            },
            "coingecko_id": "osmosis",
            "keywords": [
                "dex",
                "staking"
            ]
        },
        {
            "denom_units": [
                {
                    "denom": "uion",
                    "exponent": 0
                },
                {
                    "denom": "ion",
                    "exponent": 6
                }
            ],
            "base": "uion",
            "name": "Ion",
            "display": "ion",
            "symbol": "ION",
            "logo_URIs": {
                "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
                "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
            },
            "coingecko_id": "ion",
            "keywords": [
                "memecoin"
            ]
        }
    ]
};

import path from 'path';
import { Chain, AssetList, IBCInfo } from '@chain-registry/types';

const setup = async () => {
  const configFile = path.join(__dirname, 'configs', 'config.yaml');
};

export const osmosisDevnet: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'osmosis',
  status: 'live',
  network_type: 'localnet',
  website: 'https://osmosis.zone/',
  update_link: 'https://raw.githubusercontent.com/osmosis-labs/osmosis/main/chain.schema.json',
  pretty_name: 'Osmosis Devnet',
  chain_id: 'test-osmosis-1',
  bech32_prefix: 'osmo',
  daemon_name: 'osmosisd',
  node_home: '$HOME/.osmosisd',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
      denom: 'uosmo',
      fixed_min_gas_price: 0,
      low_gas_price: 0,
      average_gas_price: 0.025,
      high_gas_price: 0.04
    }]
  },
  staking: {
    staking_tokens: [{
      denom: 'uosmo'
    }],
    lock_duration: {
      time: '1209600s'
    }
  },
  codebase: {
    cosmos_sdk_version: 'osmosis-labs/cosmos-sdk v0.47.5-v25-osmo-1',
    cosmwasm_enabled: true,
    cosmwasm_version: 'osmosis-labs/wasmd v0.45.0-osmo'
  },
  images: [{
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png',
    theme: {
      primary_color_hex: '#231D4B'
    },
    layout: 'logo',
    text_position: 'right'
  }, {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
    layout: 'logomark'
  }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png'
  },
  description: 'Osmosis (OSMO) is the premier DEX and cross-chain DeFi hub within the Cosmos ecosystem, a network of over 50 sovereign, interoperable blockchains seamlessly connected through the Inter-Blockchain Communication Protocol (IBC). Pioneering in its approach, Osmosis offers a dynamic trading and liquidity provision experience, integrating non-IBC assets from other ecosystems, including Ethereum, Solana, Avalanche, and Polkadot. Initially adopting Balancer-style pools, Osmosis now also features a concentrated liquidity model that is orders of magnitude more capital efficient, meaning that significantly less liquidity is required to handle the same amount of trading volume with minimal slippage.\n\nAs a true appchain, Osmosis has greater control over the full blockchain stack than traditional smart contract DEXs, which must follow the code of the parent chain that it is built on. This fine-grained control has enabled, for example, the development of Superfluid Staking, an extension of Proof of Stake that allows assets at the application layer to be staked to secure the chain. The customizability of appchains also allows implementing features like the Protocol Revenue module, which enables Osmosis to conduct on-chain arbitrage on behalf of OSMO stakers, balancing prices across pools while generating real yield revenue from this volume. Additionally, as a sovereign appchain, Osmosis governance can vote on upgrades to the protocol. One example of this was the introduction of a Taker Fee, which switched on the collection of exchange fees to generate diverse yield from Osmosis volume and distribute it to OSMO stakers.\n\nOsmosis is bringing the full centralized exchange experience to the decentralized world by building a cross-chain native DEX and trading suite that connects all chains over IBC, including Ethereum and Bitcoin. To reach this goal, Osmosis hosts an ever-expanding suite of DeFi applications aimed at providing a one-stop experience that includes lending, credit, margin, DeFi strategy vaults, power perps, fiat on-ramps, NFTs, stablecoins, and more — all of the functionalities that centralized exchange offer and more, in the trust-minimized environment of decentralized finance.',
  apis: {
    rpc: [
      {
        address: "http://localhost:26657",
        provider: "test-osmosis-1"
      }
    ],
    rest: [
      {
        address: "http://localhost:1317",
        provider: "test-osmosis-1"
      }
    ],
    grpc: [
      {
        address: "http://test-osmosis-1-genesis.aws-starship.svc.cluster.local:9091",
        provider: "test-osmosis-1"
      }
    ]
  },
  explorers: [
    {
      kind: 'ping-pub',
      url: 'http://localhost:8080'
    },
  ],
  keywords: ['dex']
};

export const osmosisDevnetAsset: AssetList = {
  chain_name: "osmosis",
  assets: [
    {
      description: "The native token of Osmosis",
      denom_units: [
        {
          denom: "uosmo",
          exponent: 0,
          aliases: []
        },
        {
          denom: "osmo",
          exponent: 6,
          aliases: []
        }
      ],
      base: "uosmo",
      name: "Osmosis",
      display: "osmo",
      symbol: "OSMO",
      coingecko_id: "osmosis",
      keywords: [
        "staking",
        "dex"
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
        svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
      }
    },
    {
      description: "",
      denom_units: [
        {
          denom: "uion",
          exponent: 0,
          aliases: []
        },
        {
          denom: "ion",
          exponent: 6,
          aliases: []
        }
      ],
      base: "uion",
      name: "Ion",
      display: "ion",
      symbol: "ION",
      coingecko_id: "ion",
      keywords: [
        "memecoin"
      ],
      logo_URIs: {
        png: "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
        svg: "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
      }
    }
  ],
}

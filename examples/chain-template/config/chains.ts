import { chains, assets } from 'chain-registry';
import osmosis from 'chain-registry/mainnet/osmosis/chain';

const chainNames = ['osmosistestnet', 'juno', 'stargaze', 'osmosis'];

export const staticChains = chainNames.map(
  (chainName) => chains.find((chain) => chain.chain_name === chainName)!
);

export const staticAssets = chainNames.map(
  (chainName) => assets.find((chain) => chain.chain_name === chainName)!
);

export const osmosisChainName = osmosis.chain_name;

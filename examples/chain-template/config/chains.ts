import { chains } from 'chain-registry';
import osmosis from 'chain-registry/mainnet/osmosis/chain';

const chainNames = ['osmosistestnet', 'juno', 'stargaze', 'osmosis', 'cosmoshub'];

export const chainOptions = chainNames.map(
  (chainName) => chains.find((chain) => chain.chain_name === chainName)!
);

export const osmosisChainName = osmosis.chain_name;

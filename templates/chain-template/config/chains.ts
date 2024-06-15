import cosmoshub from 'chain-registry/mainnet/cosmoshub/chain';
import osmosis from 'chain-registry/mainnet/osmosis/chain';
import osmosistestnet from 'chain-registry/testnet/osmosistestnet/chain';
import juno from 'chain-registry/mainnet/juno/chain';
import stargaze from 'chain-registry/mainnet/stargaze/chain';
import akash from 'chain-registry/mainnet/akash/chain';

export const chains = [
  osmosis,
  cosmoshub,
  juno,
  stargaze,
  akash,
  osmosistestnet,
];

export const osmosisChainName = osmosis.chain_name;

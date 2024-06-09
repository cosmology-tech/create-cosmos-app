import cosmoshub from 'chain-registry/mainnet/cosmoshub/chain';
import osmosis from 'chain-registry/mainnet/osmosis/chain';
import juno from 'chain-registry/mainnet/juno/chain';
import stargaze from 'chain-registry/mainnet/stargaze/chain';
import akash from 'chain-registry/mainnet/akash/chain';

export const chains = [osmosis, cosmoshub, juno, stargaze, akash];

export const osmosisChainName = osmosis.chain_name;

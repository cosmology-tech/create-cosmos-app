import cosmoshub from 'chain-registry/mainnet/cosmoshub/chain';
import osmosis from 'chain-registry/mainnet/osmosis/chain';
import osmosistestnet from 'chain-registry/testnet/osmosistestnet/chain';
import juno from 'chain-registry/mainnet/juno/chain';
import stargaze from 'chain-registry/mainnet/stargaze/chain';
import akash from 'chain-registry/mainnet/akash/chain';
import {osmosisDevnet, osmosisDevnetAsset} from '@/starship/chains';
import { assets as allAssets, chains as allChains } from 'chain-registry';

export const chains = [osmosisDevnet];
export const assets = [osmosisDevnetAsset];

export const osmosisChainName = osmosisDevnet.chain_name;

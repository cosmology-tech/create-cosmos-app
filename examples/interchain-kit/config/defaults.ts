import { assets } from 'chain-registry';
import { AssetList, Asset } from '@chain-registry/types';

export const defaultChainName = 'cosmoshub'

export const chainassets = assets.find(
  (chain) => chain.chain_name === defaultChainName
) as AssetList;

export const coin = chainassets.assets.find(
  (asset) => asset.base === 'uosmo'
) as Asset;
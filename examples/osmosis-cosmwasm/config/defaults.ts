import { assets } from 'chain-registry';
import { AssetList, Asset } from '@chain-registry/types';

// export const chainName = 'osmosis';
export const chainName = 'localosmosis';
// export const chainName = 'osmosistestnet';

export const chainassets: AssetList = assets.find(
    (chain) => chain.chain_name === chainName
) as AssetList;

export const coin: Asset = chainassets.assets.find(
    (asset) => asset.base === 'uosmo'
) as Asset;
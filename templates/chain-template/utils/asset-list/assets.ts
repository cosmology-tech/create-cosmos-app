import { Asset as OsmosisAsset } from '@chain-registry/types';
import { asset_lists } from '@chain-registry/assets';
import { assets } from 'chain-registry';

let osmoAssets: OsmosisAsset[] = [];

const chainInfo = asset_lists.find(
  ({ chain_name }) => chain_name === 'osmosis'
);
if (chainInfo && Array.isArray(chainInfo.assets)) {
  osmoAssets = [...chainInfo.assets];
}

let chainInfo2 = assets.find(({ chain_name }) => chain_name === 'osmosis');
if (chainInfo2 && Array.isArray(chainInfo2.assets)) {
  osmoAssets = [...osmoAssets, ...chainInfo2.assets];
}

export const osmosisAssets = osmoAssets;

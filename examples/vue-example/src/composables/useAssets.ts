import { Asset, AssetList } from '@chain-registry/types';
import { asset_lists as ibcAssetLists } from '@chain-registry/assets';
import { assets as chainAssets } from 'chain-registry';
import { Ref } from 'vue'


export const useAssets = (chainName: Ref<string>) => {
  const filterAssets = (assetList: AssetList[]): Asset[] => {
    return (
      assetList
        .find(({ chain_name }) => chain_name === chainName.value)
        ?.assets?.filter(({ type_asset }) => type_asset !== 'ics20') || []
    );
  };

  const nativeAssets = filterAssets(chainAssets);
  const ibcAssets = filterAssets(ibcAssetLists);

  const allAssets = [...nativeAssets, ...ibcAssets];
  return {
    allAssets,
    nativeAssets,
    ibcAssets
  }
}
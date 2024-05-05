import { useMemo } from 'react';
import { Asset, AssetList } from '@chain-registry/types';
import { asset_lists as ibcAssetLists } from '@chain-registry/assets';
import { assets as chainAssets } from 'chain-registry';
import { PrettyAsset } from '../components';

export const useChainUtils = (chainName: string) => {

  const filterAssets = (assetList: AssetList[]): Asset[] => {
    return (
      assetList
        .find(({ chain_name }) => chain_name === chainName)
        ?.assets?.filter(({ type_asset }) => type_asset !== 'ics20') || []
    );
  };

  const { nativeAssets } = useMemo(() => {
    // @ts-ignore
    const nativeAssets = filterAssets(chainAssets);
    // @ts-ignore
    const ibcAssets = filterAssets(ibcAssetLists);

    return { nativeAssets, ibcAssets };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chainName]);

  const isNativeAsset = ({ denom }: PrettyAsset) => {
    return !!nativeAssets.find((asset) => asset.base === denom);
  };

  return {
    isNativeAsset,
  };
};


import { Asset, AssetList } from '@chain-registry/types';


export const filterAssets = (assetList: AssetList[], chainName: string): Asset[] => {
  return (
    assetList
      .find(({ chain_name }) => chain_name === chainName)
      ?.assets?.filter(({ type_asset }) => type_asset !== 'ics20') || []
  );
};


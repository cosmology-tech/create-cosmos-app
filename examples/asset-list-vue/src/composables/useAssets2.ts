import { chains, assetLists, ibcData } from '@chain-registry/v2'
import { AssetList, Asset } from '@chain-registry/v2-types';
import { Ref } from 'vue'


export const useAssets = (chainName: Ref<string>) => {
  // const filterAssets = (assetList: AssetList[]): Asset[] => {
  //   return (
  //     assetList
  //       .find(({ chainName }) => chainName === chainName)
  //       ?.assets?.filter(({ type_asset }) => type_asset !== 'ics20') || []
  //   );
  // };

  const assets = assetLists.find(asset => asset.chainName === 'osmosis')?.assets || []
  console.log('assets>>', assets)
  return assets
}
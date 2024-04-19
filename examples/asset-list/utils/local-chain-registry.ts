import { assets, chains, ibc } from 'chain-registry/mainnet'
import { Asset, AssetList } from '@chain-registry/types'
import { getNativeAssetLists } from '@chain-registry/utils'

export { assets, chains, ibc }

export const getAssetsByChainName = (chainName: string) => {
  return assets.filter(a => a.chain_name === chainName)
}

export const isNativeAsset = (targetAsset: Asset, chainName: string) => {
  const nativeAssetList: AssetList[] = getNativeAssetLists(chainName, ibc, assets)
  return !!nativeAssetList.flatMap(al => al.assets).find(a => a.base === targetAsset.base)
}

import { assets, chains, ibc } from 'chain-registry'
import { Asset } from '@chain-registry/types'
import { getChainNameByDenom } from '@chain-registry/utils'

export { assets, chains, ibc }

export const getAssetsByChainName = (chainName: string) => {
  return assets.filter(a => a.chain_name === chainName)
}

export const isNativeAsset = (targetAsset: Asset, chainName: string) => {
  const assetsByChain = assets.filter(a => a.chain_name === chainName)
  const chain_name = getChainNameByDenom(assetsByChain, targetAsset.base)
  switch (true) {
    case targetAsset.base.startsWith('factory/'):
      return false;

    case targetAsset.base.startsWith('ft') && chain_name === 'bitsong':
      return false;

    case targetAsset.base.startsWith('erc20/'):
      return true;

    case targetAsset.base.startsWith('ibc/'):
      return false;

    case targetAsset.base.startsWith('cw20:'):
      return true;

    default:
      if (!targetAsset.traces || !targetAsset.traces.length) {
        // asset.type_asset = 'sdk.coin'
        return true;
      }
      return false;
  }
}


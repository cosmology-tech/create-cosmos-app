import { CoinGeckoUSD } from '@/utils/types';
import { AssetList } from '@chain-registry/types';
import { DenomPriceMap } from '@chain-registry/utils';

// put some may have issue function. will put to chain registry later, we will see.

// replace mapCoinGeckoPricesToDenoms in chain-registry, use gecko_id to map denom,  will have duplicate asset , cause original mapCoinGeckoPricesToDenoms function can not use
export const mapCoinGeckoPricesToDenomsM = (assetLists: AssetList[], prices: Record<string, CoinGeckoUSD>): DenomPriceMap => {
  const symbolCoinGeckoIdMap = assetLists.flatMap(a => a.assets).reduce((map: any, asset) => {
    if (asset.coingecko_id) {
      map[asset.symbol] = prices[asset.coingecko_id]
    }
    return map
  }, {})

  const final = assetLists.flatMap(a => a.assets).reduce((map: any, asset) => {
    if (asset.symbol && symbolCoinGeckoIdMap[asset.symbol]) {
      map[asset.base] = symbolCoinGeckoIdMap[asset.symbol].usd
    }
    return map
  }, {})

  return final
}


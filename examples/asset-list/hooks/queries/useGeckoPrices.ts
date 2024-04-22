import { DenomPriceMap, mapCoinGeckoPricesToDenoms } from '@chain-registry/utils';
import { useQuery } from '@tanstack/react-query';
import { handleError } from './useTopTokens';
import { CoinGeckoUSD } from '@/utils/types';
import { assets } from '@/utils/local-chain-registry'

const GECKO_PRICE_QUERY_KEY = 'gecko_prices'

const getGeckoIds = () => {
  const geckoIds: string[] = []
  assets.forEach(assetList => {
    assetList.assets.forEach(asset => {
      if (asset.coingecko_id) {
        geckoIds.push(asset.coingecko_id)
      }
    })
  })
  return geckoIds
}

const fetchPrices = async (
  geckoIds: string[]
): Promise<Record<string, CoinGeckoUSD>> => {
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${geckoIds.join()}&vs_currencies=usd`;

  return fetch(url)
    .then(handleError)
    .then((res) => res.json());
};

export const useGeckoPrices = () => {
  const geckoIds = getGeckoIds()
  return useQuery({
    queryKey: [GECKO_PRICE_QUERY_KEY],
    queryFn: () => fetchPrices(geckoIds),
    select: (geckoPrices): DenomPriceMap => mapCoinGeckoPricesToDenoms(assets, geckoPrices),
    staleTime: Infinity,
  });
};

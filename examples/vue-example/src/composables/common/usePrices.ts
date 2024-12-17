import { Ref, computed } from 'vue'
import { Asset } from '@chain-registry/types';
import { useAssets } from './useAssets';
import { useQuery } from '@tanstack/vue-query';

type CoinGeckoId = string;
type CoinGeckoUSD = { usd: number };
type CoinGeckoUSDResponse = Record<CoinGeckoId, CoinGeckoUSD>;
export type Prices = Record<CoinGeckoId, CoinGeckoUSD['usd']>;

export const handleError = (resp: Response) => {
  if (!resp.ok) throw Error(resp.statusText);
  return resp;
};

const fetchPrices = async (
  geckoIds: string[]
): Promise<CoinGeckoUSDResponse> => {
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${geckoIds.join()}&vs_currencies=usd`;

  return fetch(url)
    .then(handleError)
    .then((res) => res.json());
};

const formatPrices = (
  prices: CoinGeckoUSDResponse,
  assets: Asset[]
): Record<string, number> => {
  return Object.entries(prices).reduce((priceHash, cur) => {
    const denom = assets.find((asset) => asset.coingecko_id === cur[0])!.base;
    return { ...priceHash, [denom]: cur[1].usd };
  }, {});
};

export const usePrices = (chainName: Ref<string>) => {
  const { allAssets } = useAssets(chainName)
  const assetsWithGeckoIds = computed(() => {
    return allAssets.filter((asset) => !!asset?.coingecko_id);
  })

  const geckoIds = computed(() => {
    return assetsWithGeckoIds?.value.map(asset => asset.coingecko_id) as string[]
  })

  const { data, isLoading, error } = useQuery({
    queryKey: ['prices', geckoIds],
    queryFn: () => {
      return fetchPrices(geckoIds.value)
    },
    select: (data) => formatPrices(data, assetsWithGeckoIds.value)
  })

  return {
    prices: data,
    isLoading,
    error
  }
}
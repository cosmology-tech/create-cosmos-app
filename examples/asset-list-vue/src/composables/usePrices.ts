import { Ref, ref, watch, computed } from 'vue'
import { Asset } from '@chain-registry/types';
import { useAssets } from './useAssets';
import { PriceHash } from './useChainUtils'

type CoinGeckoId = string;
type CoinGeckoUSD = { usd: number };
type CoinGeckoUSDResponse = Record<CoinGeckoId, CoinGeckoUSD>;

const getAssetsWithGeckoIds = (assets: Asset[]) => {
  return assets.filter((asset) => !!asset?.coingecko_id);
};

const getGeckoIds = (assets: Asset[]) => {
  return assets.map((asset) => asset.coingecko_id) as string[];
};

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
  const prices = ref<PriceHash>({})
  const geckoIds = computed(() => {
    const assetsWithGeckoIds = getAssetsWithGeckoIds(allAssets);
    return getGeckoIds(assetsWithGeckoIds);
  })

  const _fetchPrices = async (ids: any) => {
    if (ids?.length > 0) {
      const res = await fetchPrices(ids)
      let pcs = formatPrices(res, allAssets);
      prices.value = pcs
    }
  }

  watch(geckoIds, _fetchPrices)
  _fetchPrices(geckoIds.value)

  return prices
}
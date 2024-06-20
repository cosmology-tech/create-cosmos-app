import { Asset } from '@chain-registry/types';
import { useQuery } from '@tanstack/react-query';
import { handleError } from './useTopTokens';
import { assets, asset_lists } from '@/utils/local-chain-registry'
import { mapCoinGeckoPricesToDenoms } from '@chain-registry/utils'
import { CoinGeckoUSD } from '@/utils/types';


type CoinGeckoUSDResponse = Record<string, CoinGeckoUSD>;

const allAssetLists = [...assets, ...asset_lists]

const allAssets = allAssetLists.flatMap(a => a.assets)

const getAssetsWithGeckoIds = (assets: Asset[]) => {
  return assets.filter((asset) => !!asset?.coingecko_id);
};

const getGeckoIds = (assets: Asset[]) => {
  return assets.map((asset) => asset.coingecko_id) as string[];
};

const formatPrices = (
  prices: CoinGeckoUSDResponse,
  assets: Asset[]
): Record<string, number> => {
  return mapCoinGeckoPricesToDenoms(allAssetLists, prices)
};

const fetchPrices = async (
  geckoIds: string[]
): Promise<CoinGeckoUSDResponse> => {
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${geckoIds.join()}&vs_currencies=usd`;

  return fetch(url)
    .then(handleError)
    .then((res) => res.json());
};

export const usePrices = (chainName: string) => {
  const assetsWithGeckoIds = getAssetsWithGeckoIds(allAssets);
  const geckoIds = [...new Set(getGeckoIds(assetsWithGeckoIds))];
  return useQuery({
    queryKey: ['prices', chainName],
    queryFn: () => fetchPrices(geckoIds),
    select: (data) => formatPrices(data, assetsWithGeckoIds),
    staleTime: Infinity,
  });
};

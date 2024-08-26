import { Asset } from '@chain-registry/types';
import { useQuery } from '@tanstack/react-query';
import { useChainUtils } from './useChainUtils';
import { handleError } from './useTopTokens';
import { useSpawnChains } from '../common';
import { DEFAULT_SPAWN_TOKEN_PRICE } from '@/config';

type CoinGeckoId = string;
type CoinGeckoUSD = { usd: number };
type CoinGeckoUSDResponse = Record<CoinGeckoId, CoinGeckoUSD>;

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
  return Object.entries(prices).reduce((priceHash, cur) => {
    const denom = assets.find((asset) => asset.coingecko_id === cur[0])!.base;
    return { ...priceHash, [denom]: cur[1].usd };
  }, {});
};

const fetchPrices = async (
  geckoIds: string[]
): Promise<CoinGeckoUSDResponse> => {
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${geckoIds.join()}&vs_currencies=usd`;

  return fetch(url)
    .then(handleError)
    .then((res) => res.json());
};

export const useChainAssetsPrices = (chainName: string) => {
  const { allAssets, isSpawnChain } = useChainUtils(chainName);
  const { data: spawnData } = useSpawnChains();
  const { assets: spawnAssets } = spawnData ?? {};

  const queryKey = ['useChainAssetsPrices', chainName];

  if (isSpawnChain) {
    return useQuery({
      queryKey,
      queryFn: () => {
        const nativeAsset = spawnAssets?.[0].assets[0]!;
        return { [nativeAsset.base]: DEFAULT_SPAWN_TOKEN_PRICE };
      },
      staleTime: Infinity,
    });
  }

  const assetsWithGeckoIds = getAssetsWithGeckoIds(allAssets);
  const geckoIds = getGeckoIds(assetsWithGeckoIds);

  return useQuery({
    queryKey,
    queryFn: () => fetchPrices(geckoIds),
    select: (data) => formatPrices(data, assetsWithGeckoIds),
    staleTime: Infinity,
  });
};

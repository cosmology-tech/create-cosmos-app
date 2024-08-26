import { assets } from 'chain-registry';
import { useQuery } from '@tanstack/react-query';
import { AssetList } from '@chain-registry/types';
import { useSpawnChains } from '../common';
import { useChainStore } from '@/contexts';
import { DEFAULT_SPAWN_TOKEN_PRICE } from '@/config';

type CoinGeckoId = string;
type CoinGeckoUSD = { usd: number };
type CoinGeckoUSDResponse = Record<CoinGeckoId, CoinGeckoUSD>;
export type Prices = Record<CoinGeckoId, CoinGeckoUSD['usd']>;

const handleError = (resp: Response) => {
  if (!resp.ok) throw Error(resp.statusText);
  return resp;
};

const getGeckoIdsFromAssets = (assets: AssetList[]) => {
  return assets
    .map((asset) => asset.assets[0].coingecko_id)
    .filter(Boolean) as string[];
};

const formatPrices = (
  prices: CoinGeckoUSDResponse,
  assets: AssetList[]
): Prices => {
  return Object.entries(prices).reduce((priceHash, cur) => {
    const assetList = assets.find(
      (asset) => asset.assets[0].coingecko_id === cur[0]
    )!;
    const denom = assetList.assets[0].base;
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

export const useAssetsPrices = () => {
  const { selectedChain } = useChainStore();
  const { data: spawnData } = useSpawnChains();
  const { chains: spawnChains = [], assets: spawnAssets = [] } =
    spawnData ?? {};

  const isSpawnChain = spawnChains.some(
    (chain) => chain.chain_name === selectedChain
  );

  if (isSpawnChain) {
    return useQuery({
      queryKey: ['useAssetsPrices', selectedChain],
      queryFn: () => {
        const nativeAsset = spawnAssets?.[0].assets[0]!;
        return { [nativeAsset.base]: DEFAULT_SPAWN_TOKEN_PRICE };
      },
      staleTime: Infinity,
    });
  }

  const geckoIds = getGeckoIdsFromAssets(assets);

  return useQuery({
    queryKey: ['useAssetsPrices'],
    queryFn: () => fetchPrices(geckoIds),
    select: (data) => formatPrices(data, assets),
    staleTime: Infinity,
  });
};

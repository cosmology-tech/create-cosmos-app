import { useQuery } from '@tanstack/react-query';
import { STARGAZE_COINGECKO_ID } from '@/config';

export type CoinGeckoId = string;
export type CoinGeckoPrice = { usd: number };
export type CoinGeckoResponse = Record<CoinGeckoId, CoinGeckoPrice>;
// What CoinGeckoResponse looks like:
// {
//   "agoric": {
//     "usd": 0.088756
//   },
//   "cosmos": {
//     "usd": 6.22
//   },
//   "white-whale": {
//     "usd": 0.0110436
//   }
// }

async function fetchPrices(coinGeckoIds: CoinGeckoId[]): Promise<CoinGeckoResponse> {
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinGeckoIds.join()}&vs_currencies=usd`;
  return await fetch(url).then((res) => res.json());
}

export function useStarsPrice() {
  const query = useQuery({
    queryKey: ['starsPrice'],
    queryFn: () => fetchPrices([STARGAZE_COINGECKO_ID]),
    staleTime: Infinity,
  });

  return {
    query,
    value: query.data?.[STARGAZE_COINGECKO_ID].usd,
    price: query.data?.[STARGAZE_COINGECKO_ID].usd
  }
}
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { PriceHash } from '@osmonauts/math/dist/types';
import { Osmosis } from '@/config';

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

async function fetchPrices(
  coinGeckoIds: CoinGeckoId[]
): Promise<CoinGeckoResponse> {
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinGeckoIds.join()}&vs_currencies=usd`;
  return await fetch(url).then((res) => res.json());
}

function toPriceHash(prices: CoinGeckoResponse = {}): PriceHash {
  return Object.entries(prices).reduce(
    (result, [id, price]) => ({
      ...result,
      [Osmosis.Assets.CoinGeckoIdToAsset[id]!.base]: price.usd,
    }),
    {}
  );
}

export function usePrices() {
  const query = useQuery({
    queryKey: ['prices'],
    queryFn: () => fetchPrices(Osmosis.Assets.CoinGeckoIds),
    staleTime: Infinity,
  });

  return { query, ...toPriceHash(query.data) } as PriceHash & {
    query: UseQueryResult<CoinGeckoResponse>;
  };
}

// Waht prices: PriceHash looks like:
// {
//   "ibc/2DA9C149E9AD2BD27FEFA635458FB37093C256C1A940392634A16BEA45262604": 0.089011,
//   "ibc/BB0AFE2AFBD6E883690DAE4B9168EAC2B306BCC9C9292DACBB4152BBB08DB25F": 0.01194281,
//   ...
//   "uion": 75.55,
//   "uosmo": 0.228555
// }

import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { PriceHash } from "@chain-registry/utils";
import { Asset } from "@chain-registry/types";

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
  coinGeckoIds: CoinGeckoId[],
): Promise<CoinGeckoResponse> {
  const url =
    `https://api.coingecko.com/api/v3/simple/price?ids=${coinGeckoIds.join()}&vs_currencies=usd`;
  return await fetch(url).then((res) => res.json());
}

function toPriceHash(prices: CoinGeckoResponse = {}): PriceHash {
  return Object.entries(prices).reduce((result, [id, price]) => ({
    ...result,
    [id]: price.usd,
  }), {});
}

export function usePrices(assets: Asset[] = []) {
  const query = useQuery({
    queryKey: ["prices"],
    queryFn: () =>
      fetchPrices(
        assets.map((asset) => asset.coingecko_id).filter(
          Boolean,
        ) as CoinGeckoId[],
      ),
    staleTime: Infinity,
  });

  return { query, ...toPriceHash(query.data) } as PriceHash & {
    query: UseQueryResult<CoinGeckoResponse>;
  };
}

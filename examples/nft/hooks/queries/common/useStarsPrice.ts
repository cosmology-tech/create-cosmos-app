import { useQuery } from '@tanstack/react-query';
import { coin } from '@/config';

type CoinGeckoUSDResponse = Record<string, { usd: number }>;

const handleError = (resp: Response) => {
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

export const useStarsPrice = () => {
  const starsGeckoId = coin?.coingecko_id || 'stargaze';

  const priceQuery = useQuery({
    queryKey: ['starsPrice'],
    queryFn: () => fetchPrices([starsGeckoId]),
    select: (data) => data[starsGeckoId].usd,
    staleTime: Infinity,
  });

  return {
    starsPrice: priceQuery.data,
    isFetchingPrice: priceQuery.isFetching,
  };
};

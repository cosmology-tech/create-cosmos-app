type CoinGeckoId = string;
type CoinGeckoUSD = { usd: number };
type CoinGeckoUSDResponse = Record<CoinGeckoId, CoinGeckoUSD>;

export const handleError = (resp: Response) => {
  if (!resp.ok) throw Error(resp.statusText);
  return resp;
};

export const getPrices = async (
  geckoIds: string[]
): Promise<CoinGeckoUSDResponse> => {
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${geckoIds.join()}&vs_currencies=usd`;

  return fetch(url)
    .then(handleError)
    .then((res) => res.json());
};

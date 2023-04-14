export type Token = {
  price: number;
  denom: string;
  symbol: string;
  liquidity: number;
  volume_24h: number;
  volume_24h_change: number;
  name: string;
  price_24h_change: number;
  price_7d_change: number;
  exponent: number;
  display: string;
};

export const handleError = (resp: Response) => {
  if (!resp.ok) throw Error(resp.statusText);
  return resp;
};

export const getTokens = async (): Promise<Token[]> => {
  const url = 'https://api-osmosis.imperator.co/tokens/v2/all';
  return fetch(url)
    .then(handleError)
    .then((res) => res.json());
};

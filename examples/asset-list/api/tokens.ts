import { Token } from '../components';

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

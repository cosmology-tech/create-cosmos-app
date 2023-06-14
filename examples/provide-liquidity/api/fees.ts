import { Fee } from '../components';
import { handleError } from './tokens';

export const getFees = async (): Promise<Fee[]> => {
  const url = 'https://api-osmosis.imperator.co/fees/v1/pools';
  return fetch(url)
    .then(handleError)
    .then((res) => res.json())
    .then((res) => res.data);
};

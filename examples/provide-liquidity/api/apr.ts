import { handleError } from './tokens';

export const getSuperfluidApr = async (): Promise<number> => {
  const url = 'https://api-osmosis.imperator.co/apr/v2/all';
  return fetch(url)
    .then(handleError)
    .then((res) => res.json())
    .then((res) => {
      const superfluidApr = res
        .find((apr: { apr_list: any[] }) =>
          apr.apr_list.find((a) => a.symbol === 'ECH')
        )
        .apr_list.find(
          (a: { symbol: string }) => a.symbol === 'ECH'
        ).apr_superfluid;

      return superfluidApr;
    });
};

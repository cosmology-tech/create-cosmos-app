import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { cosmos } from 'interchain-query';
import BigNumber from 'bignumber.js';

import { extendValidators, getLogoUrls, parseValidators } from '@/utils';
import { useQueryHooks } from './useQueryHooks';

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

type UseValidatorsConfig = {
  fetchLogos?: boolean;
};

export const useValidators = (
  chainName: string,
  { fetchLogos = true }: UseValidatorsConfig = {}
) => {
  const {
    cosmos: cosmosQuery,
    isReady: isQueryHooksReady,
    isFetching: isQueryHooksFetching,
  } = useQueryHooks(chainName);

  const validatorsQuery = cosmosQuery.staking.v1beta1.useValidators({
    request: {
      status: cosmos.staking.v1beta1.bondStatusToJSON(
        cosmos.staking.v1beta1.BondStatus.BOND_STATUS_BONDED
      ),
      pagination: {
        key: new Uint8Array(),
        offset: 0n,
        limit: 500n,
        countTotal: true,
        reverse: false,
      },
    },
    options: {
      enabled: isQueryHooksReady,
      select: ({ validators }) => {
        const sorted = validators.sort((a, b) =>
          new BigNumber(b.tokens).minus(a.tokens).toNumber()
        );
        return parseValidators(sorted);
      },
      queryKeyHashFn: (queryKey) => {
        return JSON.stringify([...queryKey, chainName]);
      },
      staleTime: Infinity,
    },
  });

  const validatorLogosQuery = useQuery({
    queryKey: ['validatorLogos', chainName],
    queryFn: () => getLogoUrls(validatorsQuery.data || [], chainName),
    enabled: !!validatorsQuery.data && fetchLogos,
    staleTime: Infinity,
  });

  const allQueries = {
    validators: validatorsQuery,
    validatorLogos: validatorLogosQuery,
  };

  const queriesToRefetch = [allQueries.validators];

  const refetch = () => {
    queriesToRefetch.forEach((query) => query.refetch());
  };

  const isInitialFetching = Object.values(allQueries).some(
    ({ isFetching }) => isFetching
  );

  const isRefetching = Object.values(allQueries).some(
    ({ isRefetching }) => isRefetching
  );

  const isLoading = isQueryHooksFetching || isInitialFetching || isRefetching;

  type AllQueries = typeof allQueries;

  type QueriesData = {
    [Key in keyof AllQueries]: NonNullable<AllQueries[Key]['data']>;
  };

  const data = useMemo(() => {
    if (isLoading) return;

    const queriesData = Object.fromEntries(
      Object.entries(allQueries).map(([key, query]) => [key, query.data])
    ) as QueriesData;

    const { validators, validatorLogos } = queriesData;

    const extendedValidators = extendValidators({
      validators,
      logos: validatorLogos,
    });

    return extendedValidators;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return { data, isLoading, refetch };
};

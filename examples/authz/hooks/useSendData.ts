import { useMemo } from 'react';

import { usePrices } from './usePrices';
import { shiftDigits } from '@/utils';
import { useAuthzContext } from '@/context';
import { getCoin, getExponent } from '@/configs';
import { useQueryHooks } from './useQueryHooks';
import { useGetBalance } from 'interchain-react/cosmos/bank/v1beta1/query.rpc.func';
import { defaultContext } from '@tanstack/react-query';

export const useSendData = (chainName: string) => {
  const { permission } = useAuthzContext();

  const address = permission?.granter;

  const coin = getCoin(chainName);
  const exp = getExponent(chainName);

  const {
    isReady: isQueryHooksReady,
    isFetching: isQueryHooksFetching,
    rpcEndpoint,
  } = useQueryHooks(chainName);

  const balanceQuery = useGetBalance({
    request: {
      address: address || '',
      denom: coin.base,
    },
    options: {
      context: defaultContext,
      enabled: isQueryHooksReady && !!address,
      select: ({ balance }) => shiftDigits(balance?.amount || '0', -exp),
      staleTime: 0,
    },
    clientResolver: rpcEndpoint,
  });

  const pricesQuery = usePrices();

  const allQueries = {
    prices: pricesQuery,
    balance: balanceQuery,
  };

  const updatableQueries = [allQueries.balance];

  const refetch = () => {
    updatableQueries.forEach((query) => query.refetch());
  };

  const isInitialFetching = Object.values(allQueries).some(
    ({ isLoading }) => isLoading
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

    return Object.fromEntries(
      Object.entries(allQueries).map(([key, query]) => [key, query.data])
    ) as QueriesData;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return { data, isLoading, refetch };
};

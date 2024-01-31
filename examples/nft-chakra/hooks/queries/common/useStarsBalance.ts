import { useChain } from '@cosmos-kit/react';
import { useQuery } from '@tanstack/react-query';
import { useRpcQueryClient } from './useRpcQueryClient';
import { coin, defaultChainName, exponent } from '@/config';
import { toDisplayAmount } from '@/utils';

export const useStarsBalance = () => {
  const { address } = useChain(defaultChainName);

  const { rpcQueryClient, isReady, isFetching } = useRpcQueryClient();

  const balanceQuery = useQuery({
    queryKey: ['balance', address, coin.base],
    queryFn: () =>
      rpcQueryClient?.cosmos.bank.v1beta1.balance({
        address: address || '',
        denom: coin.base,
      }),
    enabled: isReady && !!address,
    select: (data) => data?.balance,
  });

  return {
    starsBalance: toDisplayAmount(balanceQuery.data?.amount, exponent),
    isFetchingBalance: isFetching || balanceQuery.isFetching,
    refetchBalance: balanceQuery.refetch,
  };
};
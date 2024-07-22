import { Coin } from '@cosmjs/stargate';
import { useChain } from '@cosmos-kit/react';
import { UseQueryResult } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useQueryHooks } from './useQueryHooks';

export const useBalance = (chainName: string, enabled: boolean = true) => {
  const { address, assets } = useChain(chainName);

  const { cosmosQuery, isReady, isFetching } = useQueryHooks(
    chainName,
    'balance'
  );

  let balanceQueries: UseQueryResult<Coin>[] = [];

  for (const asset of assets?.assets || []) {
    const balanceQuery: UseQueryResult<Coin> =
      cosmosQuery.bank.v1beta1.useBalance({
        request: {
          denom: asset.base,
          address: address || '',
        },
        options: {
          enabled: isReady && enabled,
          select: ({ balance }) => balance,
        },
      });
    balanceQueries.push(balanceQuery)
  }

  useEffect(() => {
    return () => {
      for (const balanceQuery of balanceQueries) {
        balanceQuery.remove()
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    balance: balanceQueries[0].data,
    isLoading: isFetching || !!balanceQueries.find(item => item.isFetching),
    balances: balanceQueries.map(item => item.data)
  };
};

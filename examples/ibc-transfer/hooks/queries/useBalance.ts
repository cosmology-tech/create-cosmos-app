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

  const balanceQuery: UseQueryResult<Coin> =
    cosmosQuery.bank.v1beta1.useBalance({
      request: {
        denom: assets!.assets[0]!.base,
        address: address || '',
      },
      options: {
        enabled: isReady && enabled,
        select: ({ balance }) => balance,
      },
    });

  useEffect(() => {
    return () => {
      balanceQuery.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    balance: balanceQuery.data,
    isLoading: isFetching || balanceQuery.isFetching,
  };
};

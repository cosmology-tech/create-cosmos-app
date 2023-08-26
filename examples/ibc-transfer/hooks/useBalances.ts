import { useChain } from '@cosmos-kit/react';
import { prettyBalance } from '@/utils';
import { useQueryHooks } from './useQueryHooks';
import store from '@/store';

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

export const useBalances = () => {
  const chainName = store.sourceChain;
  const { address } = useChain(chainName);
  const { cosmosQuery, isReady, isFetching } = useQueryHooks(chainName);

  const balancesQuery = cosmosQuery.bank.v1beta1.useAllBalances({
    request: {
      address: address || '',
      pagination: {
        key: new Uint8Array(),
        offset: 0n,
        limit: 100n,
        countTotal: true,
        reverse: false,
      },
    },
    options: {
      enabled: isReady,
      staleTime: Infinity,
      select: ({ balances }) =>
        balances
          .filter(({ denom }) => !denom.startsWith('gamm'))
          .map((balance) => prettyBalance(chainName, balance)),
    },
  });

  return {
    balances: balancesQuery.data,
    refetch: balancesQuery.refetch,
    isLoading: isFetching || balancesQuery.isFetching,
  };
};

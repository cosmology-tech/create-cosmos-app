import { useChain } from '@cosmos-kit/react';
import { useQuery } from '@tanstack/react-query';
import { display } from '@/utils';
import { CHAIN_NAME, STARGAZE_TOKEN_DENOM } from '@/config';
import { useRpcQueryClient } from '.';

export function useStarsBalance() {
  const { address } = useChain(CHAIN_NAME);
  const { client, isReady, isFetching } = useRpcQueryClient();

  const query = useQuery({
    queryKey: ['balance', address, STARGAZE_TOKEN_DENOM],
    queryFn: () =>
      client?.cosmos.bank.v1beta1.balance({
        address: address || '',
        denom: STARGAZE_TOKEN_DENOM,
      }),
    enabled: isReady && !isFetching && Boolean(address)
  });

  const coin = query.data?.balance || { amount: '0', denom: STARGAZE_TOKEN_DENOM }

  return { ...coin, query, display: display(coin.amount) }
}
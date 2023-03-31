import { useRequest } from './useRequest';
import { osmosis } from 'osmojs';
import { QueryAllBalancesRequest } from 'osmojs/types/codegen/cosmos/bank/v1beta1/query';
import { useEffect } from 'react';
import { useClient } from './useClient';

type Client = Awaited<
  ReturnType<typeof osmosis.ClientFactory.createRPCQueryClient>
>;

export const useOsmosisClient = () => {
  const { getClient } = useClient();
  const { data: client, request: fetchClient } = useRequest<Client>(getClient);

  useEffect(() => {
    fetchClient();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getBalances = async (arg: QueryAllBalancesRequest) => {
    if (!client) return;
    const { balances } = await client.cosmos.bank.v1beta1.allBalances(arg);
    return balances;
  };

  return { getBalances };
};

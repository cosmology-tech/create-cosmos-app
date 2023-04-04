import { osmosis } from 'osmojs';
import {
  QueryAllBalancesRequest,
  QueryBalanceRequest,
} from 'osmojs/types/codegen/cosmos/bank/v1beta1/query';
import { useState } from 'react';
import { useClient } from './useClient';

type Client = Awaited<
  ReturnType<typeof osmosis.ClientFactory.createRPCQueryClient>
>;

export const useOsmosisClient = (chainName: string) => {
  const { getClient: getClientRequest } = useClient(chainName);
  const [osmosisClient, setOsmosisClient] = useState<Client | null>(null);

  const getClient = async () => {
    if (osmosisClient) return osmosisClient;

    console.log('get new Client...');
    const newClient = await getClientRequest();
    setOsmosisClient(newClient);
    return newClient;
  };

  const getAllBalances = async (arg: QueryAllBalancesRequest) => {
    const client = await getClient();
    const { balances } = await client.cosmos.bank.v1beta1.allBalances(arg);
    return balances;
  };

  const getBalance = async (arg: QueryBalanceRequest) => {
    const client = await getClient();
    const { balance } = await client.cosmos.bank.v1beta1.balance(arg);
    return balance;
  };

  return { getAllBalances, getBalance };
};

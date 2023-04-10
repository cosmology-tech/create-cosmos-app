import { PriceHash } from './../components/types';
import Long from 'long';
import { osmosis } from 'osmojs';
import {
  QueryAllBalancesRequest,
  QueryBalanceRequest,
} from 'osmojs/types/codegen/cosmos/bank/v1beta1/query';
import { Pool } from 'osmojs/types/codegen/osmosis/gamm/pool-models/balancer/balancerPool';
import { useRef, useState } from 'react';
import { useClient } from './useClient';
import { AccountLockedCoinsRequest } from 'osmojs/types/codegen/osmosis/lockup/query';
import { QueryDelegatorDelegationsRequest } from 'osmojs/types/codegen/cosmos/staking/v1beta1/query';

type Client = Awaited<
  ReturnType<typeof osmosis.ClientFactory.createRPCQueryClient>
>;

const removeUnsupportedPools = ({ poolAssets }: Pool, prices: PriceHash) => {
  return !poolAssets.some(
    ({ token }) => token!.denom.startsWith('gamm/pool') || !prices[token!.denom]
  );
};

export const useOsmosisClient = (chainName: string) => {
  const { getClient: getClientRequest } = useClient(chainName);
  const [osmosisClient, setOsmosisClient] = useState<Client | null>(null);
  const prevChainName = useRef(chainName);

  const getClient = async () => {
    if (chainName === prevChainName.current && osmosisClient)
      return osmosisClient;

    prevChainName.current = chainName;
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

  const getLockedCoins = async (arg: AccountLockedCoinsRequest) => {
    const client = await getClient();
    const { coins: lockedCoins } =
      await client.osmosis.lockup.accountLockedCoins(arg);
    return lockedCoins;
  };

  const getDelegations = async (arg: QueryDelegatorDelegationsRequest) => {
    const client = await getClient();
    const { delegationResponses } =
      await client.cosmos.staking.v1beta1.delegatorDelegations(arg);
    return delegationResponses;
  };

  const getPoolsByIds = async (poolIds: string[], prices: PriceHash) => {
    const client = await getClient();
    const getPoolRequests = poolIds.map((poolId) =>
      client.osmosis.gamm.v1beta1.pool({
        poolId: Long.fromString(poolId),
      })
    );
    const data = await Promise.all(getPoolRequests);
    const pools = data
      .filter(
        ({ pool }) => pool?.value && !pool?.typeUrl.includes('stableswap')
      )
      .map(({ pool }) => osmosis.gamm.v1beta1.Pool.decode(pool!.value))
      .filter((pool) => removeUnsupportedPools(pool, prices));
    return pools;
  };

  return {
    getAllBalances,
    getBalance,
    getPoolsByIds,
    getLockedCoins,
    getDelegations,
  };
};

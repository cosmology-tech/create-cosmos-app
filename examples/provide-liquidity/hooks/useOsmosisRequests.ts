import { useRequest } from './useRequest';
import Long from 'long';
import { osmosis } from 'osmojs';
import { QueryAllBalancesRequest } from 'osmojs/types/codegen/cosmos/bank/v1beta1/query';
import { Pool } from 'osmojs/types/codegen/osmosis/gamm/pool-models/balancer/balancerPool';
import { useRef, useState } from 'react';
import { useClient } from './useClient';
import {
  AccountLockedCoinsRequest,
  AccountLockedLongerDurationRequest,
} from 'osmojs/types/codegen/osmosis/lockup/query';
import { QueryDelegatorDelegationsRequest } from 'osmojs/types/codegen/cosmos/staking/v1beta1/query';
import { PriceHash } from '../utils/types';
import { SuperfluidDelegationsByDelegatorRequest } from 'osmojs/types/codegen/osmosis/superfluid/query';
import { ActiveGaugesPerDenomRequest } from 'osmojs/types/codegen/osmosis/incentives/query';
import {
  assets as nativeAssets,
  asset_list as osmosisIbcAssets,
} from '@chain-registry/osmosis';

type Client = Awaited<
  ReturnType<typeof osmosis.ClientFactory.createRPCQueryClient>
>;

const osmosisAssets = [...nativeAssets.assets, ...osmosisIbcAssets.assets];

const removeUnsupportedPools = ({ poolAssets }: Pool, prices: PriceHash) => {
  return poolAssets.every(
    ({ token }) =>
      prices[token!.denom] &&
      !token!.denom.startsWith('gamm/pool') &&
      osmosisAssets.find((asset) => asset.base === token?.denom)
  );
};

export const useOsmosisRequests = (chainName: string) => {
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

  const getDelegations = async (arg: QueryDelegatorDelegationsRequest) => {
    const client = await getClient();
    const { delegationResponses } =
      await client.cosmos.staking.v1beta1.delegatorDelegations(arg);
    return delegationResponses;
  };

  const getSuperfluidAssets = async () => {
    const client = await getClient();
    const { assets: superfluidAssets } =
      await client.osmosis.superfluid.allAssets();
    return superfluidAssets;
  };

  const getLockedCoins = async (arg: AccountLockedCoinsRequest) => {
    const client = await getClient();
    const { coins: lockedCoins } =
      await client.osmosis.lockup.accountLockedCoins(arg);
    return lockedCoins;
  };

  const getLockableDurations = async () => {
    const client = await getClient();
    const { lockableDurations } =
      await client.osmosis.incentives.lockableDurations();
    return lockableDurations;
  };

  const getLocks = async (arg: AccountLockedLongerDurationRequest) => {
    const client = await getClient();
    const { locks } = await client.osmosis.lockup.accountLockedLongerDuration(
      arg
    );
    return locks;
  };

  const getSuperfluidDelegations = async (
    arg: SuperfluidDelegationsByDelegatorRequest
  ) => {
    const client = await getClient();
    const { totalDelegatedCoins } =
      await client.osmosis.superfluid.superfluidDelegationsByDelegator(arg);
    return totalDelegatedCoins;
  };

  const getAllPools = async (prices: PriceHash) => {
    const client = await getClient();
    const { pools } = await client.osmosis.gamm.v1beta1.pools({
      pagination: {
        key: new Uint8Array(),
        offset: Long.fromNumber(0),
        limit: Long.fromNumber(2000),
        countTotal: false,
        reverse: false,
      },
    });
    const formattedPools = pools
      .filter(({ typeUrl }) => !typeUrl.includes('stableswap'))
      .map(({ value }) => osmosis.gamm.v1beta1.Pool.decode(value))
      .filter((pool) => removeUnsupportedPools(pool, prices));
    return formattedPools;
  };

  const getActiveGauges = async (arg: ActiveGaugesPerDenomRequest) => {
    const client = await getClient();
    const res = await client.osmosis.incentives.activeGaugesPerDenom(arg);
    return res;
  };

  return {
    getAllPools: useRequest<typeof getAllPools>(getAllPools),
    getLockedCoins: useRequest<typeof getLockedCoins>(getLockedCoins),
    getDelegations: useRequest<typeof getDelegations>(getDelegations),
    getAllBalances: useRequest<typeof getAllBalances>(getAllBalances),
    getActiveGauges,
    getSuperfluidAssets:
      useRequest<typeof getSuperfluidAssets>(getSuperfluidAssets),
    getLockableDurations:
      useRequest<typeof getLockableDurations>(getLockableDurations),
    getLocks: useRequest<typeof getLocks>(getLocks),
    getSuperfluidDelegations: useRequest<typeof getSuperfluidDelegations>(
      getSuperfluidDelegations
    ),
  };
};

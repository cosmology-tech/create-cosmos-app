import { useEffect, useMemo } from 'react';
import { useChain } from '@cosmos-kit/react';
import BigNumber from 'bignumber.js';
import {
  cosmos,
  useRpcClient,
  useRpcEndpoint,
  createRpcQueryHooks,
} from 'interchain-query';

import { usePrices } from './usePrices';
import {
  shiftDigits,
  calcTotalDelegation,
  extendValidators,
  parseAnnualProvisions,
  parseDelegations,
  parseRewards,
  parseUnbondingDays,
  parseValidators,
  getCoin,
  getExponent,
} from '@/utils';

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

export const useStakingData = (chainName: string) => {
  const { address, getRpcEndpoint } = useChain(chainName);

  const coin = getCoin(chainName);
  const exp = getExponent(chainName);

  const rpcEndpointQuery = useRpcEndpoint({
    getter: getRpcEndpoint,
    options: {
      // enabled: !!address,
      staleTime: Infinity,
      // queryKeyHashFn: (queryKey) => {
      //   return JSON.stringify([...queryKey, chainName]);
      // },
      queryKey: ['useRpcEndpoint', chainName],
    },
  });

  const rpcClientQuery = useRpcClient({
    rpcEndpoint: rpcEndpointQuery.data || '',
    options: {
      enabled: !!rpcEndpointQuery.data,
      staleTime: Infinity,
      queryKey: ['useRpcClient', rpcEndpointQuery.data],
    },
  });

  const { cosmos: queryHooks } = createRpcQueryHooks({
    rpc: rpcClientQuery.data,
  });

  const isQueryEnabled = !!address && !!rpcClientQuery.data;

  const balanceQuery = queryHooks.bank.v1beta1.useBalance({
    request: {
      address: address || '',
      denom: coin.base,
    },
    options: {
      queryKey: ['useBalance', address, coin.base],
      select: ({ balance }) => shiftDigits(balance?.amount || '0', -exp),
      enabled: isQueryEnabled,
    },
  });

  const myValidatorsQuery = queryHooks.staking.v1beta1.useDelegatorValidators({
    request: {
      delegatorAddr: address || '',
      pagination: undefined,
    },
    options: {
      queryKey: ['useDelegatorValidators', address],
      select: ({ validators }) => parseValidators(validators),
      enabled: isQueryEnabled,
    },
  });

  const rewardsQuery =
    queryHooks.distribution.v1beta1.useDelegationTotalRewards({
      request: {
        delegatorAddress: address || '',
      },
      options: {
        queryKey: ['useDelegationTotalRewards', address],
        select: (data) => parseRewards(data, coin.base, -exp),
        enabled: isQueryEnabled,
      },
    });

  const validatorsQuery = queryHooks.staking.v1beta1.useValidators({
    request: {
      status: cosmos.staking.v1beta1.bondStatusToJSON(
        cosmos.staking.v1beta1.BondStatus.BOND_STATUS_BONDED
      ),
      pagination: {
        key: new Uint8Array(),
        offset: 0n,
        limit: 200n,
        countTotal: true,
        reverse: false,
      },
    },
    options: {
      queryKey: ['useValidators', chainName],
      select: ({ validators }) => {
        const sorted = validators.sort((a, b) =>
          new BigNumber(b.tokens).minus(a.tokens).toNumber()
        );
        return parseValidators(sorted);
      },
      enabled: isQueryEnabled,
    },
  });

  const delegationsQuery = queryHooks.staking.v1beta1.useDelegatorDelegations({
    request: {
      delegatorAddr: address || '',
      pagination: {
        key: new Uint8Array(),
        offset: 0n,
        limit: 100n,
        countTotal: true,
        reverse: false,
      },
    },
    options: {
      queryKey: ['useDelegatorDelegations', address],
      select: ({ delegationResponses }) =>
        parseDelegations(delegationResponses, -exp),
      enabled: isQueryEnabled,
    },
  });

  const unbondingDaysQuery = queryHooks.staking.v1beta1.useParams({
    options: {
      queryKey: ['staking', 'useParams', chainName],
      select: ({ params }) => parseUnbondingDays(params),
      enabled: isQueryEnabled,
    },
  });

  const annualProvisionsQuery = queryHooks.mint.v1beta1.useAnnualProvisions({
    options: {
      queryKey: ['useAnnualProvisions', chainName],
      select: parseAnnualProvisions,
      enabled: isQueryEnabled,
      retry: false,
    },
  });

  const poolQuery = queryHooks.staking.v1beta1.usePool({
    options: {
      queryKey: ['usePool', chainName],
      select: ({ pool }) => pool,
      enabled: isQueryEnabled,
    },
  });

  const communityTaxQuery = queryHooks.distribution.v1beta1.useParams({
    options: {
      queryKey: ['distribution', 'useParams', chainName],
      select: ({ params }) => shiftDigits(params?.communityTax || '0', -18),
      enabled: isQueryEnabled,
    },
  });

  const pricesQuery = usePrices();

  const allQueries = {
    balance: balanceQuery,
    myValidators: myValidatorsQuery,
    rewards: rewardsQuery,
    allValidators: validatorsQuery,
    delegations: delegationsQuery,
    unbondingDays: unbondingDaysQuery,
    annualProvisions: annualProvisionsQuery,
    pool: poolQuery,
    communityTax: communityTaxQuery,
    prices: pricesQuery,
  };

  // const queriesWithUnchangingKeys = [
  //   allQueries.unbondingDays,
  //   allQueries.annualProvisions,
  //   allQueries.pool,
  //   allQueries.communityTax,
  //   allQueries.allValidators,
  // ];

  const updatableQueriesAfterMutation = [
    allQueries.balance,
    allQueries.myValidators,
    allQueries.rewards,
    allQueries.allValidators,
    allQueries.delegations,
  ];

  // useEffect(() => {
  //   queriesWithUnchangingKeys.forEach((query) => query.remove());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [chainName]);

  const isInitialFetching = Object.values(allQueries).some(
    ({ isLoading }) => isLoading
  );

  const isRefetching = Object.values(allQueries).some(
    ({ isRefetching }) => isRefetching
  );

  const isLoading = isInitialFetching || isRefetching;

  type AllQueries = typeof allQueries;

  type QueriesData = {
    [Key in keyof AllQueries]: NonNullable<AllQueries[Key]['data']>;
  };

  const data = useMemo(() => {
    if (isLoading) return;

    const queriesData = Object.fromEntries(
      Object.entries(allQueries).map(([key, query]) => [key, query.data])
    ) as QueriesData;

    const {
      allValidators,
      delegations,
      rewards,
      myValidators,
      annualProvisions,
      communityTax,
      pool,
    } = queriesData;

    const chainMetadata = { annualProvisions, communityTax, pool };

    const extendedAllValidators = extendValidators(
      allValidators,
      delegations,
      rewards?.byValidators,
      chainMetadata
    );

    const extendedMyValidators = extendValidators(
      myValidators,
      delegations,
      rewards?.byValidators,
      chainMetadata
    );

    const totalDelegated = calcTotalDelegation(delegations);

    return {
      ...queriesData,
      allValidators: extendedAllValidators,
      myValidators: extendedMyValidators,
      totalDelegated,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const refetch = () => {
    updatableQueriesAfterMutation.forEach((query) => query.refetch());
  };

  return { data, isLoading, refetch };
};

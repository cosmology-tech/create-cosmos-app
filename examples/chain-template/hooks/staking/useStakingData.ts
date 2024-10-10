import { useEffect, useMemo } from 'react';
import { useChain } from '@cosmos-kit/react';
import BigNumber from 'bignumber.js';
import {
  cosmos,
  useRpcClient,
  useRpcEndpoint,
  createRpcQueryHooks,
} from 'interchain-query';

import { useAssetsPrices } from './useAssetsPrices';
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
      enabled: !!address,
      staleTime: Infinity,
      queryKeyHashFn: (queryKey) => {
        return JSON.stringify([...queryKey, chainName]);
      },
    },
  });

  const rpcClientQuery = useRpcClient({
    rpcEndpoint: rpcEndpointQuery.data || '',
    options: {
      enabled: !!address && !!rpcEndpointQuery.data,
      staleTime: Infinity,
    },
  });

  const { cosmos: cosmosQuery } = createRpcQueryHooks({
    rpc: rpcClientQuery.data,
  });

  const isDataQueryEnabled = !!address && !!rpcClientQuery.data;

  const balanceQuery = cosmosQuery.bank.v1beta1.useBalance({
    request: {
      address: address || '',
      denom: coin.base,
    },
    options: {
      enabled: isDataQueryEnabled,
      select: ({ balance }) => shiftDigits(balance?.amount || '0', -exp),
      refetchOnMount: 'always',
    },
  });

  const myValidatorsQuery = cosmosQuery.staking.v1beta1.useDelegatorValidators({
    request: {
      delegatorAddr: address || '',
      pagination: undefined,
    },
    options: {
      enabled: isDataQueryEnabled,
      select: ({ validators }) => parseValidators(validators),
    },
  });

  const rewardsQuery =
    cosmosQuery.distribution.v1beta1.useDelegationTotalRewards({
      request: {
        delegatorAddress: address || '',
      },
      options: {
        enabled: isDataQueryEnabled,
        select: (data) => parseRewards(data, coin.base, -exp),
      },
    });

  const validatorsQuery = cosmosQuery.staking.v1beta1.useValidators({
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
      enabled: isDataQueryEnabled,
      select: ({ validators }) => {
        const sorted = validators.sort((a, b) =>
          new BigNumber(b.tokens).minus(a.tokens).toNumber()
        );
        return parseValidators(sorted);
      },
    },
  });

  const delegationsQuery = cosmosQuery.staking.v1beta1.useDelegatorDelegations({
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
      enabled: isDataQueryEnabled,
      select: ({ delegationResponses }) =>
        parseDelegations(delegationResponses, -exp),
    },
  });

  const unbondingDaysQuery = cosmosQuery.staking.v1beta1.useParams({
    options: {
      enabled: isDataQueryEnabled,
      select: ({ params }) => parseUnbondingDays(params),
    },
  });

  const annualProvisionsQuery = cosmosQuery.mint.v1beta1.useAnnualProvisions({
    options: {
      enabled: isDataQueryEnabled,
      select: parseAnnualProvisions,
      retry: false,
    },
  });

  const poolQuery = cosmosQuery.staking.v1beta1.usePool({
    options: {
      enabled: isDataQueryEnabled,
      select: ({ pool }) => pool,
    },
  });

  const communityTaxQuery = cosmosQuery.distribution.v1beta1.useParams({
    options: {
      enabled: isDataQueryEnabled,
      select: ({ params }) => shiftDigits(params?.communityTax || '0', -18),
    },
  });

  const pricesQuery = useAssetsPrices();

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

  const queriesWithUnchangingKeys = [
    allQueries.unbondingDays,
    allQueries.annualProvisions,
    allQueries.pool,
    allQueries.communityTax,
    allQueries.allValidators,
  ];

  const updatableQueriesAfterMutation = [
    allQueries.balance,
    allQueries.myValidators,
    allQueries.rewards,
    allQueries.allValidators,
    allQueries.delegations,
  ];

  useEffect(() => {
    queriesWithUnchangingKeys.forEach((query) => query.remove());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chainName]);

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

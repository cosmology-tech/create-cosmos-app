import { useEffect, useMemo, useState } from 'react';
import { defaultContext, useQueries } from '@tanstack/react-query';
import { ProposalStatus } from 'interchain-react/cosmos/gov/v1beta1/gov';

import { paginate, parseQuorum, processProposals } from '@/utils';
import { useQueryHooks } from './useQueryHooks';
import { useAuthzContext } from '@/context';

import {
  useGetProposals,
  useGetParams as useGetGovParams,
  useGetVote,
  createGetVote,
} from 'interchain-react/cosmos/gov/v1beta1/query.rpc.func';
import {
  useGetDelegatorDelegations,
  useGetDelegatorValidators,
  useGetPool,
  useGetValidators,
} from 'interchain-react/cosmos/staking/v1beta1/query.rpc.func';

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

export interface Votes {
  [key: string]: number;
}

export function useVotingData(chainName: string) {
  const [isLoading, setIsLoading] = useState(false);
  const { permission } = useAuthzContext();

  const address = permission?.granter;

  const { rpcEndpoint, isReady, isFetching } = useQueryHooks(chainName);

  const proposalsQuery = useGetProposals({
    request: {
      voter: '',
      depositor: '',
      pagination: paginate(50n, true),
      proposalStatus: ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED,
    },
    options: {
      context: defaultContext,
      enabled: isReady,
      staleTime: Infinity,
      select: ({ proposals }) => processProposals(proposals),
    },
    clientResolver: rpcEndpoint,
  });

  const bondedTokensQuery = useGetPool({
    request: {},
    options: {
      context: defaultContext,
      enabled: isReady,
      staleTime: Infinity,
      select: ({ pool }) => pool?.bondedTokens,
    },
    clientResolver: rpcEndpoint,
  });

  const quorumQuery = useGetGovParams({
    request: {
      paramsType: 'tallying',
    },
    options: {
      context: defaultContext,
      enabled: isReady,
      staleTime: Infinity,
      select: ({ tallyParams }) => parseQuorum(tallyParams?.quorum),
    },
    clientResolver: rpcEndpoint,
  });

  const votedProposalsQuery = useGetProposals({
    request: {
      voter: address || '/', // use '/' to differentiate from proposalsQuery
      depositor: '',
      pagination: paginate(50n, true),
      proposalStatus: ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED,
    },
    options: {
      context: defaultContext,
      enabled: isReady && Boolean(address),
      select: ({ proposals }) => proposals,
      keepPreviousData: true,
    },
    clientResolver: rpcEndpoint,
  });

  const getVote = createGetVote(rpcEndpoint);

  const votesQueries = useQueries({
    queries: (votedProposalsQuery.data || []).map(({ proposalId }) => ({
      queryKey: ['voteQuery', proposalId, address],
      queryFn: () =>
        getVote({
          proposalId,
          voter: address || '',
        }),
      enabled:
        Boolean(rpcEndpoint) &&
        Boolean(address) &&
        Boolean(votedProposalsQuery.data),
      keepPreviousData: true,
    })),
    context: defaultContext,
  });

  const singleQueries = {
    quorum: quorumQuery,
    proposals: proposalsQuery,
    bondedTokens: bondedTokensQuery,
    votedProposals: votedProposalsQuery,
  };

  const staticQueries = [
    singleQueries.quorum,
    singleQueries.proposals,
    singleQueries.bondedTokens,
  ];

  const dynamicQueries = [singleQueries.votedProposals];

  useEffect(() => {
    staticQueries.forEach((query) => query.remove());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chainName]);

  const isStaticQueriesFetching = staticQueries.some(
    ({ isFetching }) => isFetching
  );

  const isDynamicQueriesFetching =
    singleQueries.votedProposals.isFetching ||
    votesQueries.some(({ isFetching }) => isFetching);

  const loading =
    isFetching || isStaticQueriesFetching || isDynamicQueriesFetching;

  useEffect(() => {
    // no loading when refetching
    if (isFetching || isStaticQueriesFetching) setIsLoading(true);
    if (!loading) setIsLoading(false);
  }, [isStaticQueriesFetching, loading]);

  type SingleQueries = typeof singleQueries;

  type SingleQueriesData = {
    [Key in keyof SingleQueries]: NonNullable<SingleQueries[Key]['data']>;
  };

  const singleQueriesData = useMemo(() => {
    if (isStaticQueriesFetching || !isReady) return;

    return Object.fromEntries(
      Object.entries(singleQueries).map(([key, query]) => [key, query.data])
    ) as SingleQueriesData;
  }, [isStaticQueriesFetching, isReady]);

  const votes = useMemo(() => {
    const votesEntries = votesQueries
      .map((query) => query.data)
      .map((data) => [data?.vote?.proposalId, data?.vote?.options[0].option]);

    return Object.fromEntries(votesEntries) as Votes;
  }, [votesQueries]);

  const refetch = () => {
    votesQueries.forEach((query) => query.remove());
    dynamicQueries.forEach((query) => query.refetch());
  };

  return { data: { ...singleQueriesData, votes }, isLoading, refetch };
}

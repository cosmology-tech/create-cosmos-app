import { Ref, computed } from 'vue'
import { useRpcClient } from '../../outputv4';
import { useChain } from '@interchain-kit/vue';
import { ProposalStatus } from '../../outputv4/cosmos/gov/v1/gov';
import { createRpcQueryHooks as createGovHooks, useQueryService } from '../../outputv4/cosmos/gov/v1/query.rpc.Query';
import { createRpcQueryHooks as createStakingHooks } from '../../outputv4/cosmos/staking/v1beta1/query.rpc.Query';
import { paginate, parseQuorum } from '../../utils/voting';
import { Proposal } from '../../outputv4/cosmos/gov/v1/gov'
import { useQueries } from '@tanstack/vue-query';
import { Votes } from '../../components/voting/proposal.vue';

export function processProposals(proposals: Proposal[]) {
  const sorted = proposals.sort(
    (a, b) => Number(b.id) - Number(a.id)
  );

  proposals.forEach((proposal) => {
    // @ts-ignore
    if (!proposal.content?.title && proposal.content?.value) {
      // @ts-ignore
      proposal.content.title = getTitle(proposal.content?.value);
    }
  });

  return sorted.filter(
    ({ status }) => status === ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD
  ).concat(sorted.filter(
    ({ status }) => status !== ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD
  ));
};

export function useVotingData(chainName: Ref<string>) {
  const { rpcEndpoint, address } = useChain(chainName)
  const { data: rpcClient } = useRpcClient({
    rpcEndpoint,
    options: {
      enabled: computed(() => !!rpcEndpoint.value),
    },
  });
  const queryService = useQueryService(rpcClient)

  const govHooks = createGovHooks(rpcClient)
  const { data: proposals, isLoading } = govHooks.useProposals({
    request: {
      voter: computed(() => ''),
      depositor: computed(() => ''),
      pagination: computed(() => paginate(50n, true)),
      proposalStatus: computed(() => ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED),
    },
    options: {
      staleTime: Infinity,
      // @ts-ignore
      select: ({ proposals }) => processProposals(proposals),
    }
  })

  const stakingHooks = createStakingHooks(rpcClient)
  const { data: bondedTokens } = stakingHooks.usePool<string>({
    options: {
      // enabled: isReady,
      staleTime: Infinity,
      // @ts-ignore
      select: ({ pool }) => pool?.bondedTokens,
    }
  })

  const { data: quorumData } = govHooks.useParams<number | undefined>({
    request: {
      paramsType: computed(() => 'tallying')
    },
    options: {
      staleTime: Infinity,
      // @ts-ignore
      select: ({ tallyParams }) => parseQuorum(tallyParams?.quorum as any),
    },
  })
  console.log('quorumData>>', quorumData)

  // const tempAddr = ref('cosmos1ek8tydrz5445f7u59yrvn6c4wz2qphh5e7ug2p')

  const votedProposalsQuery = govHooks.useProposals({
    request: {
      voter: address,
      depositor: computed(() => ''),
      pagination: computed(() => paginate(50n, true)),
      proposalStatus: computed(() => ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED),
    },
    options: {
      enabled: computed(() => Boolean(address.value)),
      // @ts-ignore
      select: ({ proposals }) => proposals,
      keepPreviousData: true,
    },
  });

  const votedProposalIds = computed(() => {
    // @ts-ignore
    return votedProposalsQuery.data.value?.map(({ id }) => id)
  })

  const queries = computed(() => {
    return (votedProposalIds?.value || []).map((id: bigint) => {
      return {
        queryKey: ['voteQuery', id, queryService],
        queryFn: async () => {
          const res = await queryService.value?.vote({
            proposalId: id,
            voter: address.value
          })
          return res
        },
      }
    })
  })

  const votesQueries = useQueries({ queries: queries })

  const votes = computed<Votes>(() => {
    // @ts-ignore
    return Object.fromEntries(votesQueries.value.filter((record) => record.status === 'success').map(record => [record?.data?.vote?.proposalId?.toString(), record?.data?.vote?.options?.[0]?.option]))
  })

  return {
    data: {
      proposals,
      votes,
      quorumData,
      bondedTokens
    },
    isLoading,
    refetch: () => { },
  }
}
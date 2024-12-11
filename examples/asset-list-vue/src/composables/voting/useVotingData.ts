import { Ref, computed } from 'vue'
import { useRpcClient } from '../../outputosmojs';
import { useChain } from '@interchain-kit/vue';
import { ProposalStatus } from '../../outputosmojs/cosmos/gov/v1/gov';
import { createRpcQueryHooks as createGovHooks } from '../../outputosmojs/cosmos/gov/v1/query.rpc.Query';
import { createRpcQueryHooks as createStakingHooks } from '../../outputosmojs/cosmos/staking/v1beta1/query.rpc.Query';
import { paginate, parseQuorum } from '../../utils/voting';
import { Proposal } from '../../outputosmojs/cosmos/gov/v1/gov'


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

  const govHooks = createGovHooks(rpcClient)
  const { data: proposals, isLoading } = govHooks.useProposals({
    request: {
      voter: computed(() => ''),
      depositor: computed(() => ''),
      pagination: computed(() => paginate(50n, true)),
      proposalStatus: computed(() => ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED),
    },
    options: {
      // @ts-ignore
      select: ({ proposals }) => processProposals(proposals),
    }
  })

  const stakingHooks = createStakingHooks(rpcClient)
  const { data: bondedTokens } = stakingHooks.usePool({
    options: {
      // enabled: isReady,
      staleTime: Infinity,
      // @ts-ignore
      select: ({ pool }) => pool?.bondedTokens,
    }
  })

  const { data: quorumData } = govHooks.useParams({
    request: {
      paramsType: computed(() => 'tallying')
    },
    options: {
      staleTime: Infinity,
      // @ts-ignore
      select: ({ tallyParams }) => parseQuorum(tallyParams?.quorum as any),
    },
  })

  const votedProposalsQuery = govHooks.useProposals({
    request: {
      voter: address,
      depositor: computed(() => ''),
      pagination: computed(() => paginate(50n, true)),
      proposalStatus: computed(() => ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED),
    },
    options: {
      enabled: Boolean(address.value),
      // @ts-ignore
      // select: ({ proposals }) => proposals,
      keepPreviousData: true,
    },
  });

  console.log('votedProposalsQuery>', votedProposalsQuery)

  return {
    data: {
      proposals,
      votes: []
    },
    isLoading,
    refetch: () => { }
  }
}
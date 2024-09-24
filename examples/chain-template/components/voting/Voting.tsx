import { useEffect, useState } from 'react';
import { useChain } from '@cosmos-kit/react';
import {
  Proposal as IProposal,
  ProposalStatus,
  TallyResult,
} from 'interchain-query/cosmos/gov/v1/gov';
import {
  BasicModal,
  Box,
  GovernanceProposalItem,
  Spinner,
  Text,
  useColorModeValue,
} from '@interchain-ui/react';
import { useModal, useVotingData } from '@/hooks';
import { Proposal } from '@/components';
import { formatDate } from '@/utils';
import { chains } from 'chain-registry';

function status(s: ProposalStatus) {
  switch (s) {
    case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
      return 'pending';
    case ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD:
      return 'pending';
    case ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD:
      return 'pending';
    case ProposalStatus.PROPOSAL_STATUS_PASSED:
      return 'passed';
    case ProposalStatus.PROPOSAL_STATUS_REJECTED:
      return 'rejected';
    case ProposalStatus.PROPOSAL_STATUS_FAILED:
      return 'rejected';
    default:
      return 'pending';
  }
}

function votes(result: TallyResult) {
  return {
    yes: Number(result?.yesCount) || 0,
    no: Number(result?.noCount) || 0,
    abstain: Number(result?.abstainCount) || 0,
    noWithVeto: Number(result?.noWithVetoCount) || 0,
  };
}

export type VotingProps = {
  chainName: string;
};

export function Voting({ chainName }: VotingProps) {
  const { address } = useChain(chainName);
  const [proposal, setProposal] = useState<IProposal>();
  const { data, isLoading, refetch } = useVotingData(chainName);
  const { modal, open: openModal, close: closeModal, setTitle } = useModal('');
  const [tallies, setTallies] = useState<{ [key: string]: TallyResult }>({});

  const chain = chains.find((c) => c.chain_name === chainName);

  useEffect(() => {
    if (!data.proposals || data.proposals.length === 0) return;
    data.proposals.forEach((proposal) => {
      if (proposal.status === ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD) {
        (async () => {
          for (const { address } of chain?.apis?.rest || []) {
            const api = `${address}/cosmos/gov/v1/proposals/${Number(proposal.id)}/tally`;
            try {
              const tally = (await (await fetch(api)).json()).tally;
              if (!tally) {
                continue;
              }
              setTallies((prev) => {
                return {
                  ...prev,
                  [proposal.id.toString()]: {
                    yesCount: tally.yes_count,
                    noCount: tally.no_count,
                    abstainCount: tally.abstain_count,
                    noWithVetoCount: tally.no_with_veto_count,
                  },
                };
              });
              break;
            } catch (e) {}
          }
        })();
      }
    });
  }, [data.proposals?.length, chainName]);

  function onClickProposal(index: number) {
    const proposal = data.proposals![index];
    openModal();
    setProposal(proposal);
    // @ts-ignore
    setTitle(`#${proposal.id?.toString()} ${proposal?.title}`);
  }

  const empty = (
    <Box
      height="$24"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize="$md" color="$textSecondary" fontWeight="500">
        No proposals found
      </Text>
    </Box>
  );

  const content = (
    <Box mt="$12">
      {data.proposals?.length === 0
        ? empty
        : data.proposals?.map((proposal, index) => {
            let tally = proposal.finalTallyResult;
            if (
              proposal.status === ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD
            ) {
              tally = tallies[proposal.id.toString()];
            }
            return (
              <Box
                my="$8"
                key={proposal.id?.toString() || index}
                position="relative"
                attributes={{ onClick: () => onClickProposal(index) }}
              >
                {data.votes[proposal.id.toString()] ? (
                  <Box
                    position="absolute"
                    px="$4"
                    py="$2"
                    top="$4"
                    right="$6"
                    borderRadius="$md"
                    backgroundColor="$green400"
                  >
                    <Text color="$white" fontSize="$xs" fontWeight="$bold">
                      Voted
                    </Text>
                  </Box>
                ) : null}
                <GovernanceProposalItem
                  id={`# ${proposal.id?.toString()}`}
                  key={proposal.submitTime?.getTime()}
                  // @ts-ignore
                  title={proposal.content?.title || proposal.title || ''}
                  status={status(proposal.status)}
                  votes={votes(tally!)}
                  endTime={formatDate(proposal.votingEndTime)!}
                />
              </Box>
            );
          })}
    </Box>
  );

  const connect = (
    <Box
      height="$24"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize="$lg">
        Please connect to your wallet to see the proposals.
      </Text>
    </Box>
  );

  const Loading = (
    <Box
      p="$8"
      borderRadius="$md"
      justifyContent="center"
      display={isLoading ? 'flex' : 'none'}
    >
      <Spinner
        size="$5xl"
        color={useColorModeValue('$blackAlpha800', '$whiteAlpha900')}
      />
    </Box>
  );

  return (
    <Box mb="$20" position="relative" maxWidth="$containerMd" mx="auto">
      <Text fontWeight="600" fontSize="$2xl">
        Proposals
      </Text>

      {address ? Loading : null}

      {address ? content : connect}

      <BasicModal
        title={
          <Box maxWidth="40rem">
            <Text fontSize="$xl" fontWeight="$bold">
              {modal.title}
            </Text>
          </Box>
        }
        isOpen={modal.open}
        onOpen={openModal}
        onClose={closeModal}
      >
        <Proposal
          votes={data.votes}
          proposal={proposal!}
          quorum={data.quorum!}
          bondedTokens={data.bondedTokens!}
          chainName={chainName}
          onVoteSuccess={refetch}
        />
      </BasicModal>
    </Box>
  );
}

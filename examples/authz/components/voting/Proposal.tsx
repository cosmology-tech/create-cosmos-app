// TODO fix type issues
// @ts-nocheck
import {
  Box,
  Button,
  GovernanceRadio,
  GovernanceRadioGroup,
  GovernanceResultCard,
  GovernanceVoteBreakdown,
  GovernanceVoteType,
  Icon,
  Stack,
  Text,
} from '@interchain-ui/react';
import {
  Proposal as IProposal,
  ProposalStatus,
} from 'interchain-query/cosmos/gov/v1beta1/gov';
import {
  exponentiate,
  formatDate,
  getCoin,
  getExponent,
  percent,
} from '@/utils';
import Markdown from 'react-markdown';
import { useEffect, useState } from 'react';
import { useAuthzTx, useSigningClientDirect, Votes } from '@/hooks';
import { useAuthzContext } from '@/context';
import { MsgVote } from 'interchain-react/cosmos/gov/v1beta1/tx';
import { useExec } from 'interchain-react/cosmos/authz/v1beta1/tx.rpc.func';

// export declare enum VoteOption {
//   /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
//   VOTE_OPTION_UNSPECIFIED = 0,
//   /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
//   VOTE_OPTION_YES = 1,
//   /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
//   VOTE_OPTION_ABSTAIN = 2,
//   /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
//   VOTE_OPTION_NO = 3,
//   /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
//   VOTE_OPTION_NO_WITH_VETO = 4,
//   UNRECOGNIZED = -1
// }

const VoteTypes = ['', 'yes', 'abstain', 'no', 'noWithVeto'];

export type ProposalProps = {
  proposal: IProposal;
  votes?: Votes;
  quorum?: number;
  bondedTokens?: string;
  chainName: string;
  onVoteSuccess?: () => void;
};

export function Proposal({
  votes,
  quorum,
  proposal,
  chainName,
  bondedTokens,
  onVoteSuccess = () => {},
}: ProposalProps) {
  const vote = votes?.[proposal.proposalId.toString()];

  const [showMore, setShowMore] = useState(false);
  const [voteType, setVoteType] = useState<GovernanceVoteType>();
  const [isVoting, setIsVoting] = useState(false);

  const coin = getCoin(chainName);
  const exponent = getExponent(chainName);

  const { createExecMsg } = useAuthzTx(chainName);
  const { data: client } = useSigningClientDirect(chainName);

  const { mutate: exec } = useExec({
    clientResolver: client,
    options: {
      context: defaultContext,
    },
  });

  const { permission } = useAuthzContext();

  const toggleShowMore = () => setShowMore((v) => !v);

  useEffect(() => {
    if (typeof vote === 'number') {
      setVoteType(VoteTypes[vote] as GovernanceVoteType);
    }
  }, [vote]);

  const isChanged =
    (vote === undefined && voteType) ||
    (typeof vote === 'number' && voteType && voteType !== VoteTypes[vote]);

  const isPassed = proposal.status === ProposalStatus.PROPOSAL_STATUS_PASSED;

  const isRejected =
    proposal.status === ProposalStatus.PROPOSAL_STATUS_REJECTED;

  const isDepositPeriod =
    proposal.status === ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD;

  const isVotingPeriod =
    proposal.status === ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD;

  const total = proposal.finalTallyResult
    ? Object.values(proposal.finalTallyResult).reduce(
        (sum, val) => sum + Number(val),
        0
      )
    : 0;

  const turnout = total / Number(bondedTokens);

  // @ts-ignore
  const description = proposal?.content?.description || '';
  const renderedDescription =
    description.length > 200
      ? showMore
        ? description
        : `${description.slice(0, 200)}...`
      : description || '';

  const minStakedTokens =
    quorum && exponentiate(quorum * Number(bondedTokens), -exponent).toFixed(6);

  const timepoints = [
    {
      label: 'Submit Time',
      timestamp: formatDate(proposal?.submitTime!) || '',
    },
    {
      label: 'Voting Starts',
      timestamp: isDepositPeriod
        ? 'Not Specified Yet'
        : formatDate(proposal.votingStartTime) || '',
    },
    {
      label: 'Voting Ends',
      timestamp: isDepositPeriod
        ? 'Not Specified Yet'
        : formatDate(proposal?.votingEndTime!) || '',
    },
  ];

  function onVoteTypeChange(selected: string) {
    setVoteType(selected as GovernanceVoteType);
  }

  function onVoteButtonClick() {
    if (!voteType || !permission) return;

    setIsVoting(true);

    const { grantee, granter, expiration } = permission;

    const msg = MsgVote.toProtoMsg({
      voter: granter,
      option: VoteTypes.indexOf(voteType),
      proposalId: proposal.proposalId,
    });

    exec(
      {
        granter,
        message: createExecMsg({ msgs: [msg], grantee }),
        fee: 'auto',
        memo: 'executing permission',
      },
      {
        onSuccess: () => {
          onVoteSuccess();
        },
        onComplete: () => {
          setIsVoting(false);
        },
      }
    );
  }

  return (
    <Box py="$12" minWidth="40rem" maxWidth="40rem">
      <Box
        backgroundColor="$cardBg"
        display="flex"
        flexDirection="column"
        gap="$10"
        p={{
          mobile: '$9',
          tablet: '$10',
          desktop: '$10',
        }}
        borderRadius="$lg"
      >
        <Box display="flex" justifyContent="space-between">
          {timepoints.map((timepoint) => (
            <Stack key={timepoint.label} direction="vertical" space="$1">
              <Text
                color="$textSecondary"
                fontSize="$sm"
                fontWeight="$semibold"
              >
                {timepoint.label}
              </Text>
              <Text color="$textSecondary" fontSize="$sm" fontWeight="$normal">
                {timepoint.timestamp}
              </Text>
            </Stack>
          ))}
        </Box>
        <Box display={!isVotingPeriod && !vote ? 'none' : 'block'}>
          <GovernanceRadioGroup
            value={voteType}
            isDisabled={isVoting}
            onChange={onVoteTypeChange}
          >
            <Box
              display="flex"
              flexDirection={{
                mobile: 'column',
                tablet: 'row',
                desktop: 'row',
              }}
              justifyContent={{
                mobile: 'flex-start',
                tablet: 'space-between',
                desktop: 'space-between',
              }}
              gap="$6"
            >
              <GovernanceRadio value="yes">Yes</GovernanceRadio>
              <GovernanceRadio value="no">No</GovernanceRadio>
              <GovernanceRadio value="noWithVeto">No with veto</GovernanceRadio>
              <GovernanceRadio value="abstain">Abstain</GovernanceRadio>
            </Box>
          </GovernanceRadioGroup>
        </Box>
        <Button
          intent="tertiary"
          isLoading={isVoting}
          disabled={
            !isVotingPeriod || isVoting || (isVotingPeriod && !isChanged)
          }
          onClick={onVoteButtonClick}
        >
          {vote ? 'Update Vote' : 'Vote'}
        </Button>
      </Box>
      <Stack
        direction="vertical"
        space="$6"
        attributes={{
          marginY: '$12',
        }}
      >
        <Text color="$textSecondary" fontSize="$lg" fontWeight="$semibold">
          Vote Details
        </Text>
        {quorum ? (
          <Text
            color="$textSecondary"
            fontSize="$xs"
            fontWeight="$normal"
            attributes={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Icon
              name="informationLine"
              color="$textSecondary"
              size="$sm"
              attributes={{
                marginRight: '$2',
              }}
            />
            <Text
              as="span"
              color="inherit"
              fontWeight="$semibold"
              fontSize="$xs"
              attributes={{
                px: '$2',
              }}
            >
              {`Minimum of staked ${minStakedTokens} ${coin.symbol}(${
                quorum * 100
              }%) need to vote
            for this proposal to pass.`}
            </Text>
          </Text>
        ) : null}
      </Stack>

      <Box display="flex" gap="$17" marginBottom="$12">
        <Box display="flex" flex="1" flexDirection="column" gap="$4">
          <GovernanceVoteBreakdown
            voteType="yes"
            title="Yes"
            votePercentage={percent(proposal.finalTallyResult?.yes, total)}
            description={`${exponentiate(
              proposal.finalTallyResult?.yes,
              -exponent
            ).toFixed(2)} ${coin.symbol}`}
          />
          <GovernanceVoteBreakdown
            voteType="abstain"
            title="Abstain"
            votePercentage={percent(proposal.finalTallyResult?.abstain, total)}
            description={`${exponentiate(
              proposal.finalTallyResult?.abstain,
              -exponent
            ).toFixed(2)} ${coin.symbol}`}
          />
          <GovernanceVoteBreakdown
            voteType="no"
            title="No"
            votePercentage={percent(proposal.finalTallyResult?.no, total)}
            description={`${exponentiate(
              proposal.finalTallyResult?.no,
              -exponent
            ).toFixed(2)} ${coin.symbol}`}
          />
          <GovernanceVoteBreakdown
            voteType="noWithVeto"
            title="No with veto"
            votePercentage={percent(
              proposal.finalTallyResult?.noWithVeto,
              total
            )}
            description={`${exponentiate(
              proposal.finalTallyResult?.noWithVeto,
              -exponent
            ).toFixed(2)} ${coin.symbol}`}
          />
        </Box>
        <Box display="flex" flexDirection="column" gap="$12">
          {isPassed ? (
            <GovernanceResultCard
              resultType="passed"
              label="Passed"
              votePercentage={percent(proposal.finalTallyResult?.yes, total)}
            />
          ) : null}
          {isRejected ? (
            <GovernanceResultCard
              resultType="rejected"
              label="Rejected"
              votePercentage={
                +(
                  percent(proposal.finalTallyResult?.no, total) +
                  percent(proposal.finalTallyResult?.noWithVeto, total)
                ).toFixed(2)
              }
            />
          ) : null}
          <GovernanceResultCard
            resultType="info"
            label="Turnout"
            votePercentage={+(turnout * 100).toFixed(2)}
          />
        </Box>
      </Box>

      {/* Description */}
      <Box>
        <Text
          color="$textSecondary"
          fontSize="$lg"
          fontWeight="$semibold"
          attributes={{
            marginBottom: '$8',
          }}
        >
          Description
        </Text>

        <Text fontSize="$sm" fontWeight="$normal" color="$textSecondary">
          {showMore ? <Markdown>{description}</Markdown> : renderedDescription}
        </Text>

        <Box mt="$8" width="100%" display="flex" justifyContent="center">
          <Button intent="secondary" variant="ghost" onClick={toggleShowMore}>
            {showMore ? 'Show less' : 'Show more'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

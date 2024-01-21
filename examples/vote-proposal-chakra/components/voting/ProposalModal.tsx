import React, { useMemo, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { Proposal } from 'interchain-query/cosmos/gov/v1beta1/gov';
import { cosmos } from 'interchain-query';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Flex,
  Text,
  Box,
  Center,
  Divider,
  Heading,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

import { VoteColor } from './ProposalCard';
import { Votes } from '@/hooks';
import {
  decodeUint8Arr,
  exponentiate,
  formatDate,
  getCoin,
  getExponent,
  getPercentage,
  getTitleFromDecoded,
} from '@/utils';
import {
  VoteResult,
  TimeDisplay,
  VoteRatio,
  NewLineText,
  StatusBadge,
  VoteOption,
} from './common';
import { VoteModal } from './VoteModal';

const ProposalStatus = cosmos.gov.v1beta1.ProposalStatus;

export const ProposalModal = ({
  isOpen,
  onClose,
  proposal,
  chainName,
  quorum,
  bondedTokens,
  votes,
  updateVotes,
}: {
  isOpen: boolean;
  onClose: () => void;
  proposal: Proposal;
  chainName: string;
  quorum: number | undefined;
  bondedTokens: string | undefined;
  votes: Votes | undefined;
  updateVotes: () => void;
}) => {
  const [showMore, setShowMore] = useState(false);
  const voteModalControl = useDisclosure();
  const { colorMode } = useColorMode();

  const coin = getCoin(chainName);
  const exponent = getExponent(chainName);

  const chartData = [
    {
      title: 'YES',
      value: Number(proposal.finalTallyResult?.yes),
      color: VoteColor.YES,
    },
    {
      title: 'NO',
      value: Number(proposal.finalTallyResult?.no),
      color: VoteColor.NO,
    },
    {
      title: 'NWV',
      value: Number(proposal.finalTallyResult?.noWithVeto),
      color: VoteColor.NWV,
    },
    {
      title: 'ABSTAIN',
      value: Number(proposal.finalTallyResult?.abstain),
      color: VoteColor.ABSTAIN,
    },
  ];

  const emptyChartData = [
    {
      title: 'NO VOTES YET',
      value: 100,
      color: VoteColor.ABSTAIN,
    },
  ];

  const totalVotes = useMemo(() => {
    if (!proposal.finalTallyResult) return 0;
    const total = Object.values(proposal.finalTallyResult).reduce(
      (prev, cur) => prev + Number(cur),
      0
    );
    return total ? total : 0;
  }, [proposal]);

  const vote = votes?.[proposal.proposalId.toString()];

  const isDepositPeriod =
    proposal.status === ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD;

  const isVotingPeriod =
    proposal.status === ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD;

  const turnout = totalVotes / Number(bondedTokens);

  const minStakedTokens =
    quorum && exponentiate(quorum * Number(bondedTokens), -exponent).toFixed(6);

  const title = getTitleFromDecoded(decodeUint8Arr(proposal.content?.value));

  const description =
    decodeUint8Arr(proposal.content?.value)
      .match(/(?<=\u0012).*/s)?.[0]
      .slice(2) || '';

  const renderedDescription =
    description.length > 200
      ? showMore
        ? description
        : `${description.slice(0, 200)}...`
      : description || '';

  return (
    <>
      <VoteModal
        chainName={chainName}
        modalControl={voteModalControl}
        updateVotes={updateVotes}
        title={title || ''}
        vote={vote}
        proposalId={proposal.proposalId}
      />

      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setShowMore(false);
        }}
        isCentered
        size="3xl"
      >
        <ModalOverlay />
        <ModalContent maxH="80vh" overflowY="scroll" px={2}>
          <ModalHeader>
            <Flex gap={2} mt={1} mb={2} alignItems="center">
              <Center h="min-content" transform="translateY(1px)">
                <StatusBadge status={proposal.status} />
              </Center>
              {vote && <VoteResult voteOption={vote} />}
            </Flex>
            <Text>{`#${proposal.proposalId} ${title}`}</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex justifyContent="space-between" alignItems="center">
              <TimeDisplay
                title="Submit Time"
                time={formatDate(proposal.submitTime)}
              />
              <TimeDisplay
                title="Voting Starts"
                time={
                  isDepositPeriod
                    ? 'Not Specified Yet'
                    : formatDate(proposal.votingStartTime)
                }
              />
              <TimeDisplay
                title="Voting Ends"
                time={
                  isDepositPeriod
                    ? 'Not Specified Yet'
                    : formatDate(proposal.votingEndTime)
                }
              />
              <Button
                isDisabled={!isVotingPeriod}
                colorScheme="blue"
                w="140px"
                onClick={voteModalControl.onOpen}
              >
                {vote ? 'Edit Vote' : 'Vote'}
              </Button>
            </Flex>
            <Center my={4} />
            <Divider />
            <Box mt={4}>
              <Heading
                fontSize="sm"
                color={useColorModeValue('gray.600', 'gray.400')}
                mb={4}
              >
                Vote Details
              </Heading>

              <Flex
                bgColor={useColorModeValue('gray.50', 'blackAlpha.100')}
                py={6}
                borderRadius="lg"
              >
                <Center px={6}>
                  <PieChart
                    data={totalVotes ? chartData : emptyChartData}
                    lineWidth={14}
                    paddingAngle={totalVotes ? 1 : 0}
                    style={{ height: '160px', width: '160px' }}
                    label={({ dataEntry }) => {
                      const { value, title, percentage } = dataEntry;
                      if (!totalVotes) return title;

                      const maxValue = Math.max(
                        ...chartData.map((item) => item.value)
                      );

                      if (value !== maxValue) return '';
                      return `${title} ${percentage.toFixed(2)}%`;
                    }}
                    labelStyle={{
                      fontSize: '10px',
                      fill: totalVotes
                        ? chartData.sort((a, b) => b.value - a.value)[0].color
                        : VoteColor.ABSTAIN,
                      fontWeight: 'bold',
                    }}
                    labelPosition={0}
                  />
                </Center>

                <Box pr={2}>
                  <Text
                    color={turnout > (quorum || 0) ? 'green.500' : 'gray.400'}
                    borderColor={
                      turnout > (quorum || 0) ? 'green.500' : 'gray.400'
                    }
                    fontWeight="bold"
                    border="1px solid"
                    w="fit-content"
                    px={2}
                    borderRadius="4px"
                  >
                    Turnout: {(turnout * 100).toFixed(2)}%
                  </Text>
                  {quorum && (
                    <Text
                      color={colorMode === 'light' ? 'gray.600' : 'gray.400'}
                      fontSize="sm"
                      my={2}
                      fontWeight="semibold"
                    >
                      {`Minimum of staked ${minStakedTokens} ${coin.symbol}(${
                        quorum * 100
                      }%) need to vote
                    for this proposal to pass.`}
                    </Text>
                  )}
                  <Flex wrap="wrap" gap={4}>
                    <VoteRatio
                      type={VoteOption.YES}
                      ratio={getPercentage(
                        proposal.finalTallyResult?.yes,
                        totalVotes
                      )}
                      amount={exponentiate(
                        proposal.finalTallyResult?.yes,
                        -exponent
                      ).toFixed(2)}
                      token={coin.symbol}
                    />
                    <VoteRatio
                      type={VoteOption.NO}
                      ratio={getPercentage(
                        proposal.finalTallyResult?.no,
                        totalVotes
                      )}
                      amount={exponentiate(
                        proposal.finalTallyResult?.no,
                        -exponent
                      ).toFixed(2)}
                      token={coin.symbol}
                    />
                    <VoteRatio
                      type={VoteOption.NWV}
                      ratio={getPercentage(
                        proposal.finalTallyResult?.noWithVeto,
                        totalVotes
                      )}
                      amount={exponentiate(
                        proposal.finalTallyResult?.noWithVeto,
                        -exponent
                      ).toFixed(2)}
                      token={coin.symbol}
                    />
                    <VoteRatio
                      type={VoteOption.ABSTAIN}
                      ratio={getPercentage(
                        proposal.finalTallyResult?.abstain,
                        totalVotes
                      )}
                      amount={exponentiate(
                        proposal.finalTallyResult?.abstain,
                        -exponent
                      ).toFixed(2)}
                      token={coin.symbol}
                    />
                  </Flex>
                </Box>
              </Flex>
            </Box>

            <Box mt={4}>
              <Heading
                fontSize="sm"
                color={useColorModeValue('gray.600', 'gray.400')}
                mb={2}
              >
                Description
              </Heading>
              <NewLineText text={renderedDescription} />
              {description.length > 200 && (
                <Button onClick={() => setShowMore(!showMore)} size="sm">
                  {showMore ? 'Show less' : 'Show more'}
                </Button>
              )}
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

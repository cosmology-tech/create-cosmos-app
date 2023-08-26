import React, { useMemo } from 'react';
import { Proposal } from 'interchain-query/cosmos/gov/v1beta1/gov';
import { cosmos } from 'interchain-query';
import dayjs from 'dayjs';
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Spacer,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

import { Votes } from '@/hooks';
import { decodeUint8Arr, getPercentage, getTitleFromDecoded } from '@/utils';
import { StatusBadge, VotedBadge, VoteOption } from './common';

const ProposalStatus = cosmos.gov.v1beta1.ProposalStatus;

export const VoteColor: { [key in VoteOption]: string } = {
  [VoteOption.YES]: '#17a572',
  [VoteOption.NO]: '#ce4256',
  [VoteOption.NWV]: '#ff5b6d',
  [VoteOption.ABSTAIN]: '#546198',
};

export const ProposalCard = ({
  proposal,
  handleClick,
  votes,
}: {
  proposal: Proposal;
  handleClick: () => void;
  votes: Votes | undefined;
}) => {
  const { colorMode } = useColorMode();

  const totalVotes = useMemo(() => {
    if (!proposal.finalTallyResult) return 0;
    const total = Object.values(proposal.finalTallyResult).reduce(
      (prev, cur) => prev + Number(cur),
      0
    );
    return total ? total : 0;
  }, [proposal]);

  const isVoted = votes && votes[proposal.proposalId.toString()];

  return (
    <Grid
      h="120px"
      py={4}
      templateColumns="repeat(13, 1fr)"
      bgColor={useColorModeValue('#fbfcfe', 'whiteAlpha.200')}
      borderColor="gray.400"
      borderRadius={10}
      transition="all 0.2s linear"
      _hover={{
        backgroundColor: useColorModeValue('gray.100', 'gray.700'),
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      <GridItem colSpan={2}>
        <Center w="100%" h="100%">
          # {proposal.proposalId.toString().padStart(6, '0')}
        </Center>
      </GridItem>
      <GridItem colSpan={9} py={2}>
        <Flex flexDirection="column" h="100%">
          <Flex gap={2} alignItems="center">
            <Text fontSize="lg">
              {getTitleFromDecoded(decodeUint8Arr(proposal.content?.value))}
            </Text>
            {isVoted && <VotedBadge />}
          </Flex>
          <Spacer />
          <Flex flexDirection="column" h="44%">
            <Flex alignItems="center" fontSize="sm">
              <Text color={useColorModeValue('gray.600', 'gray.400')}>
                {proposal.status ===
                ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD
                  ? 'Deposit'
                  : 'Voting'}
                &nbsp;end time: &nbsp;
              </Text>
              <Text
                color={useColorModeValue('gray.600', 'gray.400')}
                fontWeight="semibold"
              >
                {dayjs(
                  proposal.status ===
                    ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD
                    ? proposal.depositEndTime
                    : proposal.votingEndTime
                ).format('YYYY-MM-DD hh:mm')}
              </Text>
            </Flex>
            <Spacer />
            {totalVotes ? (
              <Flex gap="1px">
                <Box
                  w={getPercentage(proposal.finalTallyResult?.yes, totalVotes)}
                  h="3px"
                  bgColor={VoteColor.YES}
                />
                <Box
                  w={getPercentage(proposal.finalTallyResult?.no, totalVotes)}
                  h="3px"
                  bgColor={VoteColor.NO}
                />
                <Box
                  w={getPercentage(
                    proposal.finalTallyResult?.noWithVeto,
                    totalVotes
                  )}
                  h="3px"
                  bgColor={VoteColor.NWV}
                />
                <Box
                  w={getPercentage(
                    proposal.finalTallyResult?.abstain,
                    totalVotes
                  )}
                  h="3px"
                  bgColor={VoteColor.ABSTAIN}
                />
              </Flex>
            ) : (
              <Box
                w="100%"
                h="3px"
                bgColor={colorMode === 'light' ? 'gray.200' : 'gray.600'}
              />
            )}
          </Flex>
        </Flex>
      </GridItem>
      <GridItem colSpan={2}>
        <Flex
          w="100%"
          h="100%"
          alignItems="center"
          px={4}
          justifyContent="center"
        >
          <StatusBadge status={proposal.status} />
        </Flex>
      </GridItem>
    </Grid>
  );
};

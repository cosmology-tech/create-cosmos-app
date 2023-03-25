import React, { useCallback, useEffect, useState } from 'react';
import { ChainName } from '@cosmos-kit/core';
import {
  Box,
  Center,
  Heading,
  Spinner,
  Stack,
  useDisclosure,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ProposalCard } from './proposal-card';
import { ProposalModal } from './proposal-modal';
import { useChain } from '@cosmos-kit/react';
import { cosmos } from 'interchain';
import type { Proposal } from 'interchain/types/codegen/cosmos/gov/v1beta1/gov';
import BigNumber from 'bignumber.js';

const ProposalStatus = cosmos.gov.v1beta1.ProposalStatus;

export interface Votes {
  [key: string]: number;
}

interface VotingData {
  votes?: Votes;
  quorum?: number;
  proposals?: Proposal[];
  bondedTokens?: string | undefined;
}

export const decodeUint8Arr = (uint8array: Uint8Array | undefined) => {
  if (!uint8array) return '';
  return new TextDecoder('utf-8').decode(uint8array);
};

export const VotingSection = ({ chainName }: { chainName: ChainName }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { address, getRpcEndpoint } = useChain(chainName);
  const [data, setData] = useState<VotingData>();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProposal, setSelectedProposal] = useState<Proposal>();

  const getVotes = useCallback(async () => {
    if (!address) return;

    let rpcEndpoint = await getRpcEndpoint();

    if (!rpcEndpoint) {
      console.log('no rpc endpoint — using a fallback');
      rpcEndpoint = `https://rpc.cosmos.directory/${chainName}`;
    }

    const client = await cosmos.ClientFactory.createRPCQueryClient({
      rpcEndpoint:
        typeof rpcEndpoint === 'string' ? rpcEndpoint : rpcEndpoint.url,
    });

    const { proposals: votedProposals } =
      await client.cosmos.gov.v1beta1.proposals({
        proposalStatus: ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED,
        voter: address,
        depositor: '',
      });

    const votesRequests = votedProposals.map((proposal) => {
      return client.cosmos.gov.v1beta1.vote({
        proposalId: proposal.proposalId,
        voter: address,
      });
    });

    const votesResponses = await Promise.all(votesRequests);

    const votes = votesResponses.reduce(
      (prev, cur) => ({
        ...prev,
        [cur.vote!.proposalId.low]: cur.vote?.options[0].option,
      }),
      {}
    ) as Votes;

    setData((prev) => ({ ...prev, votes }));
  }, [address, chainName, getRpcEndpoint]);

  useEffect(() => {
    const getData = async () => {
      if (!address) return;
      setIsLoading(true);

      let rpcEndpoint = await getRpcEndpoint();

      if (!rpcEndpoint) {
        console.log('no rpc endpoint — using a fallback');
        rpcEndpoint = `https://rpc.cosmos.directory/${chainName}`;
      }

      const client = await cosmos.ClientFactory.createRPCQueryClient({
        rpcEndpoint:
          typeof rpcEndpoint === 'string' ? rpcEndpoint : rpcEndpoint.url,
      });

      // Get proposals
      const { proposals } = await client.cosmos.gov.v1beta1.proposals({
        proposalStatus: ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED,
        depositor: '',
        voter: '',
      });

      const sortedProposal = proposals.sort(
        (a, b) => b.proposalId.low - a.proposalId.low
      );

      const votingProposals = sortedProposal.filter(
        (proposal) =>
          proposal.status === ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD
      );

      const nonVotingProposals = sortedProposal.filter(
        (proposal) =>
          proposal.status !== ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD
      );

      const formattedProposal = [...votingProposals, ...nonVotingProposals];

      // Get bondedTokens
      const { pool } = await client.cosmos.staking.v1beta1.pool();

      const bondedTokens = pool?.bondedTokens;

      // Get quorum
      const { tallyParams } = await client.cosmos.gov.v1beta1.params({
        paramsType: 'tallying',
      });

      const quorumStr = decodeUint8Arr(tallyParams?.quorum);

      const quorum = new BigNumber(quorumStr)
        .dividedBy(new BigNumber(10).exponentiatedBy(quorumStr.length))
        .toNumber();

      setData((prev) => ({
        ...prev,
        quorum,
        bondedTokens,
        proposals: formattedProposal,
      }));

      await getVotes();

      setIsLoading(false);
    };
    getData();
  }, [address, chainName, getRpcEndpoint, getVotes]);

  const loader = (
    <Center
      w="100%"
      h="200px"
      bgColor={useColorModeValue('#fbfcfe', 'gray.900')}
      borderRadius="xl"
    >
      <Spinner thickness="4px" color="purple.600" size="xl" />
    </Center>
  );

  const emptyContent = (
    <Center
      w="100%"
      h="100px"
      bgColor={useColorModeValue('#fbfcfe', 'gray.900')}
      borderRadius="xl"
    >
      <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.400')}>
        Please connect the wallet to see the proposals
      </Text>
    </Center>
  );

  const content = address ? (
    <Stack spacing={4}>
      {data?.proposals?.map((proposal) => (
        <ProposalCard
          proposal={proposal}
          votes={data?.votes}
          handleClick={() => {
            onOpen();
            setSelectedProposal(proposal);
          }}
          key={proposal.submitTime?.getTime()}
        />
      ))}
    </Stack>
  ) : (
    emptyContent
  );

  return (
    <>
      <Box mb={16}>
        <Heading as="h1" size="md" mb={4}>
          Proposals
        </Heading>
        {isLoading ? loader : content}
      </Box>
      {selectedProposal && (
        <ProposalModal
          proposal={selectedProposal}
          quorum={data?.quorum}
          bondedTokens={data?.bondedTokens}
          isOpen={isOpen}
          chainName={chainName}
          onClose={onClose}
          votes={data?.votes}
          updateVotes={getVotes}
        />
      )}
    </>
  );
};

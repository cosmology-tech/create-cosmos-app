import React, { useEffect } from 'react';
import { ChainName } from '@cosmos-kit/core';
import { Box, Heading, Stack, useDisclosure } from '@chakra-ui/react';
import { ProposalCard } from './proposal-card';
import { VotingModal } from './voting-modal';
import { useChain } from '@cosmos-kit/react';
import { cosmos } from 'interchain';

export const VotingSection = ({ chainName }: { chainName: ChainName }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { address, getRpcEndpoint } = useChain(chainName);

  const proposalStatus = cosmos.gov.v1beta1.ProposalStatus;

  useEffect(() => {
    const getData = async () => {
      let rpcEndpoint = await getRpcEndpoint();

      if (!rpcEndpoint) {
        console.log('no rpc endpoint — using a fallback');
        rpcEndpoint = `https://rpc.cosmos.directory/${chainName}`;
      }

      const client = await cosmos.ClientFactory.createRPCQueryClient({
        rpcEndpoint,
      });

      const proposalReponse = await client.cosmos.gov.v1beta1.proposals({
        proposalStatus: proposalStatus.PROPOSAL_STATUS_UNSPECIFIED,
        depositor: '',
        voter: '',
      });

      let string = new TextDecoder().decode(
        proposalReponse.proposals[1].content?.value
      );

      console.log(proposalReponse);

      // console.log(string);
    };
    getData();
  }, [chainName, getRpcEndpoint, proposalStatus]);

  return (
    <>
      <Box mb={16}>
        <Heading as="h1" size="md" mb={4}>
          Proposals
        </Heading>
        <Stack spacing={4}>
          <ProposalCard openModal={onOpen} />
        </Stack>
      </Box>
      <VotingModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

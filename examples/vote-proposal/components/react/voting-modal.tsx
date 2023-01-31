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
  Badge,
  Flex,
  Icon,
  Stack,
  Text,
  HStack,
  Box,
  Center,
  Divider,
  Heading,
  CircularProgress,
  CircularProgressLabel,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsCheck } from 'react-icons/bs';
import { VoteType } from '../types';
import { AiFillCheckCircle } from 'react-icons/ai';
const LONG_TEXT =
  'HackJuno Turkey has emerged as the dream of a group of people and communities that have proven themselves in the Turkish Blockchain ecosystem. Educational institutions -Universities- and other Blockchain-Web3 communities in the Turkish Blockchain ecosystem, especially 0xWilds (Blockchain Ecosystem), Castrum Istanbul (Next Generation Blockchain Ecosystem), Tabellio (Developer Team in Cosmos Ecosystem), Nova Ratio Labs (Cosmos Developer Team) HackJuno Turkey, which we plan to realize under the leadership of, stands out with its "GameFi," "Game to Awareness" and "Social Responsibility" points, unlike other Blockchain, Based Hackhatkons. We have three main topics that we will consider as Hackathon content; DeFi, GameFi, and SocialFi.';

const TimeDisplay = ({ title, time }: { title: string; time: string }) => (
  <Stack spacing="0.5">
    <Text fontSize="sm" fontWeight="semibold" color="gray.600">
      {title}
    </Text>
    <Text fontWeight="semibold" color="gray.600" letterSpacing="tight">
      {time}
    </Text>
  </Stack>
);

const voteColor: { [key in VoteType]: string } = {
  [VoteType.YES]: 'green',
  [VoteType.NO]: 'red',
  [VoteType.NWV]: 'red',
  [VoteType.ABSTAIN]: 'gray',
};

const VoteRatio = ({
  type,
  ratio,
  amount,
}: {
  type: keyof typeof VoteType;
  ratio: string;
  amount: string;
}) => (
  <Box
    py={2}
    px={4}
    border="1px solid"
    borderRadius="md"
    borderColor="gray.200"
    bgColor="whiteAlpha.800"
    w="200px"
  >
    <Text color={voteColor[type]} fontWeight="bold">
      {type} {ratio}
    </Text>
    <Text fontSize="sm" fontWeight="semibold" color="gray.600">
      {amount}
    </Text>
  </Box>
);

export const VotingModal = ({
  isOpen,
  onOpen,
  onClose,
}: {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="3xl">
      <ModalOverlay />
      <ModalContent maxH="80vh" overflowY="scroll">
        <ModalHeader>
          <Flex gap={2} mt={1} mb={2} alignItems="center">
            <Badge
              colorScheme="green"
              variant="subtle"
              borderRadius={4}
              h="min-content"
              w="min-content"
              transform="translateY(1px)"
            >
              <Flex alignItems="center">
                <Icon as={BsCheck} fontSize="lg" /> Passed
              </Flex>
            </Badge>
            <Text fontSize="sm" fontWeight="semibold" color="gray.600">
              You Voted
            </Text>
            <Flex color="green" alignItems="center">
              <Icon
                as={AiFillCheckCircle}
                fontSize="md"
                transform="translateY(1px)"
              />
              <Text fontSize="sm" fontWeight="bold">
                Yes
              </Text>
            </Flex>
          </Flex>
          <Text>#29 Cosmos Option Vaults by CzarDAO</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex justifyContent="space-between" alignItems="center">
            <TimeDisplay title="Submit Time" time="2023-01-15 07:56:15" />
            <TimeDisplay title="Voting Starts" time="2023-01-15 07:56:15" />
            <TimeDisplay title="Voting Ends" time="2023-01-20 07:56:15" />
            <Button colorScheme="blue" w="140px">
              Vote
            </Button>
          </Flex>

          <Center my={4}></Center>

          <Divider />

          <Box mt={4}>
            <Heading fontSize="sm" color="gray.600" mb={4}>
              Vote Details
            </Heading>

            <Flex bgColor="gray.50" py={6} borderRadius="lg">
              <CircularProgress
                value={91.78}
                size="180px"
                thickness="4px"
                display="grid"
                color="green.400"
                placeContent="center"
                px={2}
              >
                <CircularProgressLabel>
                  <Text fontSize="md" fontWeight="semibold" color="green">
                    YES 91.78%
                  </Text>
                </CircularProgressLabel>
              </CircularProgress>
              {/* <DonutChart
                data={[
                  {
                    label: 'YES',
                    value: 91,
                  },
                  {
                    label: 'NO/NWV',
                    value: 3,
                  },
                  {
                    label: 'ABSTAIN',
                    value: 6,
                  },
                ]}
                width={300}
                height={380}
                colors={['green', 'red', 'gray']}
                legend={false}
                clickToggle={false}
              /> */}

              <Box px={2}>
                <Text
                  color="green"
                  fontWeight="bold"
                  border="1px solid green"
                  w="fit-content"
                  px={2}
                  borderRadius="4px"
                >
                  Turnout: 77.01%
                </Text>
                <Text
                  color="gray.600"
                  fontSize="sm"
                  my={2}
                  fontWeight="semibold"
                >
                  Minimum of staked 15,852,081.762343 JUNO(33.4%) need to vote
                  for this proposal to pass.
                </Text>
                <Flex wrap="wrap" gap={4}>
                  <VoteRatio
                    type="YES"
                    ratio="91.78%"
                    amount="33,552,236.92 JUNO"
                  />
                  <VoteRatio
                    type="NO"
                    ratio="3.37%"
                    amount="1,235,168.83 JUNO"
                  />
                  <VoteRatio type="NWV" ratio="0.03%" amount="12,472.83 JUNO" />
                  <VoteRatio
                    type="ABSTAIN"
                    ratio="4.80%"
                    amount="1,754,818.84 JUNO"
                  />
                </Flex>
              </Box>
            </Flex>
          </Box>

          <Box mt={4}>
            <Heading fontSize="sm" color="gray.600" mb={2}>
              Description
            </Heading>

            <Text lineHeight="taller" fontSize="sm">
              {showMore ? LONG_TEXT : `${LONG_TEXT.slice(0, 250)}...`}
              <Button
                variant="ghost"
                onClick={() => setShowMore(!showMore)}
                size="sm"
              >
                {showMore ? 'Show less' : 'Show more'}
              </Button>
            </Text>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

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
  Box,
  Center,
  Divider,
  Heading,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsCheck } from 'react-icons/bs';
import { VoteType } from '../types';
import { AiFillCheckCircle } from 'react-icons/ai';
import { PieChart } from 'react-minimal-pie-chart';

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
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [showMore, setShowMore] = useState(false);
  const {
    isOpen: isVoteOptionsOpen,
    onOpen: onVoteOptionsOpen,
    onClose: onVoteOptionsClose,
  } = useDisclosure();

  const dataMock = [
    { title: 'YES', value: 80, color: '#17a572' },
    { title: 'NO', value: 3, color: '#ce4256' },
    { title: 'NWV', value: 7, color: '#ff5b6d' },
    { title: 'ABSTAIN', value: 10, color: '#546198' },
  ];

  return (
    <>
      <Modal isOpen={isVoteOptionsOpen} onClose={onVoteOptionsClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mr={4}>Cosmos Option Vaults by CzarDAO</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RadioGroup defaultValue="1">
              <Stack>
                <Radio colorScheme="blue" size="lg" value="1">
                  Yes
                </Radio>
                <Radio colorScheme="red" size="lg" value="2">
                  No
                </Radio>
                <Radio colorScheme="red" size="lg" value="3">
                  No with Veto
                </Radio>
                <Radio colorScheme="gray" size="lg" value="4">
                  Abstain
                </Radio>
              </Stack>
            </RadioGroup>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue">Comfirm</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

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
              <Button colorScheme="blue" w="140px" onClick={onVoteOptionsOpen}>
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
                <Center px={6}>
                  <PieChart
                    data={dataMock}
                    lineWidth={14}
                    paddingAngle={1}
                    style={{ height: '160px', width: '160px' }}
                    label={({ dataEntry }) => {
                      const maxValue = Math.max(
                        ...dataMock.map((item) => item.value)
                      );
                      if (dataEntry.value !== maxValue) return '';
                      return dataEntry.title + ' ' + dataEntry.value + '%';
                    }}
                    labelStyle={{
                      fontSize: '10px',
                      fill: dataMock.sort((a, b) => b.value - a.value)[0].color,
                      fontWeight: 'bold',
                    }}
                    labelPosition={0}
                  />
                </Center>

                <Box pr={2}>
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
                    <VoteRatio
                      type="NWV"
                      ratio="0.03%"
                      amount="12,472.83 JUNO"
                    />
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
    </>
  );
};

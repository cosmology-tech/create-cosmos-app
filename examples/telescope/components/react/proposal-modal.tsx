import React, { useMemo, useState } from 'react';
import { TransactionResult, VoteOption } from '../types';
import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillMinusCircle,
} from 'react-icons/ai';
import { PieChart } from 'react-minimal-pie-chart';
import {
  getPercentage,
  getTitleFromDecoded,
  StatusBadge,
  VoteColor,
} from './proposal-card';
import dayjs from 'dayjs';
import { cosmos } from '../../src/codegen';
import BigNumber from 'bignumber.js';
import { assets } from 'chain-registry';
import { AssetList, Asset } from '@chain-registry/types';
import { decodeUint8Arr, Votes } from './vote';
import { IconType } from 'react-icons';
import { useChain } from '@cosmos-kit/react';
import { StdFee } from '@cosmjs/stargate';
import ReactMarkdown from 'react-markdown';
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
  Icon,
  Stack,
  Text,
  Box,
  Center,
  Divider,
  Heading,
  Radio,
  RadioGroup,
  useToast,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  Proposal,
  ProposalStatus,
} from '../../src/codegen/cosmos/gov/v1beta1/gov';

const VoteType = cosmos.gov.v1beta1.VoteOption;

const proposalStatus = ProposalStatus;

const getChainAssets = (chainName: string) => {
  return assets.find((chain) => chain.chain_name === chainName) as AssetList;
};

const getCoin = (chainName: string) => {
  const chainAssets = getChainAssets(chainName);
  return chainAssets.assets[0] as Asset;
};

const getExponent = (chainName: string) => {
  return getCoin(chainName).denom_units.find(
    (unit) => unit.denom === getCoin(chainName).display
  )?.exponent as number;
};

const exponentiate = (num: number | string | undefined, exp: number) => {
  if (!num) return 0;
  return new BigNumber(num)
    .multipliedBy(new BigNumber(10).exponentiatedBy(exp))
    .toNumber();
};

const formatDate = (date: Date | undefined) => {
  if (!date) return 'not specified';
  return dayjs(date).format('YYYY-MM-DD hh:mm:ss');
};

const TimeDisplay = ({ title, time }: { title: string; time: string }) => (
  <Stack spacing="0.5">
    <Text
      fontSize="sm"
      fontWeight="semibold"
      color={useColorModeValue('gray.600', 'gray.400')}
    >
      {title}
    </Text>
    <Text
      fontWeight="semibold"
      color={useColorModeValue('gray.600', 'gray.400')}
      letterSpacing="tight"
    >
      {time}
    </Text>
  </Stack>
);

const VoteRatio = ({
  type,
  ratio,
  amount,
  token,
}: {
  type: keyof typeof VoteOption;
  ratio: string;
  amount: string;
  token: string;
}) => (
  <Box
    py={2}
    px={4}
    border="1px solid"
    borderRadius="md"
    borderColor={useColorModeValue('gray.200', 'gray.900')}
    bgColor={useColorModeValue('whiteAlpha.800', 'gray.800')}
    w="200px"
  >
    <Text color={VoteColor[type]} fontWeight="bold">
      {type} {ratio}
    </Text>
    <Text
      fontSize="sm"
      fontWeight="semibold"
      color={useColorModeValue('gray.600', 'gray.400')}
    >
      {amount} {token}
    </Text>
  </Box>
);

const VoteResult = ({ voteOption }: { voteOption: number }) => {
  let optionConfig: { color: string; icon: IconType; option: string } = {
    color: VoteColor.YES,
    icon: AiFillCheckCircle,
    option: 'Yes',
  };

  switch (voteOption) {
    case VoteType.VOTE_OPTION_YES:
      break;
    case VoteType.VOTE_OPTION_NO:
      optionConfig = {
        color: VoteColor.NO,
        icon: AiFillCloseCircle,
        option: 'No',
      };
      break;
    case VoteType.VOTE_OPTION_NO_WITH_VETO:
      optionConfig = {
        color: VoteColor.NWV,
        icon: AiFillCloseCircle,
        option: 'NoWithVeto',
      };
      break;
    case VoteType.VOTE_OPTION_ABSTAIN:
      optionConfig = {
        color: VoteColor.ABSTAIN,
        icon: AiFillMinusCircle,
        option: 'Abstain',
      };
      break;
    default:
      break;
  }

  return (
    <>
      <Text
        fontSize="sm"
        fontWeight="semibold"
        color={useColorModeValue('gray.600', 'gray.400')}
      >
        You Voted
      </Text>
      <Flex color={optionConfig.color} alignItems="center" gap="2px">
        <Icon
          as={optionConfig.icon}
          fontSize="lg"
          transform="translateY(1px)"
        />
        <Text fontSize="sm" fontWeight="bold">
          {optionConfig.option}
        </Text>
      </Flex>
    </>
  );
};

const NewLineText = ({ text }: { text: string }) => {
  let count = 0;
  return (
    <>
      {text.split('\\n').map((str) => (
        <Box lineHeight="taller" fontSize="sm" key={count++}>
          <ReactMarkdown linkTarget="_blank" className="markdown-text">
            {str}
          </ReactMarkdown>
        </Box>
      ))}
    </>
  );
};

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
  const [option, setOption] = useState<number>();
  const [showMore, setShowMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    isOpen: isVoteOptionsOpen,
    onOpen: onVoteOptionsOpen,
    onClose: onVoteOptionsClose,
  } = useDisclosure();
  const toast = useToast();
  const { colorMode } = useColorMode();

  const coin = getCoin(chainName);
  const exponent = getExponent(chainName);
  const { address, getSigningStargateClient } = useChain(chainName);

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

  const isVoted = !!(votes && votes[proposal.proposalId.toString()]);

  const isDepositPeriod =
    proposal.status === proposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD;

  const isVotingPeriod =
    proposal.status === proposalStatus.PROPOSAL_STATUS_VOTING_PERIOD;

  const turnout = totalVotes / Number(bondedTokens);

  const minStakedTokens =
    quorum && exponentiate(quorum * Number(bondedTokens), -exponent).toFixed(6);

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

  const showToast = (code: number) => {
    toast({
      title: `Transaction ${code === 0 ? 'successful' : 'failed'}`,
      status: code === 0 ? 'success' : 'error',
      duration: 3000,
      isClosable: true,
      position: 'top-right',
    });
  };

  const handleConfirmClick = async () => {
    setIsLoading(true);

    const stargateClient = await getSigningStargateClient();

    if (!stargateClient || !address || !option) {
      console.error('stargateClient/address undefined or option not selected');
      return;
    }

    const { vote: createVoteMsg } =
      cosmos.gov.v1beta1.MessageComposer.fromPartial;

    const msg = createVoteMsg({
      option,
      voter: address,
      proposalId: proposal.proposalId,
    });

    const fee: StdFee = {
      amount: [
        {
          denom: coin.base,
          amount: '1000',
        },
      ],
      gas: '86721',
    };

    try {
      const res = await stargateClient.signAndBroadcast(address, [msg], fee);
      stargateClient.disconnect();

      showToast(res.code);
      setIsLoading(false);
      updateVotes();
      onVoteOptionsClose();
    } catch (error) {
      console.error(error);
      stargateClient.disconnect();
      showToast(TransactionResult.Failed);
      setIsLoading(false);
    }
  };

  const checkIfDisable = (option: number) => {
    return isVoted
      ? votes[proposal.proposalId.toString()] === option
        ? true
        : false
      : false;
  };

  return (
    <>
      <Modal
        isOpen={isVoteOptionsOpen}
        onClose={() => {
          onVoteOptionsClose();
          setOption(undefined);
        }}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mr={4}>
            {getTitleFromDecoded(decodeUint8Arr(proposal.content?.value))}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RadioGroup onChange={(e) => setOption(Number(e))}>
              <Stack>
                <Radio
                  colorScheme="blue"
                  size="lg"
                  value={VoteType.VOTE_OPTION_YES.toString()}
                  isDisabled={checkIfDisable(VoteType.VOTE_OPTION_YES)}
                >
                  Yes
                </Radio>
                <Radio
                  colorScheme="red"
                  size="lg"
                  value={VoteType.VOTE_OPTION_NO.toString()}
                  isDisabled={checkIfDisable(VoteType.VOTE_OPTION_NO)}
                >
                  No
                </Radio>
                <Radio
                  colorScheme="red"
                  size="lg"
                  value={VoteType.VOTE_OPTION_NO_WITH_VETO.toString()}
                  isDisabled={checkIfDisable(VoteType.VOTE_OPTION_NO_WITH_VETO)}
                >
                  No with Veto
                </Radio>
                <Radio
                  colorScheme="gray"
                  size="lg"
                  value={VoteType.VOTE_OPTION_ABSTAIN.toString()}
                  isDisabled={checkIfDisable(VoteType.VOTE_OPTION_ABSTAIN)}
                >
                  Abstain
                </Radio>
              </Stack>
            </RadioGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              onClick={handleConfirmClick}
              disabled={!option || isLoading}
              isLoading={isLoading}
            >
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

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
              {isVoted && (
                <VoteResult
                  voteOption={votes[proposal.proposalId.toString()]}
                />
              )}
            </Flex>
            <Text>{`#${proposal.proposalId} ${getTitleFromDecoded(
              decodeUint8Arr(proposal.content?.value)
            )}`}</Text>
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
                disabled={!isVotingPeriod}
                colorScheme="blue"
                w="140px"
                onClick={onVoteOptionsOpen}
              >
                {isVoted ? 'Edit Vote' : 'Vote'}
              </Button>
            </Flex>

            <Center my={4}></Center>

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

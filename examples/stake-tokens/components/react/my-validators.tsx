import {
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Box,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
  Text,
  Image,
  useColorMode,
} from '@chakra-ui/react';
import { Token } from './stats';
import { IoArrowForward } from 'react-icons/io5';
import {
  ValidatorInfo,
  ValidatorDesc,
  DelegateWarning,
  StatBox,
  UndelegateWarning,
  useInputBox,
  useTransactionToast,
} from './delegate-modal';
import { exponentiate, getExponent } from './staking';
import { decodeCosmosSdkDecFromProto, StdFee } from '@cosmjs/stargate';
import { useState } from 'react';
import { cosmos } from 'interchain';
import { useWallet } from '@cosmos-kit/react';
import { getCoin } from '../../config';
import { MyValidator, TransactionResult } from '../types';
import type {
  Validator,
  DelegationResponse as Delegation,
} from 'interchain/types/codegen/cosmos/staking/v1beta1/staking';
import type { DelegationDelegatorReward as Reward } from 'interchain/types/codegen/cosmos/distribution/v1beta1/distribution';

const MyValidators = ({
  validators,
  allValidator,
  delegations,
  rewards,
  balance,
  updateData,
}: {
  validators: Validator[];
  allValidator: Validator[];
  delegations: Delegation[];
  rewards: Reward[];
  balance: number;
  updateData: () => void;
}) => {
  const { getSigningStargateClient, address, currentChainName } = useWallet();

  const [isDelegating, setIsDelegating] = useState(false);
  const [isUndelegating, setIsUndelegating] = useState(false);
  const [isRedelegating, setIsRedelegating] = useState(false);
  const [currentValidator, setCurrentValidator] = useState<MyValidator>();
  const [selectedValidator, setSelectedValidator] = useState<Validator>();

  const coin = getCoin(currentChainName);
  const exp = getExponent(currentChainName);

  const { colorMode } = useColorMode();
  const { showToast } = useTransactionToast();

  const {
    renderInputBox: renderDelegateInputBox,
    amount: delegateAmount,
    setAmount: setDelegateAmount,
  } = useInputBox(balance);

  const {
    renderInputBox: renderUndelegateInputBox,
    amount: undelegateAmount,
    setAmount: setUndelegateAmount,
    setMax: setMaxUndelegateAmount,
  } = useInputBox();

  const {
    renderInputBox: renderRedelegateInputBox,
    amount: redelegateAmount,
    setAmount: setRedelegateAmount,
    setMax: setMaxRedelegateAmount,
  } = useInputBox();

  const {
    isOpen: isValidatorModalOpen,
    onOpen: onValidatorModalOpen,
    onClose: onValidatorModalClose,
  } = useDisclosure();

  const {
    isOpen: isDelegateModalOpen,
    onOpen: onDelegateModalOpen,
    onClose: onDelegateModalClose,
  } = useDisclosure();

  const {
    isOpen: isUndelegateModalOpen,
    onOpen: onUndelegateModalOpen,
    onClose: onUndelegateModalClose,
  } = useDisclosure();

  const {
    isOpen: isSelectValidatorModalOpen,
    onOpen: onSelectValidatorModalOpen,
    onClose: onSelectValidatorModalClose,
  } = useDisclosure();

  const {
    isOpen: isRedelegateModalOpen,
    onOpen: onRedelegateModalOpen,
    onClose: onRedelegateModalClose,
  } = useDisclosure();

  const myValidators = validators.map((validator: Validator) => {
    const delegation = delegations.filter(
      (d) => d?.delegation?.validatorAddress === validator?.operatorAddress
    )[0];

    const delegatorReward = rewards.filter(
      (r) => r.validatorAddress === validator?.operatorAddress
    )[0];

    const reward = delegatorReward.reward.find(
      (item) => item.denom === coin.base
    );

    const rewardAmount =
      delegatorReward.reward.length > 0
        ? decodeCosmosSdkDecFromProto(reward ? reward.amount : '0').toString()
        : 0;

    return {
      details: validator?.description?.details,
      name: validator?.description?.moniker,
      address: validator.operatorAddress,
      staked: exponentiate(delegation.balance!.amount, -exp),
      reward: Number(exponentiate(rewardAmount, -exp).toFixed(6)),
    };
  });

  const closeDelegateModal = () => {
    setDelegateAmount('');
    setIsDelegating(false);
    onDelegateModalClose();
  };

  const closeUndelegateModal = () => {
    setUndelegateAmount('');
    setIsUndelegating(false);
    onUndelegateModalClose();
  };

  const closeRedelegateModal = () => {
    setRedelegateAmount('');
    setIsRedelegating(false);
    onRedelegateModalClose();
  };

  const onDelegateClick = async () => {
    setIsDelegating(true);

    const stargateClient = await getSigningStargateClient();

    if (!stargateClient || !address || !currentValidator?.address) {
      console.error('stargateClient undefined or address undefined.');
      return;
    }

    const { delegate } = cosmos.staking.v1beta1.MessageComposer.fromPartial;

    const amountToDelegate = (Number(delegateAmount) * 10 ** exp).toString();

    const msg = delegate({
      delegatorAddress: address,
      validatorAddress: currentValidator.address,
      amount: {
        amount: amountToDelegate,
        denom: coin.base,
      },
    });

    const fee: StdFee = {
      amount: [
        {
          denom: coin.base,
          amount: '1000',
        },
      ],
      gas: '205559',
    };

    try {
      const { code } = await stargateClient.signAndBroadcast(
        address,
        [msg],
        fee
      );

      stargateClient.disconnect();
      showToast(code);
      setIsDelegating(false);
      onValidatorModalClose();
      updateData();

      // delay the modal close for 1sec to improve the visual effect
      setTimeout(() => {
        closeDelegateModal();
      }, 1000);
    } catch (error) {
      console.log(error);
      stargateClient.disconnect();
      showToast(TransactionResult.Failed);
      setIsDelegating(false);
    }
  };

  const onUndelegateClick = async () => {
    setIsUndelegating(true);

    const stargateClient = await getSigningStargateClient();

    if (!stargateClient || !address || !currentValidator?.address) {
      console.error('stargateClient undefined or address undefined.');
      return;
    }

    const { undelegate } = cosmos.staking.v1beta1.MessageComposer.fromPartial;

    const amountToUndelegate = (
      Number(undelegateAmount) *
      10 ** exp
    ).toString();

    const msg = undelegate({
      delegatorAddress: address,
      validatorAddress: currentValidator.address,
      amount: {
        amount: amountToUndelegate,
        denom: coin.base,
      },
    });

    const fee: StdFee = {
      amount: [
        {
          denom: coin.base,
          amount: '1000',
        },
      ],
      gas: '238125',
    };

    try {
      const { code } = await stargateClient.signAndBroadcast(
        address,
        [msg],
        fee
      );

      stargateClient.disconnect();
      showToast(code);
      setIsUndelegating(false);
      onValidatorModalClose();
      updateData();

      setTimeout(() => {
        closeUndelegateModal();
      }, 1000);
    } catch (error) {
      console.log(error);
      stargateClient.disconnect();
      showToast(TransactionResult.Failed);
      setIsUndelegating(false);
    }
  };

  const onRedelegateClick = async () => {
    setIsRedelegating(true);

    const stargateClient = await getSigningStargateClient();

    if (
      !stargateClient ||
      !address ||
      !currentValidator?.address ||
      !selectedValidator?.operatorAddress
    ) {
      console.error('stargateClient undefined or address undefined.');
      return;
    }

    const { beginRedelegate } =
      cosmos.staking.v1beta1.MessageComposer.fromPartial;

    const amountToRedelegate = (
      Number(redelegateAmount) *
      10 ** exp
    ).toString();

    const msg = beginRedelegate({
      delegatorAddress: address,
      validatorSrcAddress: currentValidator.address,
      validatorDstAddress: selectedValidator.operatorAddress,
      amount: {
        denom: coin.base,
        amount: amountToRedelegate,
      },
    });

    const fee: StdFee = {
      amount: [
        {
          denom: coin.base,
          amount: '1000',
        },
      ],
      gas: '355188',
    };

    try {
      const { code } = await stargateClient.signAndBroadcast(
        address,
        [msg],
        fee
      );

      stargateClient.disconnect();
      showToast(code);
      setIsRedelegating(false);
      updateData();

      setTimeout(() => {
        closeRedelegateModal();
      }, 1000);
    } catch (error) {
      console.log(error);
      stargateClient.disconnect();
      showToast(TransactionResult.Failed);
      setIsRedelegating(false);
    }
  };

  return (
    <>
      <Heading as="h4" size="md" mt={12} mb={6}>
        My Validators
      </Heading>

      <Modal
        isOpen={isValidatorModalOpen}
        onClose={onValidatorModalClose}
        size="2xl"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Validator</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <ValidatorInfo
              imgUrl="https://wallet.keplr.app/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2Fkeybase_processed_uploads%2F909034c1d36c1d1f3e9191f668007805_360_360.jpeg&w=64&q=75"
              name={currentValidator?.name || ''}
              commission={5}
              apr={22.08}
            />
            <ValidatorDesc description={currentValidator?.details || ''} />

            <StatBox
              label="Your Delegation"
              number={currentValidator?.staked}
              token={coin.symbol}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="gray" onClick={onUndelegateModalOpen} mr={4}>
              Undelegate
            </Button>
            <Button
              colorScheme="gray"
              onClick={() => {
                onSelectValidatorModalOpen();
                onValidatorModalClose();
              }}
              mr={4}
            >
              Redelegate
            </Button>
            <Button colorScheme="primary" onClick={onDelegateModalOpen}>
              Delegate
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={isDelegateModalOpen}
        onClose={closeDelegateModal}
        size="2xl"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delegate</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <ValidatorInfo
              imgUrl="https://wallet.keplr.app/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2Fkeybase_processed_uploads%2F909034c1d36c1d1f3e9191f668007805_360_360.jpeg&w=64&q=75"
              name={currentValidator?.name || ''}
              commission={5}
              apr={22.08}
            />
            <DelegateWarning unbondingDays={21} />
            <Stack direction="row" spacing={4} my={4}>
              <StatBox
                label="Your Delegation"
                number={currentValidator?.staked}
                token={coin.symbol}
              />
              <StatBox
                label="Available to Delegate"
                number={balance}
                token={coin.symbol}
              />
            </Stack>
            {renderDelegateInputBox('Amount to Delegate', coin.symbol)}
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="primary"
              onClick={onDelegateClick}
              isLoading={isDelegating}
              disabled={!delegateAmount}
            >
              Delegate
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={isUndelegateModalOpen}
        onClose={closeUndelegateModal}
        size="2xl"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Undelegate</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <ValidatorInfo
              imgUrl="https://wallet.keplr.app/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2Fkeybase_processed_uploads%2F909034c1d36c1d1f3e9191f668007805_360_360.jpeg&w=64&q=75"
              name={currentValidator?.name || ''}
              commission={5}
              apr={22.08}
            />
            <Stack direction="column" spacing={4}>
              <UndelegateWarning unbondingDays={21} />
              <StatBox
                label="Your Delegation"
                number={currentValidator?.staked}
                token={coin.symbol}
              />
              {renderUndelegateInputBox('Amount to Undelegate', coin.symbol)}
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="primary"
              onClick={onUndelegateClick}
              isLoading={isUndelegating}
              disabled={!undelegateAmount}
            >
              Undelegate
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={isSelectValidatorModalOpen}
        onClose={onSelectValidatorModalClose}
        size="4xl"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Redelegate to</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <TableContainer maxH={600} overflowY="scroll">
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Validator</Th>
                    <Th>Voting Power</Th>
                    <Th>Commission</Th>
                    <Th>APR</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {allValidator.map((validator: Validator, index: number) => (
                    <Tr
                      key={validator?.description?.moniker}
                      onClick={() => {
                        onRedelegateModalOpen();
                        onSelectValidatorModalClose();
                        setSelectedValidator(validator);
                      }}
                      _hover={{
                        background:
                          colorMode === 'light' ? 'gray.100' : 'gray.800',
                        cursor: 'pointer',
                      }}
                    >
                      <Td>
                        <Box
                          display="flex"
                          alignItems="center"
                          maxWidth={280}
                          overflowX="hidden"
                        >
                          <Text mr={4}>{index + 1}</Text>
                          {/* <Image
                            borderRadius="full"
                            boxSize="30px"
                            src={validator.imgUrl}
                            alt={validator.description.moniker}
                            mr={2}
                          /> */}
                          <Text>{validator?.description?.moniker}</Text>
                        </Box>
                      </Td>
                      <Td>
                        {/* {validator.voting} <Token color="blackAlpha.800" /> */}
                        10,000,000&nbsp;
                        <Token color="blackAlpha.800" token={coin.symbol} />
                      </Td>
                      {/* <Td>{validator.commission}</Td> */}
                      <Td>5%</Td>
                      <Td>
                        <Box width="100%" display="flex" alignItems="center">
                          {/* <Text>{validator.apr}</Text> */}
                          <Text>22.04%</Text>
                        </Box>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={isRedelegateModalOpen}
        onClose={closeRedelegateModal}
        size="2xl"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />

          <ModalBody>
            <Stack direction="row" mt={8} mb={2}>
              <Text>From </Text>
              <Text size="lg" fontWeight="bold">
                {currentValidator?.name}
              </Text>
            </Stack>
            <StatBox
              label="Your Delegation"
              number={currentValidator?.staked}
              token={coin.symbol}
            />

            <Stack direction="row" mt={8} mb={2}>
              <Text>To</Text>
              <Text size="lg" fontWeight="bold">
                {selectedValidator?.description?.moniker}
              </Text>
            </Stack>
            {renderRedelegateInputBox('Amount to Redelegate', coin.symbol)}
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="primary"
              onClick={onRedelegateClick}
              isLoading={isRedelegating}
              disabled={!redelegateAmount}
            >
              Redelegate
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Validator</Th>
              <Th>Amount Staked</Th>
              <Th>Claimable Rewards</Th>
            </Tr>
          </Thead>
          <Tbody>
            {myValidators.map((validator, index) => (
              <Tr key={validator.name}>
                <Td>
                  <Box
                    display="flex"
                    alignItems="center"
                    maxWidth={280}
                    overflowX="hidden"
                  >
                    <Text mr={4}>{index + 1}</Text>
                    {/* <Image
                      borderRadius="full"
                      boxSize="30px"
                      src={validator.imgUrl}
                      alt={validator.name}
                      mr={2}
                    /> */}
                    <Text>{validator.name}</Text>
                  </Box>
                </Td>
                <Td>
                  {validator.staked}&nbsp;
                  <Token color="blackAlpha.800" token={coin.symbol} />
                </Td>
                <Td>
                  <Box width="100%" display="flex" alignItems="center">
                    <span>
                      {validator.reward}&nbsp;
                      <Token color="blackAlpha.800" token={coin.symbol} />
                    </span>
                    <Button
                      variant="ghost"
                      ml="auto"
                      onClick={() => {
                        setCurrentValidator(validator);
                        setMaxUndelegateAmount(validator.staked);
                        setMaxRedelegateAmount(validator.staked);
                        onValidatorModalOpen();
                      }}
                      color={
                        colorMode === 'light' ? 'purple.600' : 'purple.200'
                      }
                    >
                      Manage
                      <Icon as={IoArrowForward} />
                    </Button>
                  </Box>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MyValidators;

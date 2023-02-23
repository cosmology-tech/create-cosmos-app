import { Token } from './stats';
import { IoArrowForward } from 'react-icons/io5';
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
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Stack,
  Text,
  Image,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import {
  DelegateWarning,
  StatBox,
  useInputBox,
  useTransactionToast,
  ValidatorDesc,
  ValidatorInfo,
} from './delegate-modal';
import { useState } from 'react';
import { exponentiate, getExponent } from './staking';
import { useChain } from '@cosmos-kit/react';
import { cosmos } from 'interchain';
import { getCoin } from '../../config';
import { StdFee } from '@cosmjs/amino';
import type {
  Validator,
  DelegationResponse as Delegation,
} from 'interchain/types/codegen/cosmos/staking/v1beta1/staking';
import { TransactionResult } from '../types';
import { ChainName } from '@cosmos-kit/core';

export const Thumbnail = ({
  identity,
  name,
  thumbnailUrl,
}: {
  identity: string | undefined;
  name: string | undefined;
  thumbnailUrl: string;
}) => {
  return (
    <>
      {identity && thumbnailUrl ? (
        <Image
          borderRadius="full"
          boxSize="30px"
          src={thumbnailUrl}
          alt={name}
          mr={2}
        />
      ) : (
        <Center boxSize="30px" bgColor="gray.200" borderRadius="full" mr={2}>
          {name && name.trim().slice(0, 1).toUpperCase()}
        </Center>
      )}
    </>
  );
};

const AllValidators = ({
  validators,
  balance,
  delegations,
  updateData,
  unbondingDays,
  chainName,
  thumbnails,
}: {
  validators: Validator[];
  balance: number;
  delegations: Delegation[];
  updateData: () => void;
  unbondingDays: number;
  chainName: ChainName;
  thumbnails: {
    [key: string]: string;
  };
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getSigningStargateClient, address } = useChain(chainName);
  const { renderInputBox, amount, setAmount } = useInputBox(balance);
  const [currentValidator, setCurrentValidator] = useState<Validator>();
  const [isDelegating, setIsDelegating] = useState<boolean>(false);

  const coin = getCoin(chainName);
  const exp = getExponent(chainName);

  const { colorMode } = useColorMode();
  const { showToast } = useTransactionToast();

  const getDelegation = (validatorAddr: string, delegations: Delegation[]) => {
    const delegation = delegations.filter(
      (d) => d?.delegation?.validatorAddress === validatorAddr
    );

    if (delegation.length === 1) {
      return exponentiate(delegation[0].balance!.amount, -exp);
    }

    return 0;
  };

  const onModalClose = () => {
    setAmount('');
    setIsDelegating(false);
    onClose();
  };

  const onDelegateClick = async () => {
    setIsDelegating(true);

    const stargateClient = await getSigningStargateClient();

    if (!stargateClient || !address || !currentValidator?.operatorAddress) {
      console.error('stargateClient undefined or address undefined.');
      return;
    }

    const { delegate } = cosmos.staking.v1beta1.MessageComposer.fromPartial;

    const amountToDelegate = (Number(amount) * 10 ** exp).toString();

    const msg = delegate({
      delegatorAddress: address,
      validatorAddress: currentValidator.operatorAddress,
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
      updateData();

      setTimeout(() => {
        onModalClose();
      }, 1000);
    } catch (error) {
      console.log(error);
      stargateClient.disconnect();
      showToast(TransactionResult.Failed);
      setIsDelegating(false);
    }
  };

  return (
    <>
      <Heading as="h4" size="md" mt={12} mb={6}>
        All Validators
      </Heading>

      <Modal isOpen={isOpen} onClose={onModalClose} size="2xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Validator</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <ValidatorInfo
              imgUrl={
                currentValidator
                  ? thumbnails[currentValidator?.operatorAddress]
                  : ''
              }
              name={currentValidator?.description?.moniker || ''}
              commission={
                currentValidator?.commission?.commissionRates?.rate
                  ? exponentiate(
                      currentValidator.commission.commissionRates.rate,
                      -16
                    ).toFixed(0)
                  : 0
              }
              apr={22.08}
            />
            <ValidatorDesc
              description={currentValidator?.description?.details || ''}
            />
            <DelegateWarning unbondingDays={unbondingDays} />
            <Stack direction="row" spacing={4} my={4}>
              <StatBox
                label="Your Delegation"
                token={coin.symbol}
                number={getDelegation(
                  currentValidator?.operatorAddress || '',
                  delegations
                )}
              />
              <StatBox
                label="Available to Delegate"
                number={balance}
                token={coin.symbol}
              />
            </Stack>
            {renderInputBox('Amount to Delegate', coin.symbol)}
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="primary"
              onClick={onDelegateClick}
              disabled={!amount}
              isLoading={isDelegating}
            >
              Delegate
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <TableContainer>
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
            {validators.map((validator: Validator, index: number) => (
              <Tr key={validator?.description?.moniker}>
                <Td>
                  <Box
                    display="flex"
                    alignItems="center"
                    maxWidth={280}
                    overflowX="hidden"
                  >
                    <Text mr={4}>{index + 1}</Text>
                    <Thumbnail
                      identity={validator.description?.identity}
                      name={validator.description?.moniker}
                      thumbnailUrl={thumbnails[validator.operatorAddress]}
                    />
                    <Text>{validator?.description?.moniker}</Text>
                  </Box>
                </Td>
                <Td>
                  {Math.floor(
                    exponentiate(validator.tokens, -exp)
                  ).toLocaleString()}
                  &nbsp;
                  <Token color="blackAlpha.800" token={coin.symbol} />
                </Td>
                <Td>
                  {validator.commission?.commissionRates?.rate &&
                    exponentiate(
                      validator.commission.commissionRates.rate,
                      -16
                    ).toFixed(0)}
                  %
                </Td>
                <Td>
                  <Box width="100%" display="flex" alignItems="center">
                    {/* <Text>{validator.apr}</Text> */}
                    <Text>22.04%</Text>
                    <Button
                      variant="ghost"
                      ml="auto"
                      onClick={() => {
                        onOpen();
                        setCurrentValidator(validator);
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

export default AllValidators;

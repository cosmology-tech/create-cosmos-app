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
import { useWallet } from '@cosmos-kit/react';
import { cosmos } from 'interchain';
import { getCoin } from '../../config';
import { StdFee } from '@cosmjs/amino';
import type {
  Validator,
  DelegationResponse as Delegation,
} from 'interchain/types/codegen/cosmos/staking/v1beta1/staking';
import { TransactionResult } from '../types';

const AllValidators = ({
  validators,
  balance,
  delegations,
  updateData,
}: {
  validators: Validator[];
  balance: number;
  delegations: Delegation[];
  updateData: () => void;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getSigningStargateClient, address, currentChainName } = useWallet();
  const { renderInputBox, amount, setAmount } = useInputBox(balance);
  const [currentValidator, setCurrentValidator] = useState<Validator>();
  const [isDelegating, setIsDelegating] = useState<boolean>(false);

  const coin = getCoin(currentChainName);
  const exp = getExponent(currentChainName);

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
              imgUrl="https://wallet.keplr.app/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2Fkeybase_processed_uploads%2F909034c1d36c1d1f3e9191f668007805_360_360.jpeg&w=64&q=75"
              name={currentValidator?.description?.moniker || ''}
              commission={5}
              apr={22.08}
            />
            <ValidatorDesc
              description={currentValidator?.description?.details || ''}
            />
            <DelegateWarning unbondingDays={21} />
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

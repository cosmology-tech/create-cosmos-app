import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  UseDisclosureReturn,
  Box,
  Text,
  Flex,
  Center,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import AmountInput from './amount-input';
import { ChainLogo } from './osmosis-assets';
import { HiOutlineClock } from 'react-icons/hi';
import { LargeButton } from './buttons';
import { PriceHash, TransactionResult, Transfer, TransferInfo } from '../types';
import { useChain, useManager } from '@cosmos-kit/react';
import BigNumber from 'bignumber.js';
import { ChainName } from '@cosmos-kit/core';
import { StdFee } from '@cosmjs/amino';
import { useIbcAssets, useTransactionToast } from '../../hooks';

const shortenAddress = (address: string) => {
  return address.slice(0, 9) + '...' + address.slice(-9);
};

interface IProps {
  prices: PriceHash;
  transferInfo: TransferInfo;
  modalControl: UseDisclosureReturn;
  updateBalances: ({ address }: { address: string }) => void;
  selectedChainName: ChainName;
}

const TransferModal: React.FC<IProps> = ({
  prices,
  modalControl,
  transferInfo,
  updateBalances,
  selectedChainName,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { getIbcInfo, symbolToDenom, getExponentByDenom } =
    useIbcAssets(selectedChainName);

  const {
    type: transferType,
    token: transferToken,
    destChainName,
    sourceChainName,
  } = transferInfo;

  const {
    address: sourceAddress,
    connect: connectSourceChain,
    chain: sourceChainInfo,
    getSigningStargateClient,
  } = useChain(sourceChainName);

  const {
    address: destAddress,
    connect: connectDestChain,
    chain: destChainInfo,
  } = useChain(destChainName);

  const { showToast } = useTransactionToast();
  const { getChainLogo } = useManager();

  useEffect(() => {
    if (!modalControl.isOpen) return;
    if (!sourceAddress) connectSourceChain();
    if (!destAddress) connectDestChain();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalControl.isOpen]);

  const closeModal = () => {
    modalControl.onClose();
    setInputValue('');
  };

  const handleClick = async () => {
    if (!sourceAddress || !destAddress) return;
    setIsLoading(true);

    const transferAmount = new BigNumber(inputValue)
      .shiftedBy(getExponentByDenom(symbolToDenom(transferToken.symbol)))
      .toString();

    const currentTime = Math.floor(Date.now() / 1000);
    const timeoutTime = currentTime + 300; // 5 minutes

    const client = await getSigningStargateClient();

    const { sourcePort, sourceChannel } = getIbcInfo(
      sourceChainName,
      destChainName
    );

    const fee: StdFee = {
      amount: [
        {
          denom: transferToken.denom,
          amount: '1000',
        },
      ],
      gas: '250000',
    };

    const token = {
      denom: transferToken.denom,
      amount: transferAmount,
    };

    client
      .sendIbcTokens(
        sourceAddress,
        destAddress,
        token,
        sourcePort,
        sourceChannel,
        undefined,
        timeoutTime,
        fee
      )
      .then((res) => {
        if (res.code === TransactionResult.Success) {
          showToast(res.code);
          updateBalances({
            address:
              transferType === Transfer.Deposit ? destAddress : sourceAddress,
          });
          closeModal();
        } else {
          throw Error('transaction failed');
        }
      })
      .catch((err) => {
        console.log(err);
        showToast(TransactionResult.Failed, err);
      })
      .finally(() => {
        client.disconnect();
        setIsLoading(false);
      });
  };

  const titleColor = useColorModeValue('#697584', '#A7B4C2');
  const statColor = useColorModeValue('#2C3137', '#EEF2F8');
  const arrowColor = useColorModeValue('#4A5568', '#A7B4C2');
  const bgColor = useColorModeValue('#EEF2F8', '#1D2024');
  const cancelColor = useColorModeValue('#697584', '#EEF2F8');

  return (
    <Modal
      isOpen={modalControl.isOpen}
      onClose={closeModal}
      size="lg"
      isCentered
    >
      <ModalOverlay />
      <ModalContent bg={useColorModeValue('#FFF', '#2C3137')}>
        <ModalHeader
          fontWeight="600"
          fontSize="20px"
          color={statColor}
          py={0}
          pt="24px"
          mb="26px"
        >
          {transferInfo.type}&nbsp;
          {transferInfo.token.symbol}
        </ModalHeader>
        <ModalCloseButton color={titleColor} size="lg" mt="10px" />
        <ModalBody>
          <Flex justifyContent="space-between" alignItems="flex-end" mb="24px">
            <ChainAddress
              type="sourceChain"
              address={sourceAddress}
              chainName={sourceChainInfo.pretty_name}
              logoUrl={getChainLogo(transferInfo.sourceChainName)}
            />
            <Center h="54px">
              <ArrowForwardIcon boxSize={5} color={arrowColor} />
            </Center>
            <ChainAddress
              type="destChain"
              address={destAddress}
              chainName={destChainInfo.pretty_name}
              logoUrl={getChainLogo(transferInfo.destChainName)}
            />
          </Flex>

          <AmountInput
            prices={prices}
            address={sourceAddress}
            inputState={{ inputValue, setInputValue }}
            transferInfo={transferInfo}
            selectedChainName={selectedChainName}
          />

          <Flex
            h="40px"
            bg={bgColor}
            borderRadius="6px"
            p="12px"
            alignItems="center"
          >
            <Icon as={HiOutlineClock} w="20px" h="20px" mr="12px" />
            <Text
              fontWeight="400"
              fontSize="14px"
              color={statColor}
              lineHeight="shorter"
            >
              Estimated time:&nbsp;
              <span style={{ fontWeight: 600 }}>20 seconds</span>
            </Text>
          </Flex>
        </ModalBody>

        <ModalFooter flexDir="column" pt="0" mt="12px">
          <LargeButton
            btnText="Transfer"
            handleClick={handleClick}
            isLoading={isLoading}
            width="100%"
            disabled={
              !inputValue ||
              new BigNumber(inputValue).isEqualTo(0) ||
              isNaN(Number(inputValue))
            }
          />
          <Text
            fontWeight="600"
            fontSize="14px"
            color={cancelColor}
            mt="18px"
            mb="10px"
            lineHeight="shorter"
            cursor="pointer"
            onClick={closeModal}
          >
            Cancel
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const ChainAddress = ({
  type,
  chainName,
  logoUrl,
  address,
}: {
  type: 'sourceChain' | 'destChain';
  chainName: string;
  logoUrl: string | undefined;
  address: string | undefined;
}) => {
  const titleColor = useColorModeValue('#697584', '#A7B4C2');
  const bgColor = useColorModeValue('#EEF2F8', '#1D2024');

  return (
    <Box>
      <Text fontWeight="600" fontSize="14px" color={titleColor} mb="12px">
        {type === 'sourceChain' ? 'From' : 'To'} {chainName}
      </Text>
      <Flex
        w="216px"
        h="54px"
        bg={bgColor}
        borderRadius="6px"
        p="14px"
        alignItems="center"
      >
        <ChainLogo logoWidth="28px" url={logoUrl} />
        <Text fontWeight="400" fontSize="14px" color={titleColor} ml="8px">
          {address && shortenAddress(address)}
        </Text>
      </Flex>
    </Box>
  );
};

export default TransferModal;

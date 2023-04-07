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
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import AmountInput from './amount-input';
import { ChainLogo } from './osmosis-assets';
import { HiOutlineClock } from 'react-icons/hi';
import { LargeButton } from './buttons';
import { PriceHash, TransactionResult, Transfer, TransferInfo } from '../types';
import { useChain, useManager } from '@cosmos-kit/react';
import BigNumber from 'bignumber.js';
import { ChainRecord } from '@cosmos-kit/core';
import { getExponentByDenom, symbolToOsmoDenom } from '../../utils';
import { ibc } from 'chain-registry';
import { StdFee } from '@cosmjs/amino';
import { useTransactionToast } from '../../hooks';

const shortenAddress = (address: string) => {
  return address.slice(0, 9) + '...' + address.slice(-9);
};

export const getSymbol = (chainRecord: ChainRecord) => {
  const symbol = chainRecord.assetList?.assets[0].symbol;
  if (!symbol) throw Error('symbol not found');
  return symbol;
};

export const getIbcInfo = (fromChainName: string, toChainName: string) => {
  let flipped = false;

  let ibcInfo = ibc.find(
    (i) =>
      i.chain_1.chain_name === fromChainName &&
      i.chain_2.chain_name === toChainName
  );

  if (!ibcInfo) {
    ibcInfo = ibc.find(
      (i) =>
        i.chain_1.chain_name === toChainName &&
        i.chain_2.chain_name === fromChainName
    );
    flipped = true;
  }

  if (!ibcInfo) {
    throw new Error('cannot find IBC info');
  }

  const key = flipped ? 'chain_2' : 'chain_1';
  const sourcePort = ibcInfo.channels[0][key].port_id;
  const sourceChannel = ibcInfo.channels[0][key].channel_id;

  return { sourcePort, sourceChannel };
};

interface IProps {
  prices: PriceHash;
  transferInfo: TransferInfo;
  modalControl: UseDisclosureReturn;
  updateBalances: ({ address }: { address: string }) => void;
}

const TransferModal: React.FC<IProps> = ({
  prices,
  modalControl,
  transferInfo,
  updateBalances,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
      .shiftedBy(getExponentByDenom(symbolToOsmoDenom(transferToken.symbol)))
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

  return (
    <Modal
      isOpen={modalControl.isOpen}
      onClose={closeModal}
      size="lg"
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          fontWeight="600"
          fontSize="20px"
          color="#2C3137"
          py={0}
          pt="24px"
          mb="26px"
        >
          {transferInfo.type}&nbsp;
          {transferInfo.token.symbol}
        </ModalHeader>
        <ModalCloseButton color="#697584" size="lg" mt="10px" />
        <ModalBody>
          <Flex justifyContent="space-between" alignItems="flex-end" mb="24px">
            <ChainAddress
              type="sourceChain"
              address={sourceAddress}
              chainName={sourceChainInfo.pretty_name}
              logoUrl={getChainLogo(transferInfo.sourceChainName)}
            />
            <Center h="54px">
              <ArrowForwardIcon boxSize={5} color="#4A5568" />
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
          />

          <Flex
            h="40px"
            bg="#EEF2F8"
            borderRadius="6px"
            p="12px"
            alignItems="center"
          >
            <Icon as={HiOutlineClock} w="20px" h="20px" mr="12px" />
            <Text
              fontWeight="400"
              fontSize="14px"
              color="#2C3137"
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
            color="#697584"
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
  return (
    <Box>
      <Text fontWeight="600" fontSize="14px" color="#697584" mb="12px">
        {type === 'sourceChain' ? 'From' : 'To'} {chainName}
      </Text>
      <Flex
        w="216px"
        h="54px"
        bg="#EEF2F8"
        borderRadius="6px"
        p="14px"
        alignItems="center"
      >
        <ChainLogo logoWidth="28px" url={logoUrl} />
        <Text fontWeight="400" fontSize="14px" color="#697584" ml="8px">
          {address && shortenAddress(address)}
        </Text>
      </Flex>
    </Box>
  );
};

export default TransferModal;

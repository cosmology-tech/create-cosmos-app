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
  Text,
  Flex,
  Center,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { ChainLogo } from './osmosis-assets';
import { HiOutlineClock } from 'react-icons/hi';
import { LargeButton } from './buttons';
import DropdownInput from './dropdown-input';
import {
  PrettyAsset,
  PriceHash,
  TransactionResult,
  Transfer,
  TransferInfo,
} from '../types';
import { useChain, useManager } from '@cosmos-kit/react';
import BigNumber from 'bignumber.js';
import { StdFee } from '@cosmjs/amino';
import { useIbcAssets, useTransactionToast } from '../../hooks';
import { ChainName } from '@cosmos-kit/core';

interface IProps {
  prices: PriceHash;
  assets: PrettyAsset[];
  modalControl: UseDisclosureReturn;
  updateBalances: ({ address }: { address: string }) => void;
  transferInfoState: {
    transferInfo: TransferInfo;
    setTransferInfo: React.Dispatch<
      React.SetStateAction<TransferInfo | undefined>
    >;
  };
  selectedChainName: ChainName;
}

const DropdownTransferModal: React.FC<IProps> = ({
  assets,
  prices,
  modalControl,
  transferInfoState,
  updateBalances,
  selectedChainName,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { symbolToDenom, getExponentByDenom, getIbcInfo } =
    useIbcAssets(selectedChainName);

  const { transferInfo, setTransferInfo } = transferInfoState;

  const {
    type: transferType,
    token: transferToken,
    destChainName,
    sourceChainName,
  } = transferInfo;

  const {
    address: sourceAddress,
    connect: connectSourceChain,
    getSigningStargateClient,
  } = useChain(sourceChainName);

  const { address: destAddress, connect: connectDestChain } =
    useChain(destChainName);

  const { getChainLogo } = useManager();
  const { showToast } = useTransactionToast();

  useEffect(() => {
    if (!modalControl.isOpen) return;
    if (!sourceAddress) connectSourceChain();
    if (!destAddress) connectDestChain();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [destAddress, sourceAddress, modalControl]);

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
  const cancelColor = useColorModeValue('#697584', '#EEF2F8');

  return (
    <Modal
      isOpen={modalControl.isOpen}
      onClose={closeModal}
      size="xl"
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
          {transferType}
        </ModalHeader>
        <ModalCloseButton color={titleColor} size="lg" mt="10px" />
        <ModalBody>
          {transferInfo && (
            <DropdownInput
              assets={assets}
              prices={prices}
              address={sourceAddress}
              transferInfo={transferInfo}
              setTransferInfo={setTransferInfo}
              inputState={{ inputValue, setInputValue }}
              selectedChainName={selectedChainName}
            />
          )}
          <Center mb="16px" mt="30px">
            {transferInfo && (
              <Flex gap="12px" alignItems="center">
                <ChainLogo
                  url={getChainLogo(transferInfo?.sourceChainName)}
                  logoWidth="50px"
                />
                <Center h="50px">
                  <ArrowForwardIcon boxSize={7} color={arrowColor} />
                </Center>
                <ChainLogo
                  url={getChainLogo(transferInfo?.destChainName)}
                  logoWidth="50px"
                />
              </Flex>
            )}
          </Center>
        </ModalBody>

        <ModalFooter flexDir="column" pt="0" mt="12px">
          <LargeButton
            btnContent={<BtnContent />}
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
            mb="4px"
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

const BtnContent = () => (
  <Flex alignItems="center">
    <Text fontWeight="600" fontSize="18px" lineHeight="22px" mr="12px">
      Transfer
    </Text>
    <Icon as={HiOutlineClock} w="20px" h="20px" mr="4px" />
    <Text fontWeight="400" fontSize="12px" lineHeight="14px">
      ≈ 20 seconds
    </Text>
  </Flex>
);

export default DropdownTransferModal;

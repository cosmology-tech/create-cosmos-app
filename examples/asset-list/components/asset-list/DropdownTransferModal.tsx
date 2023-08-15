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
import { ChainLogo } from './ChainAssetsList';
import { HiOutlineClock } from 'react-icons/hi';
import { LargeButton } from './Buttons';
import DropdownInput from './DropdownInput';
import { PrettyAsset, PriceHash, TransferInfo } from './types';
import { useChainWallet, useManager } from '@cosmos-kit/react';
import BigNumber from 'bignumber.js';
import { StdFee, coins } from '@cosmjs/amino';
import { useChainUtils, useTx } from '../../hooks';
import { ChainName } from '@cosmos-kit/core';
import { KeplrWalletName } from '@/config';
import { ibc } from 'osmo-query';

const { transfer } = ibc.applications.transfer.v1.MessageComposer.withTypeUrl;

interface IProps {
  prices: PriceHash;
  assets: PrettyAsset[];
  modalControl: UseDisclosureReturn;
  updateData: () => void;
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
  updateData,
  selectedChainName,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { symbolToDenom, getExponentByDenom, getIbcInfo } =
    useChainUtils(selectedChainName);

  const { transferInfo, setTransferInfo } = transferInfoState;

  const {
    type: transferType,
    token: transferToken,
    destChainName,
    sourceChainName,
  } = transferInfo;

  const { address: sourceAddress, connect: connectSourceChain } =
    useChainWallet(sourceChainName, KeplrWalletName);

  const { address: destAddress, connect: connectDestChain } = useChainWallet(
    destChainName,
    KeplrWalletName
  );

  const { getChainLogo } = useManager();
  const { tx } = useTx(sourceChainName);

  useEffect(() => {
    if (!modalControl.isOpen) return;
    if (!sourceAddress) connectSourceChain();
    if (!destAddress) connectDestChain();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [destAddress, sourceAddress, modalControl]);

  const closeModal = () => {
    modalControl.onClose();
    setInputValue('');
    setIsLoading(false);
  };

  const handleClick = async () => {
    if (!sourceAddress || !destAddress) return;
    setIsLoading(true);

    const transferAmount = new BigNumber(inputValue)
      .shiftedBy(getExponentByDenom(symbolToDenom(transferToken.symbol)))
      .toString();

    const { sourcePort, sourceChannel } = getIbcInfo(
      sourceChainName,
      destChainName
    );

    const fee: StdFee = {
      amount: coins('1000', transferToken.denom),
      gas: '250000',
    };

    const token = {
      denom: transferToken.denom,
      amount: transferAmount,
    };

    const stamp = Date.now();
    const timeoutInNanos = (stamp + 1.2e6) * 1e6;

    const msg = transfer({
      sourcePort,
      sourceChannel,
      sender: sourceAddress,
      receiver: destAddress,
      token,
      // @ts-ignore
      timeoutHeight: undefined,
      timeoutTimestamp: BigInt(timeoutInNanos),
    });

    await tx([msg], {
      fee,
      onSuccess: () => {
        updateData();
        closeModal();
      },
    });

    setIsLoading(false);
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

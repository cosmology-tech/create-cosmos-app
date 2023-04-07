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
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { ChainLogo, getChainName, getNativeDenom } from './osmosis-assets';
import { HiOutlineClock } from 'react-icons/hi';
import { LargeButton } from './buttons';
import DropdownInput from './dropdown-input';
import {
  PrettyAsset,
  PriceHash,
  TransactionResult,
  Transfer,
  TransferInfo,
  TransferValues,
} from '../types';
import { useChain, useManager } from '@cosmos-kit/react';
import { chainName as osmoChainName } from '../../config';
import BigNumber from 'bignumber.js';
import { StdFee } from '@cosmjs/amino';
import { useTransactionToast } from '../../hooks';
import { getExponentByDenom, symbolToOsmoDenom } from '../../utils';
import { getIbcInfo } from './transfer-modal';

const ZERO_AMOUNT = '0';

interface IProps {
  prices: PriceHash;
  assets: PrettyAsset[];
  modalControl: UseDisclosureReturn;
  updateBalances: ({ address }: { address: string }) => void;
  transferType: TransferValues;
}

const DropdownTransferModal: React.FC<IProps> = ({
  assets,
  prices,
  modalControl,
  transferType,
  updateBalances,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [transferInfo, setTransferInfo] = useState<TransferInfo>({
    token: assets[0],
    type: Transfer.Withdraw,
    sourceChainName: osmoChainName,
    destChainName: getChainName(assets[0].denom),
  });

  const { token: transferToken, destChainName, sourceChainName } = transferInfo;

  const {
    address: sourceAddress,
    connect: connectSourceChain,
    getSigningStargateClient,
  } = useChain(sourceChainName);

  const { address: destAddress, connect: connectDestChain } =
    useChain(destChainName);

  const { getChainLogo, getChainRecord } = useManager();
  const { showToast } = useTransactionToast();

  useEffect(() => {
    if (!modalControl.isOpen) return;
    if (!sourceAddress) connectSourceChain();
    if (!destAddress) connectDestChain();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [destAddress, sourceAddress, modalControl]);

  useEffect(() => {
    if (transferType === Transfer.Deposit) {
      const sourceChainName = getChainName(assets[0].denom);
      const sourceChainRecord = getChainRecord(sourceChainName);
      const sourceChainAssetDenom = getNativeDenom(sourceChainRecord);
      setTransferInfo({
        sourceChainName,
        type: Transfer.Deposit,
        destChainName: osmoChainName,
        token: {
          ...assets[0],
          displayAmount: ZERO_AMOUNT,
          dollarValue: ZERO_AMOUNT,
          amount: ZERO_AMOUNT,
          denom: sourceChainAssetDenom,
        },
      });
      return;
    }
    const destChainName = getChainName(assets[0].denom);
    setTransferInfo({
      sourceChainName: osmoChainName,
      type: Transfer.Withdraw,
      destChainName,
      token: assets[0],
    });
  }, [assets, transferType, getChainRecord]);

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
      size="xl"
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
          {transferType}
        </ModalHeader>
        <ModalCloseButton color="#697584" size="lg" mt="10px" />
        <ModalBody>
          {transferInfo && (
            <DropdownInput
              assets={assets}
              prices={prices}
              address={sourceAddress}
              transferInfo={transferInfo}
              setTransferInfo={setTransferInfo}
              inputState={{ inputValue, setInputValue }}
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
                  <ArrowForwardIcon boxSize={7} color="#4A5568" />
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
            color="#697584"
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

import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Flex,
  Center,
  NumberInput,
  NumberInputField,
  useMediaQuery,
  useColorModeValue,
} from '@chakra-ui/react';
import { LargeButton } from './ModalComponents';
import {
  convertDollarValueToShares,
  ExtendedPool,
  osmosisAssetsList,
} from '@/utils';
import { PriceHash } from '@/utils/types';
import BigNumber from 'bignumber.js';
import { osmosis } from 'osmo-query';
import { useChain } from '@cosmos-kit/react';
import { defaultChainName } from '@/config';
import { coins as aminoCoins } from '@cosmjs/amino';
import { Durations, useTx } from '@/hooks';
import { getSymbolByDenom } from '@chain-registry/utils';
import { CoinSymbol } from '@/utils/types';

const { lockTokens } = osmosis.lockup.MessageComposer.withTypeUrl;

export const daysToSeconds = (days: string) => {
  return (Number(days) * 24 * 60 * 60).toString();
};

export const BondSharesModal = ({
  isOpen,
  onClose,
  currentPool,
  prices,
  updatePoolsData,
  period,
  closeDetailModal,
}: {
  isOpen: boolean;
  onClose: () => void;
  currentPool: ExtendedPool;
  prices: PriceHash;
  updatePoolsData: () => void;
  period: Durations;
  closeDetailModal: () => void;
}) => {
  const [inputShares, setInputShares] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { tx } = useTx(defaultChainName);
  const { address } = useChain(defaultChainName);
  const [isMobile] = useMediaQuery('(max-width: 480px)');

  const poolName = currentPool?.poolAssets.map(({ token }) => {
    const symbol = getSymbolByDenom(
      osmosisAssetsList,
      token!.denom
    ) as CoinSymbol;
    return symbol;
  });

  const unbondedShares = convertDollarValueToShares(
    currentPool?.myLiquidity || 0,
    currentPool,
    prices
  );

  const unbondedSharesDisplay = new BigNumber(unbondedShares)
    .decimalPlaces(18, BigNumber.ROUND_DOWN)
    .toString();

  const isAmountEmpty = new BigNumber(inputShares || 0).lte(0);
  const isAmountInsufficient = new BigNumber(inputShares || 0).gt(
    unbondedSharesDisplay
  );

  const btnText = isAmountEmpty
    ? 'Amount is empty'
    : isAmountInsufficient
    ? 'Insufficient amount'
    : 'Bond';

  const closeModal = () => {
    onClose();
    setInputShares('');
  };

  const handleClick = async () => {
    if (!address) return;

    setIsLoading(true);

    const coins = [
      {
        amount: new BigNumber(inputShares).shiftedBy(18).toString(),
        denom: `gamm/pool/${currentPool.id}`,
      },
    ];

    const msg = lockTokens({
      coins,
      owner: address,
      duration: {
        seconds: BigInt(daysToSeconds(period)),
        nanos: 0,
      },
    });

    const fee = {
      amount: aminoCoins(0, 'uosmo'),
      gas: '450000',
    };

    await tx([msg], {
      fee,
      onSuccess: () => {
        closeModal();
        closeDetailModal();
        updatePoolsData();
      },
    });

    setIsLoading(false);
  };

  const titleColor = useColorModeValue('#697584', '#A7B4C2');
  const statColor = useColorModeValue('#2C3137', '#EEF2F8');
  const bgColor = useColorModeValue('#EEF2F8', '#1D2024');
  const borderColor = useColorModeValue('#D1D6DD', '#434B55');

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      isCentered
      size={isMobile ? 'xs' : { sm: 'sm', md: 'md', lg: 'xl' }}
    >
      <ModalOverlay bg="blackAlpha.800" />
      <ModalContent bg={useColorModeValue('#FFF', '#2C3137')}>
        <ModalHeader>
          <Text fontWeight="600" fontSize="20px" color={statColor}>
            Bond LP Tokens
          </Text>
          <Text fontWeight="400" fontSize="14px" color={titleColor}>
            {poolName?.join(' / ')}
          </Text>
        </ModalHeader>
        <ModalCloseButton color={titleColor} />
        <ModalBody>
          <Flex
            justifyContent="space-between"
            color={titleColor}
            mx="auto"
            mb="12px"
            mt="10px"
          >
            <Text fontWeight="600" fontSize="18px" lineHeight="shorter">
              Amount to bond
            </Text>
            <Flex
              flexDir={
                isMobile ? 'column' : { sm: 'column', md: 'column', lg: 'row' }
              }
              alignItems="flex-end"
            >
              <Text fontSize="14px">Available&nbsp;{isMobile && 'shares'}</Text>
              <Text
                fontWeight="600"
                fontSize="14px"
                cursor="pointer"
                onClick={() => setInputShares(unbondedSharesDisplay)}
              >
                {unbondedSharesDisplay} {!isMobile && 'shares'}
              </Text>
            </Flex>
          </Flex>

          <Flex h="68px" position="relative" mx="auto" mb="24px">
            <NumberInput
              h="100%"
              w="100%"
              bgColor={bgColor}
              border={`1px solid ${borderColor}`}
              borderRadius="6px"
              value={inputShares}
              onChange={(val) => setInputShares(val)}
            >
              <NumberInputField
                border="none"
                borderRadius="6px"
                h="100%"
                pl="18px"
                fontWeight="semibold"
                fontSize="18px"
                color={statColor}
              />
            </NumberInput>
          </Flex>

          <Center mb="32px">
            <LargeButton
              btnText={btnText}
              handleClick={handleClick}
              isLoading={isLoading}
              disabled={isAmountEmpty || isAmountInsufficient}
              width="100%"
            />
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

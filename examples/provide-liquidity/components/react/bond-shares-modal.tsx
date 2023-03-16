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
  useRadioGroup,
  Center,
  NumberInput,
  NumberInputField,
  useMediaQuery,
} from '@chakra-ui/react';
import { Pool } from './provide-liquidity';
import { LargeButton, RadioCard } from './modal-components';
import { useTransactionToast } from './hooks';
import { convertDollarValueToShares, getSymbolForDenom } from '../../utils';
import { PriceHash } from '../../utils/types';
import { truncDecimals } from './pool-detail-modal';
import BigNumber from 'bignumber.js';
import { FEES, osmosis } from 'osmojs';
import { useChain } from '@cosmos-kit/react';
import { chainName } from '../../config/defaults';
import Long from 'long';
import { TransactionResult } from '../types';

const { lockTokens } = osmosis.lockup.MessageComposer.withTypeUrl;

export const daysToSeconds = (days: string) => {
  return (Number(days) * 24 * 60 * 60).toString();
};

const BondSharesModal = ({
  isOpen,
  onClose,
  currentPool,
  prices,
  updatePoolsData,
}: {
  isOpen: boolean;
  onClose: () => void;
  currentPool: Pool;
  prices: PriceHash;
  updatePoolsData: () => void;
}) => {
  const [inputShares, setInputShares] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [period, setPeriod] = useState('14');

  const { getSigningStargateClient, address } = useChain(chainName);
  const { showToast } = useTransactionToast();
  const [isMobile] = useMediaQuery('(max-width: 480px)');

  // const options = [
  //   { text: '1 day', apr: '20.23%', value: '1' },
  //   { text: '7 days', apr: '32.23%', value: '7' },
  //   { text: '14 days', apr: '40.23%', value: '14' },
  // ];

  // const { getRootProps, getRadioProps } = useRadioGroup({
  //   defaultValue: '14',
  //   onChange: setPeriod,
  // });

  // const group = getRootProps();

  const poolName = currentPool?.poolAssets.map(({ token }) =>
    getSymbolForDenom(token!.denom)
  );

  const unbondedShares = convertDollarValueToShares(
    currentPool?.myLiquidity || 0,
    currentPool,
    prices
  );

  const isAmountEmpty = new BigNumber(inputShares || 0).lte(0);
  const isAmountInsufficient = new BigNumber(inputShares || 0).gt(
    unbondedShares
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
    setIsLoading(true);

    const stargateClient = await getSigningStargateClient();

    if (!stargateClient || !address) {
      console.error('stargateClient undefined or address undefined.');
      return;
    }

    const coins = [
      {
        amount: new BigNumber(inputShares).shiftedBy(18).toString(),
        denom: `gamm/pool/${currentPool.id.low}`,
      },
    ];

    const msg = lockTokens({
      coins,
      owner: address,
      duration: { seconds: Long.fromString(daysToSeconds(period)), nanos: 0 },
    });

    const fee = FEES.osmosis.lockTokens('low');

    try {
      const res = await stargateClient.signAndBroadcast(address, [msg], fee);
      stargateClient.disconnect();
      setIsLoading(false);
      showToast(res.code);
      closeModal();
      updatePoolsData();
    } catch (error) {
      console.log(error);
      stargateClient.disconnect();
      setIsLoading(false);
      showToast(TransactionResult.Failed);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      isCentered
      size={isMobile ? 'xs' : { sm: 'sm', md: 'md', lg: 'lg' }}
    >
      <ModalOverlay bg="blackAlpha.800" />
      <ModalContent>
        <ModalHeader>
          <Text fontWeight="600" fontSize="20px" color="#2C3137">
            Bond LP Tokens
          </Text>
          <Text fontWeight="400" fontSize="14px" color="#697584">
            {poolName?.join(' / ')}
          </Text>
        </ModalHeader>
        <ModalCloseButton color="#697584" />
        <ModalBody>
          {/* Unbonding period options */}
          {/* <Text fontWeight="semibold" fontSize="18px" color="#697584" mb="22px">
            Unbonding Period
          </Text> */}

          {/* <Flex {...group} justifyContent="space-between" mb="56px">
            {options.map(({ value, text, apr }) => {
              const radio = getRadioProps({ value });
              return (
                <RadioCard {...radio} key={value} title={text} apr={apr} />
              );
            })}
          </Flex> */}
          <Flex
            justifyContent="space-between"
            color="#697584"
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
              <Text fontSize="14px">
                Available&nbsp;{isMobile && 'shares'}{' '}
              </Text>
              <Text fontWeight="600" fontSize="14px">
                {truncDecimals(unbondedShares, 12)} {!isMobile && 'shares'}
              </Text>
            </Flex>
          </Flex>

          <Flex h="68px" position="relative" mx="auto" mb="24px">
            <NumberInput
              h="100%"
              w="100%"
              bgColor="#EEF2F8"
              border="1px solid #D1D6DD"
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
                color="#2C3137"
              />
            </NumberInput>
          </Flex>

          <Center mb="32px">
            <LargeButton
              btnText={btnText}
              handleClick={handleClick}
              isLoading={isLoading}
              disabled={isAmountEmpty || isAmountInsufficient}
              width="512px"
            />
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default BondSharesModal;

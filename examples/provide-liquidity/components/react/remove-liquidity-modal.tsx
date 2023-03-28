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
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Box,
  Center,
  useMediaQuery,
  useColorModeValue,
} from '@chakra-ui/react';
import { Pool } from './provide-liquidity';
import { LargeButton, PoolAssetDisplay } from './modal-components';
import { useTransactionToast } from './hooks';
import {
  convertDollarValueToCoins,
  convertDollarValueToShares,
  getSymbolForDenom,
  noDecimals,
} from '../../utils';
import { truncDecimals } from './pool-detail-modal';
import { Coin } from 'osmojs/types/codegen/cosmos/base/v1beta1/coin';
import { PriceHash } from '../../utils/types';
import { getLogoUrlFromDenom } from './pool-list';
import BigNumber from 'bignumber.js';
import { osmosis } from 'osmojs';
import { chainName } from '../../config/defaults';
import { useChain } from '@cosmos-kit/react';
import { TransactionResult } from '../types';
import { coin, coins as aminoCoins } from '@cosmjs/amino';

const { exitPool } = osmosis.gamm.v1beta1.MessageComposer.withTypeUrl;

const RemoveLiquidityModal = ({
  isOpen,
  onClose,
  currentPool,
  prices,
  updatePoolsData,
  closeDetailModal,
}: {
  isOpen: boolean;
  onClose: () => void;
  currentPool: Pool;
  prices: PriceHash;
  updatePoolsData: () => void;
  closeDetailModal: () => void;
}) => {
  const [percent, setPercent] = useState(50);
  const [isLoading, setIsLoading] = useState(false);
  const { getSigningStargateClient, address } = useChain(chainName);
  const { showToast } = useTransactionToast();
  const [isMobile] = useMediaQuery('(max-width: 480px)');

  const myLiquidity = new BigNumber(currentPool.myLiquidity || 0)
    .multipliedBy(percent)
    .div(100)
    .toString();

  const unbondedShares = convertDollarValueToShares(
    myLiquidity || 0,
    currentPool,
    prices
  );

  const coins = convertDollarValueToCoins(
    myLiquidity || 0,
    currentPool,
    prices
  );

  const poolName = currentPool?.poolAssets.map(({ token }) =>
    getSymbolForDenom(token!.denom)
  );

  const closeModal = () => {
    onClose();
    setPercent(50);
  };

  const handleClick = async () => {
    setIsLoading(true);

    const stargateClient = await getSigningStargateClient();

    if (!stargateClient || !address) {
      console.error('stargateClient undefined or address undefined.');
      return;
    }

    const coinsNeeded = coins.map(({ denom, amount }) => {
      const slippage = 2.5;
      const amountWithSlippage = new BigNumber(amount)
        .multipliedBy(new BigNumber(100).minus(slippage))
        .div(100)
        .toString();

      return {
        denom,
        amount: noDecimals(amountWithSlippage),
      };
    });

    const shareInAmount = new BigNumber(unbondedShares)
      .shiftedBy(18)
      .decimalPlaces(0)
      .toString();

    const tokenOutMins = coinsNeeded.map((c: Coin) => {
      return coin(c.amount, c.denom);
    });

    const msg = exitPool({
      poolId: currentPool.id,
      sender: address,
      shareInAmount,
      tokenOutMins,
    });

    const fee = {
      amount: aminoCoins(0, 'uosmo'),
      gas: '280000',
    };

    try {
      const res = await stargateClient.signAndBroadcast(address, [msg], fee);
      if (res?.code !== TransactionResult.Success) throw res;
      stargateClient.disconnect();
      setIsLoading(false);
      showToast(res.code);
      closeModal();
      closeDetailModal();
      updatePoolsData();
    } catch (error) {
      console.error(error);
      stargateClient.disconnect();
      setIsLoading(false);
      showToast(TransactionResult.Failed, error);
    }
  };

  const titleColor = useColorModeValue('#697584', '#A7B4C2');
  const statColor = useColorModeValue('#2C3137', '#EEF2F8');
  const bgColor = useColorModeValue('#EEF2F8', '#1D2024');

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      isCentered
      size={isMobile ? 'xs' : { sm: 'sm', md: 'md', lg: 'lg' }}
    >
      <ModalOverlay bg="blackAlpha.800" />
      <ModalContent bg={useColorModeValue('#FFF', '#2C3137')}>
        <ModalHeader>
          <Text fontWeight="600" fontSize="20px" color={statColor}>
            Remove liquidity
          </Text>
          <Text fontWeight="400" fontSize="14px" color={titleColor}>
            {poolName?.join(' / ')}
          </Text>
        </ModalHeader>
        <ModalCloseButton color={titleColor} />
        <ModalBody>
          <Text
            textAlign="center"
            fontWeight="semibold"
            fontSize="32px"
            color={statColor}
            lineHeight="shorter"
            mb="10px"
          >
            {new BigNumber(myLiquidity).gt(0.01) ? (
              <span>
                <span style={{ fontSize: '14px' }}>$</span>
                {truncDecimals(myLiquidity, 2)}
              </span>
            ) : (
              <span>
                <span>{'< '}</span>
                <span style={{ fontSize: '14px' }}>$</span>
                0.01
              </span>
            )}
          </Text>
          <Text
            textAlign="center"
            lineHeight="shorter"
            fontSize="14px"
            mb="22px"
            color={statColor}
          >
            {truncDecimals(unbondedShares, 12)} pool shares
          </Text>
          <Flex
            justifyContent="center"
            gap={isMobile ? '12px' : '36px'}
            mb="26px"
          >
            {coins.map((coin) => (
              <PoolAssetDisplay
                amount={truncDecimals(coin.displayAmount, 6)}
                logoUrl={getLogoUrlFromDenom(coin.denom)}
                token={coin.symbol}
                key={coin.denom}
              />
            ))}
          </Flex>

          <Slider
            aria-label="slider-ex-1"
            value={percent}
            mb="32px"
            min={1}
            max={100}
            onChange={(val) => setPercent(val)}
          >
            <SliderTrack bgColor={bgColor} h="4px">
              <SliderFilledTrack bgColor={titleColor} h="4px" />
            </SliderTrack>
            <SliderThumb
              boxSize="24px"
              bgColor={statColor}
              boxShadow="0px 4px 10px rgba(0, 0, 0, 0.3)"
            />
          </Slider>

          <Flex gap="12px" justifyContent="center" mb="66px">
            {[25, 50, 75, 100].map((percent) => (
              <Box
                px="6px"
                py="5px"
                bg={bgColor}
                borderRadius="4px"
                cursor="pointer"
                key={percent}
                onClick={() => setPercent(percent)}
              >
                <Text fontWeight="semibold" fontSize="14px" color={titleColor}>
                  {percent}%
                </Text>
              </Box>
            ))}
          </Flex>

          <Center mb="22px">
            <LargeButton
              btnText="Remove Liquidity"
              handleClick={handleClick}
              isLoading={isLoading}
              width="360px"
            />
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default RemoveLiquidityModal;

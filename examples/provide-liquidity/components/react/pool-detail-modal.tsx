import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  Flex,
  Box,
  Heading,
  useMediaQuery,
  useColorModeValue,
} from '@chakra-ui/react';
import { Pool } from './provide-liquidity';
import { getLogoUrlFromDenom } from './pool-list';
import { ChainLogo } from './pool-card';
import { Coin } from 'osmojs/types/codegen/cosmos/base/v1beta1/coin';
import {
  NormalButton,
  PoolAssetDisplay,
  BondLiquidityCard,
  RewardText,
} from './modal-components';
import { useTransactionToast } from './hooks';
import BigNumber from 'bignumber.js';
import {
  convertDollarValueToShares,
  convertDollarValueToCoins,
  convertGammTokenToDollarValue,
  getSymbolForDenom,
} from '../../utils';
import { PriceHash } from '../../utils/types';
import { osmosis } from 'osmojs';
import { useChain } from '@cosmos-kit/react';
import { chainName } from '../../config/defaults';
import { PeriodLock } from 'osmojs/types/codegen/osmosis/lockup/lock';
import { daysToSeconds } from './bond-shares-modal';
import Long from 'long';
import dayjs from 'dayjs';
import { coins as aminoCoins } from '@cosmjs/amino';
import { Peroid, TransactionResult } from '../types';

export const truncDecimals = (
  val: string | number | undefined,
  decimals: number
) => {
  return new BigNumber(val || 0).decimalPlaces(decimals).toString();
};

const { beginUnlocking } = osmosis.lockup.MessageComposer.withTypeUrl;
const { superfluidUnbondLock, superfluidUndelegate } =
  osmosis.superfluid.MessageComposer.withTypeUrl;

const durations = ['1', '7', '14'] as const;

export const PoolDetailModal = ({
  isOpen,
  onClose,
  pool,
  prices,
  openModals,
  delegatedCoins,
  updatePoolsData,
  rewardPerDay,
  setPeroid,
  locks,
}: {
  isOpen: boolean;
  onClose: () => void;
  pool: Pool;
  prices: PriceHash;
  locks: PeriodLock[];
  delegatedCoins: Coin[];
  updatePoolsData: () => void;
  rewardPerDay: number;
  setPeroid: (peroid: Peroid) => void;
  openModals: {
    onAddLiquidityOpen: () => void;
    onRemoveLiquidityOpen: () => void;
    onBondSharesOpen: () => void;
  };
}) => {
  const [unbondingStatus, setUnbondingStatus] = useState<{
    [key: string]: boolean;
  }>();

  const { getSigningStargateClient, address } = useChain(chainName);
  const { showToast } = useTransactionToast();
  const [isMobile] = useMediaQuery('(max-width: 480px)');

  const poolId = pool?.id.low;

  const poolName = pool?.poolAssets.map(({ token }) =>
    getSymbolForDenom(token!.denom)
  );

  const swapFee = new BigNumber(pool!.poolParams!.swapFee)
    .shiftedBy(-16)
    .toString();

  const totalBalance = new BigNumber(pool?.myLiquidity || 0).plus(
    pool?.bonded || 0
  );

  const totalShares = convertDollarValueToShares(
    totalBalance.toString(),
    pool,
    prices
  );

  const coins = convertDollarValueToCoins(
    totalBalance.toString(),
    pool,
    prices
  );

  const unbondedShares = convertDollarValueToShares(
    pool?.myLiquidity || 0,
    pool,
    prices
  );

  const bondedData = durations
    .filter((duration) => {
      const gaugeAprs = pool.apr[duration].gaugeAprs;
      return gaugeAprs && gaugeAprs.length > 0;
    })
    .map((duration) => {
      const lock = locks.find(
        (l) =>
          l.coins[0].denom === pool.totalShares?.denom &&
          Number(daysToSeconds(duration)) === l.duration?.seconds.low &&
          dayjs().isAfter(l.endTime)
      );

      if (!lock) {
        return {
          ID: '',
          apr: pool.apr[duration],
          value: '0',
          shares: '0',
          duration,
        };
      }

      const value = convertGammTokenToDollarValue(lock.coins[0], pool, prices);
      const shares = convertDollarValueToShares(value, pool, prices);

      return {
        ID: lock.ID.low.toString(),
        apr: pool.apr[duration],
        value,
        shares,
        duration,
      };
    });

  const handleUnbondClick = async (ID: string | null, duration: string) => {
    if (!ID) return;
    setUnbondingStatus((prev) => ({ ...prev, [ID]: true }));

    const stargateClient = await getSigningStargateClient();

    if (!stargateClient || !address) {
      console.error('stargateClient undefined or address undefined.');
      return;
    }

    const hasOsmoToken = pool.poolAssets.some(
      ({ token }) => token?.denom === 'uosmo'
    );
    const hasDelegatedCoin = delegatedCoins.some(
      ({ denom }) => denom === pool.totalShares?.denom
    );
    const isSuperfluidBonded =
      hasOsmoToken && duration === '14' && hasDelegatedCoin;

    let msg = [];

    if (isSuperfluidBonded) {
      const superfluidUndelegateMsg = superfluidUndelegate({
        lockId: Long.fromString(ID),
        sender: address,
      });
      const superfluidUnbondLockMsg = superfluidUnbondLock({
        lockId: Long.fromString(ID),
        sender: address,
      });
      msg = [superfluidUndelegateMsg, superfluidUnbondLockMsg];
    } else {
      const beginUnlockingMsg = beginUnlocking({
        ID: Long.fromString(ID),
        coins: [],
        owner: address,
      });
      msg.push(beginUnlockingMsg);
    }

    const fee = {
      amount: aminoCoins(0, 'uosmo'),
      gas: '600000',
    };

    try {
      const res = await stargateClient.signAndBroadcast(address, msg, fee);
      if (res?.code !== TransactionResult.Success) throw res;
      stargateClient.disconnect();
      setUnbondingStatus((prev) => ({ ...prev, [ID]: false }));
      showToast(res.code);
      onClose();
      updatePoolsData();
    } catch (error) {
      console.error(error);
      stargateClient.disconnect();
      setUnbondingStatus((prev) => ({ ...prev, [ID]: false }));
      showToast(TransactionResult.Failed, error);
    }
  };

  const titleColor = useColorModeValue('#697584', '#A7B4C2');
  const statColor = useColorModeValue('#2C3137', '#EEF2F8');

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={isMobile ? 'xs' : { sm: 'sm', md: 'lg', lg: '6xl' }}
        isCentered
      >
        <ModalOverlay />
        <ModalContent w="768px" bg={useColorModeValue('#FFF', '#2C3137')}>
          <ModalHeader>
            <Text fontWeight="600" fontSize="20px">
              {poolName?.join(' / ')}
            </Text>
            <Text fontWeight="400" fontSize="14px">
              Pool #{poolId}
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex mb="40px" wrap="wrap">
              <Flex mb={{ sm: '16px', md: '16px', lg: 0 }}>
                <ChainLogo
                  url={getLogoUrlFromDenom(pool?.poolAssets[0].token?.denom)}
                  width="54px"
                />
                <ChainLogo
                  url={getLogoUrlFromDenom(pool?.poolAssets[1].token?.denom)}
                  width="54px"
                  isAtRight
                />
                <Box ml="14px">
                  <Text fontWeight="600" fontSize="14px" color={titleColor}>
                    Pool liquidity
                  </Text>
                  <Text fontWeight="600" fontSize="26px" color={statColor}>
                    ${pool?.liquidity.toLocaleString()}
                  </Text>
                </Box>
              </Flex>
              <Flex>
                <Box ml={{ sm: 0, md: 0, lg: '110px' }}>
                  <Text fontWeight="600" fontSize="14px" color={titleColor}>
                    Swap fee
                  </Text>
                  <Text fontWeight="600" fontSize="26px" color={statColor}>
                    {swapFee}%
                  </Text>
                </Box>
                <Box ml="58px">
                  <Text fontWeight="600" fontSize="14px" color={titleColor}>
                    24h trading volume
                  </Text>
                  <Text fontWeight="600" fontSize="26px" color={statColor}>
                    ${pool?.volume24H.toLocaleString()}
                  </Text>
                </Box>
              </Flex>
            </Flex>
            <Flex
              justifyContent="space-between"
              mb="36px"
              rowGap="16px"
              wrap="wrap"
            >
              <Box
                w={isMobile ? '100%' : { sm: '100%', md: '100%', lg: '476px' }}
                bgColor={useColorModeValue('#F5F7FB', '#1D2024')}
                borderRadius="8px"
                py="20px"
                px="24px"
              >
                <Text
                  fontWeight="600"
                  fontSize="14px"
                  color={titleColor}
                  mb="2px"
                >
                  Your pool balance
                </Text>
                <Flex mb="28px">
                  <Box>
                    <Text fontWeight="600" fontSize="26px" lineHeight="30px">
                      ${totalBalance.decimalPlaces(2).toString()}
                    </Text>
                    <Text fontWeight="400" fontSize="14px" color={statColor}>
                      {truncDecimals(totalShares, 6)} pool shares
                    </Text>
                  </Box>
                  <Flex
                    ml={isMobile ? '20px' : '70px'}
                    flexDir="column"
                    justifyContent="flex-end"
                    gap="6px"
                  >
                    {coins.map((coin) => (
                      <PoolAssetDisplay
                        amount={truncDecimals(coin.displayAmount, 4)}
                        logoUrl={getLogoUrlFromDenom(coin.denom)}
                        token={coin.symbol}
                        key={coin.denom}
                      />
                    ))}
                  </Flex>
                </Flex>
                <Flex>
                  <NormalButton
                    onClick={openModals.onAddLiquidityOpen}
                    size={{ w: '124px', h: '48px' }}
                    type="solid"
                    text="Add liquidity"
                    mr="20px"
                  />
                  <NormalButton
                    onClick={openModals.onRemoveLiquidityOpen}
                    size={{ w: '156px', h: '48px' }}
                    type="outline"
                    text="Remove liquidity"
                    disabled={new BigNumber(pool.myLiquidity || 0).lte(0)}
                  />
                </Flex>
              </Box>
              <Box
                w={isMobile ? '100%' : { sm: '100%', md: '100%', lg: '220px' }}
                h={
                  isMobile ? '100px' : { sm: '100px', md: '100px', lg: '192px' }
                }
                bgColor={useColorModeValue('#E5FFE4', '#304139')}
                borderRadius="8px"
                py="20px"
                px="24px"
              >
                <Text
                  color={useColorModeValue('#36BB35', '#AEFFAB')}
                  fontWeight="600"
                  fontSize="14px"
                  mb="4px"
                >
                  Currently earning
                </Text>
                <RewardText reward={rewardPerDay} />
              </Box>
            </Flex>
            <Flex mb="34px" wrap="wrap">
              <Box mb={{ sm: '22px', md: '22px', lg: 0 }}>
                <Heading fontWeight="600" fontSize="20px">
                  Bond your liquidity&nbsp;
                  {bondedData.length === 0 && <span>(unavailable)</span>}
                </Heading>
                <Text color={statColor} fontWeight="400" fontSize="14px">
                  Bond your tokens to earn additional OSMO rewards to the swap
                  fees.
                </Text>
              </Box>
              <Box ml={{ sm: 0, md: 0, lg: '44px' }}>
                <Text color={titleColor} fontWeight="600" fontSize="14px">
                  Unbonded
                </Text>
                <Text color={statColor} fontWeight="600" fontSize="26px">
                  ${truncDecimals(pool?.myLiquidity, 2)}
                </Text>
                <Flex color={statColor} fontSize="14px">
                  <Text fontWeight="600">
                    {truncDecimals(unbondedShares, 4)}
                  </Text>
                  <Text fontWeight="400" ml="4px">
                    pool shares
                  </Text>
                </Flex>
              </Box>
            </Flex>
            <Flex
              mb="40px"
              justifyContent="space-between"
              wrap="wrap"
              rowGap="24px"
            >
              {bondedData.map((bonded) => (
                <BondLiquidityCard
                  duration={bonded.duration}
                  apr={bonded.apr.totalApr}
                  bondedShares={bonded.shares}
                  bondedValue={bonded.value}
                  openBondModal={() => {
                    setPeroid(bonded.duration);
                    openModals.onBondSharesOpen();
                  }}
                  onUnbondClick={() =>
                    handleUnbondClick(bonded.ID, bonded.duration)
                  }
                  key={bonded.duration}
                  isUnbonding={
                    !!unbondingStatus && !!unbondingStatus[bonded.ID]
                  }
                />
              ))}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

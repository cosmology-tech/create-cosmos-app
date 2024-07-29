import React from 'react';
import {
  Box,
  Flex,
  Text,
  Image,
  Skeleton,
  useMediaQuery,
  useColorModeValue,
} from '@chakra-ui/react';
import { getLogoUrlFromDenom } from './PoolList';
import BigNumber from 'bignumber.js';
import { truncDecimals } from './modals/PoolDetailModal';
import { ExtendedPool, osmosisAssetsList } from '@/utils';
import { PoolApr } from '@/hooks';
import { getSymbolByDenom } from '@chain-registry/utils';
import { CoinSymbol } from '@/utils/types';

const formatNumber = (number: number | string) => {
  const formatter = Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1,
  });
  return formatter.format(new BigNumber(number).toNumber());
};

export const ChainLogo = ({
  isAtRight = false,
  url,
  width,
}: {
  isAtRight?: boolean;
  url: string | undefined;
  width?: string;
}) => {
  const leftOffset = isAtRight ? '-10px' : 0;
  if (!url)
    return (
      <Box
        boxSize="40px"
        border="none"
        borderRadius="full"
        bgColor="#cdd5f3e6"
        position="relative"
        left={leftOffset}
      >
        ?
      </Box>
    );
  return (
    <Image
      alt=""
      src={url}
      boxSize={width || '40px'}
      border="none"
      borderRadius="full"
      bgColor="#cdd5f3e6"
      position="relative"
      left={leftOffset}
    />
  );
};

const PoolCard = ({
  pool,
  setPool,
  poolApr,
  openPoolDetailModal,
  isFetchingApr,
}: {
  pool: ExtendedPool;
  poolApr: PoolApr | undefined;
  setPool: (pool: ExtendedPool) => void;
  openPoolDetailModal: () => void;
  isFetchingApr: boolean;
}) => {
  const [isMobile] = useMediaQuery('(max-width: 680px)');
  const poolNameColor = useColorModeValue('#2C3137', '#EEF2F8');
  const poolIdColor = useColorModeValue('#697584', '#A7B4C2');
  const aprTextColor = useColorModeValue('#2C3137', '#EEF2F8');

  return (
    <Box
      w={isMobile ? '100%' : { sm: '210px', md: '236px', lg: '236px' }}
      h="200px"
      bg={useColorModeValue('#F5F7FB', '#1D2024')}
      borderRadius="7px"
      px="24px"
      py="24px"
      cursor="pointer"
      onClick={() => {
        setPool(pool);
        openPoolDetailModal();
      }}
      transition="all 0.1s linear"
      _hover={{
        bg: useColorModeValue('#DDE3EB', '#24282E'),
      }}
    >
      <Flex alignItems="center" mb="28px">
        <ChainLogo url={getLogoUrlFromDenom(pool.poolAssets[0].token?.denom)} />
        <ChainLogo
          url={getLogoUrlFromDenom(pool.poolAssets[1].token?.denom)}
          isAtRight
        />
        <Box fontSize="14px">
          <Text fontWeight="600" color={poolNameColor}>
            {pool.poolAssets
              .map(({ token }) => {
                const symbol = getSymbolByDenom(
                  osmosisAssetsList,
                  token!.denom
                ) as CoinSymbol;
                return symbol;
              })
              .join('/')}
          </Text>
          <Text fontWeight="400" color={poolIdColor}>
            {`Pool #${pool.id}`}
          </Text>
        </Box>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" mb="4px">
        <Text fontWeight="400" fontSize="14px" color={aprTextColor}>
          APR
        </Text>
        {isFetchingApr ? (
          <Skeleton isLoaded={!isFetchingApr} height="18px" w="50px" />
        ) : (
          <Flex
            color={aprTextColor}
            fontWeight="600"
            alignItems="flex-end"
            gap="2px"
          >
            <Text fontSize="22px" lineHeight="26px">
              {truncDecimals(poolApr?.['14'].totalApr, 2)}
            </Text>
            <Text fontSize="14px">%</Text>
          </Flex>
        )}
      </Flex>
      <Flex
        mb="4px"
        justifyContent="space-between"
        fontSize="14px"
        color="#697584"
      >
        <Text fontWeight="400">Liquidity</Text>
        <Text fontWeight="600">${formatNumber(pool.liquidity)}</Text>
      </Flex>
      <Flex
        justifyContent="space-between"
        mb="12px"
        fontSize="14px"
        color="#697584"
      >
        <Text fontWeight="400">7D Fees</Text>
        <Text fontWeight="600">${pool.fees7D.toLocaleString()}</Text>
      </Flex>
    </Box>
  );
};

export default PoolCard;

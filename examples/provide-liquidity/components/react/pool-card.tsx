import React from 'react';
import { Box, Divider, Flex, Text, Image } from '@chakra-ui/react';
import { Pool } from './provide-liquidity';
import { getSymbolFromDenom, getLogoUrlFromDenom } from './pool-list';

// TODO: add white shadow to right side of the first icon in the card

const formatNumber = (number: number) => {
  const formatter = Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1,
  });
  return formatter.format(number);
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
  openPoolDetailModal,
}: {
  pool: Pool;
  setPool: (pool: Pool) => void;
  openPoolDetailModal: () => void;
}) => {
  return (
    <Box
      w="236px"
      h="200px"
      bg="#F5F7FB"
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
        opacity: 0.6,
      }}
    >
      <Flex alignItems="center" mb="28px">
        <ChainLogo url={getLogoUrlFromDenom(pool.poolAssets[0].token?.denom)} />
        <ChainLogo
          url={getLogoUrlFromDenom(pool.poolAssets[1].token?.denom)}
          isAtRight
        />
        <Box fontSize="14px">
          <Text fontWeight="600" color="#2C3137">
            {pool.poolAssets
              .map(({ token }) => getSymbolFromDenom(token?.denom))
              .join('/')}
          </Text>
          <Text fontWeight="400" color="#697584">
            Pool #{pool.id.low}
          </Text>
        </Box>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" mb="4px">
        <Text fontWeight="400" fontSize="14px" color="#2C3137">
          APR
        </Text>
        <Flex color="#2C3137" fontWeight="600" alignItems="flex-end" gap="2px">
          <Text fontSize="22px" lineHeight="26px">
            13.94
          </Text>
          <Text fontSize="14px">%</Text>
        </Flex>
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
      {/* <Divider mb="15px" /> */}
      {/* <Flex
        justifyContent="space-between"
        mb="6px"
        fontSize="14px"
        color="#2C3137"
      >
        <Text fontWeight="400">Your Liquidity</Text>
        <Text fontWeight="600">$1329.32</Text>
      </Flex>
      <Flex justifyContent="space-between" fontSize="14px" color="#2C3137">
        <Text fontWeight="400">Bonded</Text>
        <Text fontWeight="600">$600.00</Text>
      </Flex> */}
    </Box>
  );
};

export default PoolCard;

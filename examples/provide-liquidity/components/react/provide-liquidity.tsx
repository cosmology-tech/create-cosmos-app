import React, { ReactElement } from 'react';
import { useChain, useManager } from '@cosmos-kit/react';
import { chainName } from '../../config';
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';

import PoolCard from './pool-card';
import { ChevronDownIcon } from '@chakra-ui/icons';
import PoolList from './pool-list';

// TODO: fix StatBox width on larger screen

const StatBox = ({
  children,
  bgColor,
}: {
  bgColor?: string;
  children: ReactElement;
}) => (
  <Box
    w="234px"
    h="92px"
    borderRadius="7px"
    bgColor={bgColor || '#F5F7FB'}
    py="20px"
    px="22px"
  >
    {children}
  </Box>
);

const Colon = () => (
  <Text mx="4px" transform="translateY(-2px)">
    :
  </Text>
);

export const ProvideLiquidity = () => {
  const { address } = useChain(chainName);
  const { getChainLogo } = useManager();

  return (
    <Box mb={14} width="800px" mx="auto">
      <Heading fontSize="20px" fontWeight="600" mb="28px">
        Liquidity Pools
      </Heading>

      <Flex justifyContent="space-between" mb="25px">
        <StatBox>
          <Flex h="100%" alignItems="center">
            <Image
              w="56px"
              alt="Osmosis"
              src={getChainLogo(chainName)}
              transform="translateX(-8px)"
            />
            <Flex flexDir="column" justifyContent="space-between">
              <Text color="#697584" fontWeight="600" fontSize="14px">
                OSMO Price
              </Text>
              <Flex alignItems="flex-end" gap="1px">
                <Text fontWeight="600" fontSize="14px" lineHeight="22px">
                  $
                </Text>
                <Text
                  color="#2C3137"
                  fontWeight="600"
                  fontSize="26px"
                  lineHeight="30px"
                >
                  0.98
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </StatBox>

        <StatBox>
          <Flex
            h="100%"
            flexDir="column"
            justifyContent="center"
            fontWeight="600"
          >
            <Text color="#697584" fontSize="14px">
              Reward distribution in
            </Text>
            <Flex
              color="#2C3137"
              fontSize="26px"
              lineHeight="30px"
              alignItems="center"
            >
              <Text>12</Text>
              <Colon />
              <Text>19</Text>
              <Colon />
              <Text>48</Text>
            </Flex>
          </Flex>
        </StatBox>

        <StatBox bgColor="#E5FFE4">
          <Flex
            h="100%"
            flexDir="column"
            justifyContent="center"
            fontWeight="600"
          >
            <Text color="#36BB35" fontSize="14px">
              Yesterdays rewards
            </Text>
            <Flex alignItems="flex-end" gap="12px">
              <Flex alignItems="flex-end" gap="2px">
                <Text color="#36BB35" fontSize="26px" lineHeight="30px">
                  18.82
                </Text>
                <Text color="#36BB35" fontSize="14px">
                  OSMO
                </Text>
              </Flex>
              <Text color="#36BB35" fontWeight="400" fontSize="14px">
                $12.87
              </Text>
            </Flex>
          </Flex>
        </StatBox>
      </Flex>

      {/* YOUR POOLS */}
      <Heading fontSize="18px" fontWeight="600" mb="20px" color="#697584">
        Your Pools
      </Heading>
      <Box mb="38px">
        <PoolList poolNumber={2} isBold />
      </Box>

      {/* HIGHLIGHTED POOLS */}
      <Heading fontSize="18px" fontWeight="600" mb="34px" color="#697584">
        Highlighted Pools
      </Heading>
      <Flex justifyContent="space-between" mb="50px" wrap="wrap" rowGap="20px">
        <PoolCard />
        <PoolCard />
        <PoolCard />
      </Flex>

      {/* ALL POOLS */}
      <Heading fontSize="18px" fontWeight="600" mb="20px" color="#697584">
        All Pools
      </Heading>
      <Box mb="100px" position="relative">
        <PoolList poolNumber={4} />
        <Flex
          w="100%"
          h="200px"
          position="absolute"
          bottom="-50px"
          alignItems="flex-end"
          justifyContent="center"
          css={{
            background:
              'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.2) 100%)',
          }}
        >
          <Text
            color="#697584"
            fontSize="14px"
            fontWeight="600"
            cursor="pointer"
          >
            Show more
            <ChevronDownIcon boxSize={6} transform="translateY(-1px)" />
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

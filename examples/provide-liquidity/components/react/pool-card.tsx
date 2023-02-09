import React from 'react';
import { useManager } from '@cosmos-kit/react';
import { Box, Divider, Flex, Text, Image } from '@chakra-ui/react';
import { chainName } from '../../config';

const PoolCard = () => {
  const { getChainLogo } = useManager();

  return (
    <Box
      w="236px"
      h="282px"
      bg="#F5F7FB"
      borderRadius="7px"
      px="24px"
      py="25px"
    >
      <Flex alignItems="center" mb="36px">
        <Image alt="" src={getChainLogo('cosmoshub')} w="40px" />
        <Image
          alt=""
          src={getChainLogo(chainName)}
          w="52px"
          position="relative"
          left="-18px"
        />
        <Box position="relative" left="-8px">
          <Text fontWeight="600" fontSize="14px" color="#2C3137">
            ATOM/OSMO
          </Text>
          <Text fontWeight="400" fontSize="14px" color="#697584">
            Pool #1
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
      <Flex justifyContent="space-between" mb="4px">
        <Text fontWeight="400" fontSize="14px" color="#697584">
          Liquidity
        </Text>
        <Text fontWeight="600" fontSize="14px" color="#697584">
          $68.8M
        </Text>
      </Flex>
      <Flex justifyContent="space-between" mb="12px">
        <Text fontWeight="400" fontSize="14px" color="#697584">
          7D Fees
        </Text>
        <Text fontWeight="600" fontSize="14px" color="#697584">
          $58,534
        </Text>
      </Flex>
      <Divider mb="15px" />
      <Flex justifyContent="space-between" mb="6px">
        <Text fontWeight="400" fontSize="14px" color="#2C3137">
          Your Liquidity
        </Text>
        <Text fontWeight="600" fontSize="14px" color="#2C3137">
          $1329.32
        </Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text fontWeight="400" fontSize="14px" color="#2C3137">
          Bonded
        </Text>
        <Text fontWeight="600" fontSize="14px" color="#2C3137">
          $600.00
        </Text>
      </Flex>
    </Box>
  );
};

export default PoolCard;

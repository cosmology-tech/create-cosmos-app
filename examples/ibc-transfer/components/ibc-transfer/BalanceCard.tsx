import React from 'react';
import {
  Center,
  Image,
  Flex,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';

export const BalanceCard = ({
  logoUrl,
  amount,
  token,
}: {
  logoUrl?: string;
  amount: number;
  token: string;
}) => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      alignItems="center"
      border="1px solid"
      py={2}
      px={4}
      mb={2}
      borderColor="blackAlpha.200"
      borderRadius="lg"
      bg={useColorModeValue('white', 'blackAlpha.400')}
    >
      {logoUrl ? (
        <Image
          borderRadius="full"
          boxSize="40px"
          src={logoUrl || 'https://bit.ly/dan-abramov'}
          alt="Dan Abramov"
          mr={2}
        />
      ) : (
        <Center
          borderRadius="full"
          boxSize="40px"
          mr={2}
          fontWeight="bold"
          bgColor={colorMode === 'light' ? 'purple.400' : 'purple.800'}
          color={colorMode === 'light' ? 'whiteAlpha.900' : 'whiteAlpha.600'}
        >
          {token?.slice(0, 1).toUpperCase()}
        </Center>
      )}
      {amount} {token}
    </Flex>
  );
};

import React from 'react';
import { WalletSection } from '../wallet';
import {
  Box,
  Center,
  Container,
  Heading,
  Text,
  Image,
  Flex,
  useColorModeValue,
  useColorMode,
  SkeletonText,
} from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';

import store from '../../store';
import type { Balance } from '../types';
import { getCoin } from './ibc-transfer';

const BalanceCard = ({
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

export const FromChain = observer(
  ({ balances, isLoading }: { balances: Balance[]; isLoading: boolean }) => {
    const { colorMode } = useColorMode();

    const currentChainName = store.sourceChain;
    const coin = getCoin(currentChainName);

    const balance = balances.filter(({ denom }) => denom === coin?.base)?.[0];
    const assets = balances.filter(({ denom }) => denom.startsWith('ibc/'));

    return (
      <Container
        py={12}
        my={16}
        border="1px dotted"
        borderColor={useColorModeValue('blackAlpha.600', 'whiteAlpha.400')}
        maxW="5xl"
      >
        <Center>
          <Heading as="h1" size="lg">
            From Chain
          </Heading>
        </Center>

        <WalletSection />

        <Center>
          <Box w="full" maxW="sm">
            <SkeletonText
              noOfLines={4}
              spacing="4"
              skeletonHeight="2"
              isLoaded={!isLoading}
            >
              {store.sourceAddress && (
                <Box>
                  <Text
                    color={
                      colorMode === 'light' ? 'gray.600' : 'whiteAlpha.600'
                    }
                    fontWeight="medium"
                    mb={2}
                  >
                    Balance
                  </Text>
                  <BalanceCard
                    amount={balance?.displayAmount}
                    token={balance?.symbol}
                    logoUrl={balance?.logoUrl}
                  />
                </Box>
              )}

              {store.sourceAddress && assets.length > 0 && (
                <Box>
                  <Text
                    color={
                      colorMode === 'light' ? 'gray.600' : 'whiteAlpha.600'
                    }
                    fontWeight="medium"
                    mb={2}
                    mt={4}
                  >
                    My Assets
                  </Text>
                  {assets.map(({ displayAmount, symbol, logoUrl }) => (
                    <BalanceCard
                      amount={displayAmount}
                      logoUrl={logoUrl}
                      token={symbol}
                      key={symbol}
                    />
                  ))}
                </Box>
              )}
            </SkeletonText>
          </Box>
        </Center>
      </Container>
    );
  }
);

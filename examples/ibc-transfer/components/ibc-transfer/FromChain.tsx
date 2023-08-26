import React, { useEffect } from 'react';
import {
  Box,
  Center,
  Container,
  Heading,
  Text,
  useColorModeValue,
  useColorMode,
  SkeletonText,
} from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';

import store from '@/store';
import { WalletSection } from '../wallet';
import { BalanceCard } from './BalanceCard';
import { useBalances } from '@/hooks';
import { getCoin, PrettyBalance } from '@/utils';
import { useChain } from '@cosmos-kit/react';

export const FromChain = observer(() => {
  const { balances, isLoading, refetch } = useBalances();

  const currentChainName = store.sourceChain;
  const { isWalletDisconnected } = useChain(currentChainName);
  const coin = getCoin(currentChainName);

  useEffect(() => {
    refetch();
  }, [currentChainName]);

  const emptyBalance: PrettyBalance = {
    denom: coin.base,
    symbol: coin.symbol,
    amount: '0',
    displayAmount: 0,
    logoUrl: coin.logo_URIs?.png,
    exponent: 6,
  };

  const balance =
    balances?.find(({ denom }) => denom === coin?.base) || emptyBalance;

  const assets = balances?.filter(({ denom }) => denom.startsWith('ibc/'));

  const { colorMode } = useColorMode();

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
            isLoaded={isWalletDisconnected || !isLoading}
          >
            {store.sourceAddress && (
              <Box>
                <Text
                  color={colorMode === 'light' ? 'gray.600' : 'whiteAlpha.600'}
                  fontWeight="medium"
                  mb={2}
                >
                  Balance
                </Text>
                <BalanceCard
                  amount={balance.displayAmount}
                  token={balance.symbol}
                  logoUrl={balance.logoUrl}
                />
              </Box>
            )}
            {store.sourceAddress && assets && assets.length > 0 && (
              <Box>
                <Text
                  color={colorMode === 'light' ? 'gray.600' : 'whiteAlpha.600'}
                  fontWeight="medium"
                  mb={2}
                  mt={4}
                >
                  Assets
                </Text>
                {(assets || []).map(({ displayAmount, symbol, logoUrl }) => (
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
});

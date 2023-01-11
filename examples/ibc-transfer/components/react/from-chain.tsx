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
} from '@chakra-ui/react';

const TokenCard = ({
  logoUrl,
  amount,
  token,
}: {
  logoUrl?: string;
  amount: number;
  token: string;
}) => {
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
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
        mr={2}
      />
      {amount} {token}
    </Flex>
  );
};

export const FromChain = () => {
  return (
    <Container py={12} my={16} border="1px dotted black" maxW="5xl">
      <Center>
        <Heading as="h1" size="lg">
          From Chain
        </Heading>
      </Center>

      <WalletSection />

      <Center>
        <Box w="full" maxW="sm">
          <Text color="gray.600" fontWeight="medium" mb={2}>
            Balance
          </Text>
          <TokenCard amount={0.688903} token="OSMO" />

          <Text color="gray.600" fontWeight="medium" mb={2} mt={4}>
            My Assets
          </Text>
          <TokenCard amount={51.41} token="JUNO" />
          <TokenCard amount={242.637088} token="STARS" />
        </Box>
      </Center>
    </Container>
  );
};

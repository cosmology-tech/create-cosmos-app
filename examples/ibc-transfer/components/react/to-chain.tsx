import React, { useMemo, useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  VStack,
  useColorModeValue,
  Flex,
  Text,
} from '@chakra-ui/react';
import { ChooseChain } from './choose-chain';
import { useWallet } from '@cosmos-kit/react';
import { ChainOption, handleSelectChainDropdown } from '../types';

const linearGradient =
  'linear-gradient(109.6deg, rgba(157,75,199,1) 11.2%, rgba(119,81,204,1) 83.1%)';

export const ToChain = () => {
  const walletManager = useWallet();
  const { chainRecords, getChainLogo } = walletManager;

  const [toChain, setToChain] = useState<string | undefined>();

  const chainOptions = useMemo(
    () =>
      chainRecords.map((chainRecord) => {
        return {
          chainName: chainRecord?.name,
          label: chainRecord?.chain.pretty_name,
          value: chainRecord?.name,
          icon: getChainLogo(chainRecord.name),
        };
      }),
    [chainRecords, getChainLogo]
  );

  const onChainChange: handleSelectChainDropdown = (
    selectedValue: ChainOption | null
  ) => {
    setToChain(selectedValue?.chainName);
  };

  return (
    <Container py={12} my={16} border="1px dotted black" maxW="5xl">
      <VStack spacing={8}>
        <Heading as="h1" size="lg">
          To Chain
        </Heading>

        <Box w="full" maxW="sm">
          <ChooseChain
            chainName={toChain}
            chainInfos={chainOptions}
            onChange={onChainChange}
          />

          <FormControl mt={8}>
            <FormLabel color="gray.600">Token</FormLabel>
            <Select
              placeholder="Select a token"
              size="lg"
              bg={useColorModeValue('white', 'blackAlpha.400')}
            >
              <option value="option1">OSMO</option>
              <option value="option2">Juno/channel-42</option>
              <option value="option3">Stargaze/channel-75</option>
            </Select>
          </FormControl>

          <FormControl mt={8}>
            <Flex justifyContent="space-between">
              <FormLabel color="gray.600">Amount</FormLabel>
              <Text>Balance: 0.688903 OSMO</Text>
            </Flex>
            <NumberInput
              step={0.000001}
              precision={6}
              min={0}
              max={30}
              size="lg"
            >
              <NumberInputField
                bg={useColorModeValue('white', 'blackAlpha.400')}
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        </Box>

        <Box w="full" maxW={{ base: 52, md: 64 }}>
          <Button
            isLoading={false}
            loadingText="Submitting"
            w="full"
            size="lg"
            bgImage={linearGradient}
            color="white"
            opacity={1}
            transition="all .3s ease-in-out"
            _hover={{
              bgImage: linearGradient,
              opacity: 0.75, //TODO: set to false when button is loading
            }}
            _active={{
              bgImage: linearGradient,
              opacity: 0.9, //TODO: set to false when button is loading
            }}
          >
            Submit
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

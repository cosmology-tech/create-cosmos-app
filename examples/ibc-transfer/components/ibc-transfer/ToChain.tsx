import React, { useEffect, useMemo, useState } from 'react';
import {
  Box,
  Container,
  Heading,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { ibc } from 'chain-registry';
import { useManager } from '@cosmos-kit/react';
import { observer } from 'mobx-react-lite';

import store from '@/store';
import { InputFields } from './InputFields';
import { ChooseChain, ChainOption, HandleSelectChain } from '@/components';

export const ToChain = observer(() => {
  const sourceChainName = store.sourceChain;
  const { chainRecords, getChainLogo } = useManager();
  const [toChain, setToChain] = useState<ChainOption | null>();

  const toChainOptions = useMemo(
    () =>
      ibc
        .filter(
          ({ chain_1, chain_2 }) =>
            chain_1.chain_name === sourceChainName ||
            chain_2.chain_name === sourceChainName
        )
        .map(({ chain_1, chain_2 }) => {
          if (chain_1.chain_name === sourceChainName) {
            return chain_2.chain_name;
          }
          return chain_1.chain_name;
        }),
    [sourceChainName]
  );

  const chainOptions = useMemo(
    () =>
      chainRecords
        .filter((chainRecord) => toChainOptions.includes(chainRecord.name))
        .map((chainRecord) => {
          return {
            chainName: chainRecord?.name,
            label: chainRecord?.chain.pretty_name,
            value: chainRecord?.name,
            icon: getChainLogo(chainRecord.name),
            id: chainRecord.chain.chain_id,
          };
        }),
    [chainRecords, getChainLogo, toChainOptions]
  );

  useEffect(() => {
    setToChain(null);
  }, [sourceChainName]);

  const onChainChange: HandleSelectChain = (
    selectedValue: ChainOption | null
  ) => {
    setToChain(selectedValue);
  };

  return (
    <Container
      py={12}
      my={16}
      border="1px dotted"
      borderColor={useColorModeValue('blackAlpha.600', 'whiteAlpha.400')}
      maxW="5xl"
    >
      <VStack spacing={8}>
        <Heading as="h1" size="lg">
          To Chain
        </Heading>

        <Box w="full" maxW="sm" mt={8}>
          <ChooseChain
            chainName={toChain?.chainName}
            chainInfos={chainOptions}
            onChange={onChainChange}
          />
        </Box>

        {toChain?.chainName && <InputFields toChainName={toChain?.chainName} />}
      </VStack>
    </Container>
  );
});

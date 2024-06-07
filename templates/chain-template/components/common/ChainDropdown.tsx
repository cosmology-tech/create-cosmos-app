import Image from 'next/image';
import { useState } from 'react';
import { useChain, useManager } from '@cosmos-kit/react';
import { Box, Combobox, Skeleton, Stack, Text } from '@interchain-ui/react';

import { chainStoreActions, useChainStore } from '@/contexts';
import { chains } from '@/config';

export const ChainDropdown = () => {
  const { selectedChain } = useChainStore();
  const { chain } = useChain(selectedChain);
  const [input, setInput] = useState<string>(chain.pretty_name);
  const { getChainLogo } = useManager();

  return (
    <Combobox
      onInputChange={(input) => {
        setInput(input);
      }}
      selectedKey={selectedChain}
      onSelectionChange={(key) => {
        const chainName = key as string | null;
        if (chainName) {
          chainStoreActions.setSelectedChain(chainName);
        }
      }}
      inputAddonStart={
        <Box display="flex" justifyContent="center" alignItems="center" px="$4">
          {input === chain.pretty_name ? (
            <Image
              src={getChainLogo(selectedChain) ?? ''}
              alt={chain.pretty_name}
              width={24}
              height={24}
              style={{
                borderRadius: '50%',
              }}
            />
          ) : (
            <Skeleton width="24px" height="24px" borderRadius="$full" />
          )}
        </Box>
      }
      styleProps={{
        width: {
          mobile: '100%',
          mdMobile: '210px',
        },
      }}
    >
      {chains.map((chain) => (
        <Combobox.Item key={chain.chain_name} textValue={chain.pretty_name}>
          <Stack
            direction="horizontal"
            space="$4"
            attributes={{ alignItems: 'center' }}
          >
            <Image
              src={getChainLogo(chain.chain_name) ?? ''}
              alt={chain.pretty_name}
              width={24}
              height={24}
              style={{
                borderRadius: '50%',
              }}
            />
            <Text fontSize="$md" fontWeight="$normal" color="$text">
              {chain.pretty_name}
            </Text>
          </Stack>
        </Combobox.Item>
      ))}
    </Combobox>
  );
};

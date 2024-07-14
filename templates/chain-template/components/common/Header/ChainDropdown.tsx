import Image from 'next/image';
import { useState } from 'react';
import { useChain, useManager } from '@cosmos-kit/react';
import { Box, Combobox, Skeleton, Stack, Text } from '@interchain-ui/react';

import { chains } from '@/config';
import { useDetectBreakpoints } from '@/hooks';
import { chainStoreActions, useChainStore } from '@/contexts';

export const ChainDropdown = () => {
  const { selectedChain } = useChainStore();
  const { chain } = useChain(selectedChain);
  const [input, setInput] = useState<string>(chain.pretty_name);
  const { getChainLogo } = useManager();
  const { isMobile } = useDetectBreakpoints();

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
        width: isMobile ? '130px' : '210px',
      }}
    >
      {chains.map((chain) => (
        <Combobox.Item key={chain.chain_name} textValue={chain.pretty_name}>
          <Stack
            direction="horizontal"
            space={isMobile ? '$3' : '$4'}
            attributes={{ alignItems: 'center' }}
          >
            <Image
              src={getChainLogo(chain.chain_name) ?? ''}
              alt={chain.pretty_name}
              width={isMobile ? 18 : 24}
              height={isMobile ? 18 : 24}
              style={{
                borderRadius: '50%',
              }}
            />
            <Text fontSize={isMobile ? '12px' : '16px'} fontWeight="500">
              {chain.pretty_name}
            </Text>
          </Stack>
        </Combobox.Item>
      ))}
    </Combobox>
  );
};

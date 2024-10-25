import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useChain, useManager } from '@cosmos-kit/react';
import { Box, Combobox, Skeleton, Stack, Text } from '@interchain-ui/react';

import { useStarshipChains, useDetectBreakpoints } from '@/hooks';
import { chainStore, useChainStore } from '@/contexts';
import { chainOptions } from '@/config';
import { getSignerOptions } from '@/utils';

export const ChainDropdown = () => {
  const { selectedChain } = useChainStore();
  const { chain } = useChain(selectedChain);
  const [input, setInput] = useState<string>(chain.pretty_name);
  const { isMobile } = useDetectBreakpoints();
  const { data: starshipChains, refetch } = useStarshipChains();

  const [isChainsAdded, setIsChainsAdded] = useState(false);
  const { addChains, getChainLogo } = useManager();

  useEffect(() => {
    if (
      starshipChains?.chains.length &&
      starshipChains?.assets.length &&
      !isChainsAdded
    ) {
      addChains(
        starshipChains.chains,
        starshipChains.assets,
        getSignerOptions(),
      );
      setIsChainsAdded(true);
    }
  }, [starshipChains, isChainsAdded]);

  const onOpenChange = (isOpen: boolean) => {
    if (isOpen && !isChainsAdded) {
      refetch();
    }
  };

  const chains = isChainsAdded
    ? chainOptions.concat(starshipChains?.chains ?? [])
    : chainOptions;

  return (
    <Combobox
      onInputChange={(input) => {
        setInput(input);
      }}
      onOpenChange={onOpenChange}
      selectedKey={selectedChain}
      onSelectionChange={(key) => {
        const chainName = key as string | null;
        if (chainName) {
          chainStore.setSelectedChain(chainName);
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
        width: isMobile ? '130px' : '260px',
      }}
    >
      {chains.map((c) => (
        <Combobox.Item key={c.chain_name} textValue={c.pretty_name}>
          <Stack
            direction="horizontal"
            space={isMobile ? '$3' : '$4'}
            attributes={{ alignItems: 'center' }}
          >
            <Image
              src={getChainLogo(c.chain_name) ?? ''}
              alt={c.pretty_name}
              width={isMobile ? 18 : 24}
              height={isMobile ? 18 : 24}
              style={{
                borderRadius: '50%',
              }}
            />
            <Text fontSize={isMobile ? '12px' : '16px'} fontWeight="500">
              {c.pretty_name}
            </Text>
          </Stack>
        </Combobox.Item>
      ))}
    </Combobox>
  );
};

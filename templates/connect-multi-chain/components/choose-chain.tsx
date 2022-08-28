import { useState, useEffect } from 'react';
import { ChangeChainDropdown } from './chain-dropdown';
import {
  ChooseChainInfo,
  ChainOption,
  handleSelectChainDropdown
} from './types';
import { Box } from '@chakra-ui/react';

export function ChooseChain({
  chainId,
  chainInfos,
  onChange
}: {
  chainId?: string;
  chainInfos: ChooseChainInfo[];
  onChange: handleSelectChainDropdown;
}) {
  const [selectedItem, setSelectedItem] = useState<ChainOption | undefined>();
  useEffect(() => {
    if (chainId && chainInfos.length > 0)
      setSelectedItem(
        chainInfos.filter((options) => options.chainId === chainId)[0]
      );
    if (!chainId) setSelectedItem(undefined);
  }, [chainId]);
  return (
    <Box w={72}>
      <ChangeChainDropdown
        data={chainInfos}
        selectedItem={selectedItem}
        onChange={onChange}
      />
    </Box>
  );
}

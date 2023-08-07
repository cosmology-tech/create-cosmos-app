import { useState, useEffect } from 'react';
import { ChainDropdown, HandleSelectChain } from './ChainDropdown';
import { ChainOption } from './ChainDropdown';

interface ChainInfo {
  chainName: string;
  chainRoute?: string;
  label: string;
  value: string;
  icon?: string;
  disabled?: boolean;
}

export const ChooseChain = ({
  chainName,
  chainInfos,
  onChange,
}: {
  chainName?: string;
  chainInfos: ChainInfo[];
  onChange: HandleSelectChain;
}) => {
  const [selectedItem, setSelectedItem] = useState<ChainOption | undefined>();
  useEffect(() => {
    if (chainName && chainInfos.length > 0)
      setSelectedItem(
        chainInfos.filter((options) => options.chainName === chainName)[0]
      );
    if (!chainName) setSelectedItem(undefined);
  }, [chainInfos, chainName]);
  return (
    <ChainDropdown
      data={chainInfos}
      selectedItem={selectedItem}
      onChange={onChange}
    />
  );
};

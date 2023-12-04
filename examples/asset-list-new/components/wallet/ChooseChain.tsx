import * as React from 'react';
import { Box, ChangeChainCombobox } from '@interchain-ui/react';

export interface ChainInfo {
  chainName: string;
  chainRoute?: string;
  label: string;
  value: string;
  icon?: string;
  disabled?: boolean;
}

type ComboboxItem = {
  iconUrl?: string;
  chainName: string;
};

export interface ChooseChainProps {
  chainName?: string;
  chainInfos: ChainInfo[];
  onChange: (selectedItem: ComboboxItem | null) => void;
}

export const ChooseChain = (props: ChooseChainProps) => {
  const { chainName, chainInfos, onChange } = props;

  const [selectedChain, setSelectedChain] = React.useState<ComboboxItem | null>(
    () => {
      const found = chainInfos.find((item) => item.chainName === chainName);
      return found
        ? {
            iconUrl: found.icon,
            chainName: found.chainName,
          }
        : null;
    }
  );

  const options = React.useMemo(
    () =>
      chainInfos.map((item) => ({
        iconUrl: item.icon,
        chainName: item.chainName,
      })),
    [chainInfos]
  );

  React.useEffect(() => {
    if (chainName && options.length > 0) {
      const selectedOption = options.filter(
        (options) => options.chainName === chainName
      )[0];

      setSelectedChain(selectedOption ?? null);
    }

    if (!chainName) {
      setSelectedChain(null);
    }
  }, [options, chainName]);

  return (
    <Box maxWidth="350px" marginX="auto" py="$4">
      <ChangeChainCombobox
        maxHeight={350}
        valueItem={selectedChain ? selectedChain : undefined}
        size="sm"
        onItemSelected={(item: ComboboxItem | null) => {
          setSelectedChain(item);
          onChange(item);
        }}
        options={options}
      />
    </Box>
  );
};

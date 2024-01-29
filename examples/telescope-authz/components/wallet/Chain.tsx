import { Chain as TChain } from '@chain-registry/types';
import { ChangeChainCombobox } from '@interchain-ui/react';
import { getChainLogoFromChain } from '@/utils';

export type ChainProps = {
  name: string;
  chains: TChain[];
  onChainChange?: (chainName?: string) => void;
};

export function Chain({
  name,
  chains = [],
  onChainChange = () => {},
}: ChainProps) {
  const options = chains.map((chain) => ({
    label: chain.pretty_name,
    value: chain.chain_name,
    iconUrl: getChainLogoFromChain(chain),
  }));

  const value = options.find((chain) => chain.value === name)!;

  return (
    <ChangeChainCombobox
      size="md"
      maxHeight={360}
      options={options}
      valueItem={value}
      appearance="bold"
      onItemSelected={(option) => onChainChange(option?.value)}
    />
  );
}

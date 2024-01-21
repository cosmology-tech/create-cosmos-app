import { Chain } from '@chain-registry/types';
import { ChangeChainCombobox } from '@interchain-ui/react';
import { getChainLogo } from '@/utils';

export type ChainProps = {
  name: string;
  chains: Chain[]
  onChainChange?: (chainName?: string) => void;
}

export function Chain({ name, chains = [], onChainChange = () => {} }: ChainProps) {
  const options = chains.map(chain => ({
    iconUrl: getChainLogo(chain),
    chainName: chain.chain_name,
  }));

  const value = options.find(chain => chain.chainName === name)!;
  
  return <ChangeChainCombobox
    size="md"
    maxHeight={360}
    options={options}
    valueItem={value}
    onItemSelected={(option) => onChainChange(option?.chainName)}
  />
}
import { Chain } from "@chain-registry/types";
import { ChangeChainCombobox } from "@interchain-ui/react";
import { getLogo } from "@/utils";

export type ChainProps = {
  name: string;
  chains: Chain[];
  onChainChange?: (chainName?: string) => void;
};

export function Chain(
  { name, chains = [], onChainChange = () => {} }: ChainProps,
) {
  const options = chains.map((chain) => ({
    label: chain.pretty_name,
    value: chain.chain_name,
    iconUrl: getLogo(chain),
  }));

  const value = options.find((chain) => chain.value === name)!;

  return (
    <ChangeChainCombobox
      size="md"
      maxHeight={360}
      options={options}
      valueItem={value}
      onItemSelected={(option) => onChainChange(option?.value)}
    />
  );
}

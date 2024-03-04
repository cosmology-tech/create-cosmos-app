import { chains } from "chain-registry";
import { Box } from "@interchain-ui/react";
import { useChain } from "@cosmos-kit/react";
import { ChainSelect } from "../wallet/Chain";
import { CHAIN_NAME } from "@/config";

export type FooterProps = {
  chainName?: string;
  onChainChange?: (chainName?: string) => void;
};

export function Footer({
  chainName = CHAIN_NAME,
  onChainChange = () => {},
}: FooterProps) {
  const { chain } = useChain(chainName);

  return (
    <Box
      width="$full"
      bottom="0"
      position="fixed"
      borderTopColor="$divider"
      borderTopWidth="1px"
      borderTopStyle="solid"
      justifyContent="center"
      display={{ mobile: "flex", tablet: "flex", desktop: "none" }}
    >
      <Box
        minWidth="24rem"
        p={{ mobile: "$6", desktop: "$8" }}
      >
        <ChainSelect
          chains={chains}
          chainName={chain.chain_name}
          onChange={onChainChange}
        />
      </Box>
    </Box>
  );
}

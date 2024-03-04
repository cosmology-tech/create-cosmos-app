import { useContext } from "react";
import { Box, Text } from "@interchain-ui/react";
import { ApplicationContext } from "@/config";
import { useBalances } from "@/hooks";

export function Home() {
  const { chainName } = useContext(ApplicationContext);

  const balances = useBalances(chainName);

  console.log("balances", balances);

  return (
    <Box>
      <Text>HomePage</Text>
    </Box>
  );
}

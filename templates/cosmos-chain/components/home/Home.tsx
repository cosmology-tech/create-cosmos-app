import { useContext } from "react";
import { Box, Text } from "@interchain-ui/react";
import { ApplicationContext } from "@/config";
import { useBalances, useQueryHooks } from "@/hooks";

export function Home() {
  const { chainName } = useContext(ApplicationContext);

  const {} = useQueryHooks(chainName);
  // const balances = useBalances(chainName);

  return (
    <Box>
      <Text>HomePage</Text>
    </Box>
  );
}

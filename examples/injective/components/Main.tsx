import { Box, Text } from '@interchain-ui/react';
import { useChain } from "@cosmos-kit/react";
import { defaultChainName } from "@/config";

export function Main() {
  const { isWalletConnected } = useChain(defaultChainName);

  return (
    isWalletConnected ?
      <Text>Sending Token Section</Text> :
      <Box textAlign="center">
        <Text color="$gray600" fontSize="$xl" attributes={{ my: '$20' }}>
          Please connect to your wallet.
        </Text>
      </Box>
  );
}
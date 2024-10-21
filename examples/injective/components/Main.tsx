import { Box, Text } from '@interchain-ui/react';
import { useSwap } from "@/hooks";

export function Main() {
  const { isWalletConnected } = useSwap();

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
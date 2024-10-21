import { Box, Text } from '@interchain-ui/react';
import { useChain } from "@interchain-kit/react";
import { defaultChainName } from "@/config";
import { WalletState } from '@interchain-kit/core'
import SendMsg from './SendMsg';

export function Main() {
  const { status } = useChain(defaultChainName);

  return (
    status === WalletState.Connected ?
      <SendMsg /> :
      <Box textAlign="center">
        <Text color="$gray600" fontSize="$xl" attributes={{ my: '$20' }}>
          Please connect to your wallet.
        </Text>
      </Box>
  );
}
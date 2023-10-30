import { Box, Text, Stack } from '@interchain-ui/react';

export type SwapInfoProps = {
  priceImpact: string;
  swapFee: {
    value: string;
    percent: string;
  };
  expectedOutput: string;
  minimumReceived?: string;
};

export function SwapInfo({
  swapFee,
  priceImpact,
  expectedOutput,
  minimumReceived,
}: SwapInfoProps) {
  return (
    <Box>
      <Stack align="center" attributes={{ justifyContent: "space-between", marginBottom: '$7' }}>
        <Text color="$textSecondary">Price Impact</Text>
        <Text color="$textSecondary" fontWeight="$semibold" fontFamily="monospace">
          {priceImpact}
        </Text>
      </Stack>
      <Stack align="center" attributes={{ justifyContent: "space-between", marginBottom: '$10' }}>
        <Text color="$textSecondary">Swap Fee ({swapFee?.percent})</Text>
        <Text color="$textSecondary" fontWeight="$semibold" fontFamily="monospace">
         {swapFee?.value}
        </Text>
      </Stack>
      <Stack align="center" attributes={{ justifyContent: "space-between", marginBottom: '$7' }}>
        <Text color="$textSecondary">Expected Output</Text>
        <Text color="$textSecondary" fontWeight="$semibold" fontFamily="monospace">
          {expectedOutput}
        </Text>
      </Stack>
      <Stack align="center" attributes={{ justifyContent: "space-between", marginBottom: '$10' }}>
        <Text color="$textSecondary">Minimum received after slippage</Text>
        <Text color="$textSecondary" fontWeight="$semibold" fontFamily="monospace">
          {minimumReceived}
        </Text>
      </Stack>
    </Box>
  );
}

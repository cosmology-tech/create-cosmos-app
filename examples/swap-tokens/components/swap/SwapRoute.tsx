import { Fragment } from 'react';
import { Box, Text, Stack, useColorModeValue } from '@interchain-ui/react';
import { Token } from '.';

export type SwapRouteStep = {
  poolId: string;
  swapFee: string;
  base: Token;
  quote: Token;
};

export type SwapRouteProps = {
  from: Token;
  to: Token;
  steps?: SwapRouteStep[];
};

export function SwapRoute({ from, to, steps = [] }: SwapRouteProps) {
  return (
    <Box>
      <Text color="$textSecondary" attributes={{ py: '$10' }}>
        Route
      </Text>
      <Stack attributes={{ alignItems: 'center' }}>
        <Box mr="$6">
          <img width="32" height="32" alt={from.symbol} src={from.logo} />
        </Box>
        <Dashes />
        {steps.map((route: SwapRouteStep) => (
          <Fragment key={route.poolId}>
            <Box ml="$6" mr="$5" width="$16" height="$12" position="relative">
              <img width="32" height="32" alt={route.base.symbol} src={route.base.logo} />
              <Box top="$0" right="$0" position="absolute">
                <img width="32" height="32" alt={route.quote.symbol} src={route.quote.logo} />
              </Box>
            </Box>
              <Text color="$textSecondary" fontWeight="$bold" attributes={{ marginRight: "$5" }}>
                {route?.swapFee}
              </Text>
              <Dashes />
          </Fragment>
        ))}
        <Box ml="$6">
          <img width="32" height="32" alt={to.symbol} src={to.logo} />
        </Box>
      </Stack>
    </Box>
  );
}

export function Dashes() {
  return (
    <Box
      px="$7"
      style={{
        flex: '1',
        height: '1px',
        background: `repeating-linear-gradient(90deg, ${useColorModeValue(
          '#d9d9d9',
          '#718096'
        )} 0 4px, #0000 0 12px)`}}
    />
  )
}

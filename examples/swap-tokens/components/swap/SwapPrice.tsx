import BigNumber from 'bignumber.js';
import { Box, Text, Stack } from '@interchain-ui/react';
import { Token } from '.';

export type SwapPriceProps = {
  from: Token
  to: Token
}

export function SwapPrice({
  from, to
}: SwapPriceProps) {

  const n = from.price && to.price 
    ? new BigNumber(from.price).dividedBy(to.price).decimalPlaces(6).toString()
    : '...'

  return (
    <Box py="$11" display="flex" flex="1" justifyContent="space-between">
      <Text color="$text">Price</Text>
      { from.price && to.price ? 
        <Stack align="center">
          <Text fontWeight="$semibold">
            {`1 ${from.symbol} = ${n} ${to.symbol}`}
          </Text>
          <Text color="$textSecondary" attributes={{ marginLeft: "$9", marginRight: "$13" }}>
            ~ ${`${from.price}`}
          </Text>
        </Stack> : null}
    </Box>
  )
}
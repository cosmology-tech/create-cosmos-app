import { useState } from 'react';
import { Box, IconButton } from '@interchain-ui/react';
import { Token, SwapPrice, SwapRoute, SwapRouteStep, SwapInfo, SwapInfoProps } from '.';

export type SwapDetailsProps = {
  to: Token;
  from: Token;
  info: SwapInfoProps;
  steps: SwapRouteStep[];
  expandable?: boolean
}

export function SwapDetails({
  to,
  from,
  info = {} as SwapInfoProps,
  steps = [],
  expandable = false
}: SwapDetailsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box>
      <Box width="$full" display="flex" alignItems="center">
        <SwapPrice from={from} to={to} />
        <IconButton
          size="sm"
          icon="arrowDownS"
          disabled={!expandable}
          onClick={() => setIsOpen(v => !v)}
          intent={isOpen ? "tertiary" : "text"}
        />
      </Box>
      <Box
        overflow="hidden"
        transition="all 0.25s"
        opacity={isOpen ? 1 : 0}
        mb={isOpen ? '$13': '$0'}
        maxHeight={isOpen ? '300px' : '0'} >
        <SwapInfo {...info} />
        <SwapRoute from={from} to={to} steps={steps} />
      </Box>
    </Box>
  )
}
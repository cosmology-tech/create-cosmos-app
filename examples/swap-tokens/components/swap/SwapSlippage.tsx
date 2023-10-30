import { useState } from 'react';
import { Box, Text, Stack, Button, IconButton } from '@interchain-ui/react';
import { Slippages } from '.';

export type SwapSlippageProps = {
  slippage?: number;
  slippages?: number[];
  onChange?: (tolerance: number) => void;
}

export function SwapSlippage(props: SwapSlippageProps) {
  return (
    <Stack justify="space-between" attributes={{ my: "$9", height: "$12", alignItems: "center" }}>
      <Text color="$textSecondary">Slippage tolerance</Text>
      <SwapSlippageTolerance {...props} />
    </Stack>
  )
}

export function SwapSlippageTolerance({
  slippage = 1,
  slippages = Slippages,
  onChange,
}: SwapSlippageProps) {
  const [isOpen, setIsOpen] = useState(false);

  function onSlippageChange(slippage: number) {
    setIsOpen(false);
    onChange?.(slippage);
  }

  return (
    <Stack
      attributes={{
        flex: 1,
        height: "$full",
        overflow: "hidden",
        position: "relative",
        alignItems: "center",
        justifyContent: "flex-end"
      }}
    >
    <Stack space="$7" attributes={{ display: isOpen ? "none" : "flex", alignItems: "center" }}>
      <Text color="$textSecondary" fontWeight="$bold">
        {slippage}%
      </Text>
      <IconButton size="sm" icon="settingFill" intent="text" onClick={() => setIsOpen(true)} />
    </Stack>

    <Box
      position="absolute"
      transition="all 0.25s"
      opacity={isOpen ? 1 : 0}
      transform={isOpen ? 'translate(0)' : 'translate(100%)'}
    >
      <Stack space="$5" align="center"> 
        {slippages.map((percent) => (
          <Button
            size="sm"
            key={percent}
            onClick={() => onSlippageChange?.(percent) }
            intent={slippage === percent ? "tertiary" : "text"}
          >
            {percent}%
          </Button>
        ))}
        
        <IconButton size="sm" icon="closeFilled" intent="text" onClick={() => setIsOpen(false)} />
      </Stack>
    </Box>
  </Stack>
  )
}
import BigNumber from 'bignumber.js';
import { Box, Divider, Spinner, useColorModeValue } from '@interchain-ui/react';
import { Swap } from '@/hooks';
import {
  Token, TokenList,
  SwapButton, SwapFromTo, SwapDetails,
  SwapSlippage, SwapInfoProps, SwapRouteStep
} from '.';

export type SwapProps = {
  from?: Token,
  to?: Token,
  swap: Swap,
  info: SwapInfoProps
  steps: SwapRouteStep[]
  tokens: TokenList
  amount?: string
  loading?: boolean
  swapping?: boolean
  slippage?: number
  buttonText?: string
  buttonDisabled?: boolean
  onFlip?: () => void
  onToChange?: (token: Token) => void
  onFromChange?: (token: Token) => void
  onSwapButtonClick?: () => void
  onAmountChange?: (amount: string) => void
  onSlippageChange?: (tolerance: number) => void
}

export function Swap({
  from = {} as Token,
  to = {} as Token,
  swap,
  info,
  steps = [],
  tokens,
  amount = '0',
  loading = false,
  swapping = false,
  slippage,
  buttonText = 'Swap',
  buttonDisabled = false,
  onFlip = () => {},
  onToChange = () => {},
  onFromChange = () => {}, 
  onAmountChange = () => {},
  onSwapButtonClick = () => {},
  onSlippageChange = () => {},
}: SwapProps) {

  const isDetailsExpandable = new BigNumber(amount).gt(0) && Boolean(info);

  return (
    <Box mx="auto" maxWidth="500px" minHeight="480px" overflow="hidden" position="relative">
      <SwapFromTo
        to={to}
        from={from}
        swap={swap}
        amount={amount}
        tokens={tokens}
        onFlip={onFlip}
        onToChange={onToChange}
        onFromChange={onFromChange}
        onAmountChange={onAmountChange}
      />
      <SwapSlippage slippage={slippage} onChange={onSlippageChange} />
      <Divider />
      <SwapDetails to={to} from={from} info={info} steps={steps} expandable={isDetailsExpandable} />
      <SwapButton text={buttonText} disabled={buttonDisabled} onClick={onSwapButtonClick} />
      <Box
        position="absolute" top="$0" left="$0" right="$0" bottom="0"
        alignItems="center" justifyContent="center" borderRadius="$md"
        backgroundColor={useColorModeValue('$blackAlpha200', '$blackAlpha500')}
        display={loading || swapping ? 'flex' : 'none'}
      >
        <Spinner size="$5xl" color={useColorModeValue('$blackAlpha800', '$whiteAlpha900') }/>
      </Box>
    </Box>
  );
}
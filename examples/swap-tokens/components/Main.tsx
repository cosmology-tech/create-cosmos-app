import { Box, Text } from '@interchain-ui/react';
import { useSwap } from "@/hooks";
import { Swap } from '@/components';

export function Main() {
  const {
    to, setTo,
    from, setFrom,
    swap, info,
    steps, tokens, amount,
    slippage, setSlippage,
    onFlip, onSwap, onAmountChange,
    isLoading, isSwapping, isRoutesEmpty,
    isSwapDisabled, isWalletConnected, isInsufficientBalance
  } = useSwap();

  function buttonText() {
    if (isSwapping) return 'Swapping';
    if (!isLoading && isRoutesEmpty) return 'No Route for This Trade';
    if (isInsufficientBalance) return 'Insufficient Balance';
    return 'Swap';
  }

  return (
    isWalletConnected ?
      <Swap
        to={to}
        from={from}
        swap={swap}
        info={info?.display!}
        steps={steps}
        tokens={tokens}
        amount={amount}
        loading={isLoading}
        swapping={isSwapping}
        slippage={slippage}
        buttonText={buttonText()}
        buttonDisabled={isSwapDisabled}
        onFlip={onFlip}
        onToChange={setTo}
        onFromChange={setFrom}
        onAmountChange={onAmountChange}
        onSlippageChange={setSlippage}
        onSwapButtonClick={onSwap}
      /> :
      <Box textAlign="center">
        <Text color="$gray600" fontSize="$xl" attributes={{ my: '$20' }}>
          Please connect to your wallet.
        </Text>
      </Box>
  );
}
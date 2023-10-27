import { useState } from 'react';
import { Box, Stack, IconButton, IconName, useColorModeValue } from '@interchain-ui/react';
import { Token, TokenList, SwapTokenInput } from '.';
import { Swap } from '@/hooks';

export type SwapFromToProps = {
  from: Token
  to: Token
  swap: Swap
  tokens: TokenList
  amount?: string
  onFlip?: () => void
  onToChange?: (token: Token) => void
  onFromChange?: (token: Token) => void
  onAmountChange?: (amount: string) => void
}

export function SwapFromTo({ from, to, swap, tokens, amount = '0', onFlip, onToChange, onFromChange, onAmountChange = () => {} }: SwapFromToProps) {
  return (
    <Stack space="$7" direction="vertical" attributes={{ position: 'relative' }}>
      <SwapTokenInput
        title="From"
        token={from}
        tokens={tokens.rest}
        amount={amount}
        $value={swap.from.$value}
        disabled={false}
        showBalance={true}
        showHalfButton={true}
        showMaxButton={true}
        onHalfButtonClick={() => onAmountChange(String(Number(from.amount) / 2))}
        onMaxButtonClick={() => onAmountChange(String(from.amount))}
        onTokenSelected={onFromChange}
        onAmountChange={onAmountChange}
      />
      <SwapTokenInput
        title="To"
        token={to}
        tokens={tokens.rest}
        amount={swap.to.amount}
        $value={swap.to.$value}
        disabled={true}
        onTokenSelected={onToChange}
      />
      <Box zIndex="0.5" top="50%" left="50%" position="absolute" transform="translate(-50%, -50%)">
        <SwapSwitch onClick={onFlip} />
      </Box>
    </Stack>
  )
}

export type SwapSwitchProps = {
  onClick?: () => void
}

export function SwapSwitch({
  onClick = () => {},
}) {
  const [icon, setIcon] = useState<IconName>("arrowDownLine")
  return (
    <Stack attributes={{ justifyContent: 'center' }}>
      <Box
        width="$14"
        height="$14"
        overflow="hidden"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderWidth="3px"
        borderStyle="$solid"
        borderRadius="$full"
        borderColor={useColorModeValue('$white', '$gray700')}
        attributes={{ 
          transition: 'all 0.15s',
          transform: `${icon === 'arrowLeftRightLine' ? 'rotate(90deg)' : 'rotate(0)' }`
        }}
      >
        <IconButton
          icon={icon}
          intent="text"
          isRound={true}
          onClick={onClick}
          onHoverStart={() => setIcon("arrowLeftRightLine")}
          onHoverEnd={() => setIcon("arrowDownLine")}
        />
      </Box>
    </Stack>
  )
}
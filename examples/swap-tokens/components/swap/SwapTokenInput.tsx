import { useTheme, Box, Text, Stack, Button, ButtonProps, ChainSwapCombobox, ComboboxOption, useColorModeValue } from '@interchain-ui/react';
import { Token } from '.';

export function AmountButton({ children, onClick }: ButtonProps) {
  const attrs = {
    style: {
      color: '#fff',
      backgroundColor: useColorModeValue('#A2AEBB', '#434B55')
    }
  };
  return (
    <Button size="xs" intent="text" onClick={onClick} domAttributes={attrs}>
      {children}
    </Button>
  )
}

export type SwapTokenInputProps = {
  token?: Token
  tokens?: Token[]
  title?: string
  amount?: string
  $value?: string
  disabled?: boolean
  balanceLabel?: string
  showBalance?: boolean
  showMaxButton?: boolean
  showHalfButton?: boolean
  onAmountChange?: (amount: string) => void
  onTokenSelected?: (token: Token) => void
  onMaxButtonClick?: () => void
  onHalfButtonClick?: () => void
}

export function SwapTokenInput({
  title = '',
  token= {} as Token,
  tokens = [],
  amount = '0',
  $value = '$0',
  disabled = false,
  balanceLabel = 'Available',
  showBalance = false,
  showMaxButton = false,
  showHalfButton = false,
  onAmountChange = () => {},
  onTokenSelected = () => {},
  onMaxButtonClick = () => {},
  onHalfButtonClick = () => {},
}: SwapTokenInputProps) {
  const options = tokens.map(({ logo, chain, amount, symbol, $value }) => ({
    amount,
    iconUrl: logo,
    name: chain?.pretty_name,
    tokenName: symbol,
    notionalValue: $value,
  })) as ComboboxOption[]

  const { colorMode } = useTheme();

  const current = token?.denom ? {
    amount: token.amount,
    iconUrl: token.logo,
    name: token.chain?.pretty_name,
    tokenName: token.symbol,
    notionalValue: token.$value,
  } as ComboboxOption : options[0]

  function onItemSelected(item: ComboboxOption) {
    onTokenSelected(tokens.find(({ symbol }) => symbol === item.tokenName) as Token)
  }

  const addon = (
    <Stack direction="vertical" space="$0">
      {disabled
        ? <Text fontSize="$2xl" fontFamily="monospace">{amount}</Text>
        : <input
            type="text"
            value={amount}
            pattern="[0-9]*(.[0-9]+)?"
            maxLength={10}
            onChange={(e) => onAmountChange(e.target.value)}
            style={{
              width: '100%',
              fontFamily: 'monospace',
              color: colorMode === 'dark' ? 'rgb(238, 242, 248)' : 'rgb(44, 49, 55)',
              border: 0, outline: 'none',
              appearance: 'none',
              fontSize: '22px',
              textAlign: 'right',
              background: 'transparent'
            }}
          />
        }
      <Box display={Boolean(amount) && amount !== "0" ? "block" : "none"}>
        <Text color="$textSecondary" fontSize="$xs" textAlign="right">
          {`≈ ${$value}`}
        </Text>
      </Box>
    </Stack>
  )

  return (
    <Stack
      space="$0"
      direction="vertical"
      attributes={{
        minWidth: "468px",
        minHeight: "$23",
        paddingTop: "$5",
        borderRadius: "$lg",
        position: "relative",
        backgroundColor: "$progressBg",
      }}
    >
      <Stack
        space="$0"
        attributes={{
          pl: "$9",
          pr: "$5",
          minHeight: "$10",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text color="$textSecondary" attributes={{ minWidth: '66px' }}>{title}</Text>
        <Stack space="$5" attributes={{ alignItems: "center" }}>
          {showBalance ? <>
            <Text color="$textSecondary" fontWeight="$semibold">
              {balanceLabel}
            </Text>
            <Text textAlign="right" fontWeight="$semibold" attributes={{ mx: "$4" }}>
              {token.amount}
            </Text>
          </> : null}
          <Stack space="$5" attributes={{ flex: 1, justifyContent: "flex-end" }}>
            {showHalfButton ? <AmountButton onClick={onHalfButtonClick}>Half</AmountButton> : null}
            {showMaxButton ? <AmountButton onClick={onMaxButtonClick}>Max</AmountButton> : null}
          </Stack>
        </Stack>
      </Stack>
      
      {options.length > 0 ?
        <Box attributes={{ borderRadius: "$lg" }}>
          <ChainSwapCombobox
            size="md"
            endAddon={addon}
            options={options}
            valueItem={current}
            onItemSelected={onItemSelected}
          />
        </Box> : null}
    </Stack>
  )
}
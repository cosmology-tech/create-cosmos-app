import { Button } from '@interchain-ui/react';

export type SwapButtonProps = {
  text?: string
  disabled?: boolean
  onClick?: () => void
}

export function SwapButton({
  text = 'Swap',
  disabled = false,
  onClick = () => {},
}: SwapButtonProps) {
  return (
    <Button
      size="lg"
      intent="tertiary"
      onClick={onClick}
      disabled={disabled}
      attributes={{ width: "$full" }}
    >
    {text}
    </Button>
  )
}
import { Box, Stack, ClipboardCopyText, useColorModeValue } from '@interchain-ui/react';
import { WalletState } from '@interchain-kit/core'
import { useChain } from '@interchain-kit/react';
import { getChainLogo } from '@/utils';
import { defaultChainName } from "@/config";
import { User } from './User';
import { Chain } from './Chain';
import { Button } from './Connect';
import { Warning } from './Warning';

export function Wallet() {
  const { chain, status, wallet, username, address, message, connect, openView } = useChain(defaultChainName);

  const ConnectButton = {
    [WalletState.Connected]: <Button.Connected onClick={openView} />,
    [WalletState.Connecting]: <Button.Connecting />,
    [WalletState.Disconnected]: <Button.Disconnected onClick={openView} />,
    [WalletState.Reject]: <Button.Rejected onClick={openView} />
  }[status] || <Button.Connect onClick={openView} />;

  return (
    <Box py="$16">
      <Stack attributes={{ mb: '$12', justifyContent: 'center' }}>
        <Chain name={chain.prettyName || 'prettyName unknown'} logo={getChainLogo(chain.chainName)!} />
      </Stack>
      <Stack
        direction="vertical"
        attributes={{
          mx: 'auto',
          px: '$8',
          py: '$15',
          maxWidth: '21rem',
          borderRadius: '$lg',
          justifyContent: 'center',
          backgroundColor: useColorModeValue('$white', '$blackAlpha500'),
          boxShadow: useColorModeValue(
            '0 0 2px #dfdfdf, 0 0 6px -2px #d3d3d3',
            '0 0 2px #363636, 0 0 8px -2px #4f4f4f'
          )
        }}
      >
        {username ? <User name={username} /> : null}
        {address ? <ClipboardCopyText text={address} truncate="middle" /> : null}
        <Box
          my="$8"
          flex="1"
          width="full"
          display="flex"
          height="$16"
          overflow="hidden"
          justifyContent="center"
          px={{ mobile: '$8', tablet: '$10' }}>
          {ConnectButton}
        </Box>

        {message && [WalletState.Reject].includes(status)
          ? <Warning text={`${wallet?.option?.prettyName}: ${message}`} />
          : null}
      </Stack>
    </Box>
  )
}
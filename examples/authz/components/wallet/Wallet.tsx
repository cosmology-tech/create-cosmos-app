// TODO fix type issues
// @ts-nocheck

import { useEffect } from 'react';
import {
  Box,
  ClipboardCopyText,
  Stack,
  useColorModeValue,
} from '@interchain-ui/react';
import { WalletStatus } from 'cosmos-kit';
import { useChain, useManager } from '@cosmos-kit/react';
import { chains } from 'chain-registry';
import { User } from './User';
import { Chain } from './Chain';
import { Warning } from './Warning';
import {
  ButtonConnect,
  ButtonConnected,
  ButtonConnecting,
  ButtonDisconnected,
  ButtonError,
  ButtonNotExist,
  ButtonRejected,
} from './Connect';
import { ChainCard } from './ChainCard';

export const DEFAULT_CHAIN_NAME = 'cosmoshub';
export const CHAIN_NAME_STORAGE_KEY = 'selected-chain';

export type WalletProps = {
  chainName?: string;
  isMultiChain?: boolean;
  onChainChange?: (chainName?: string) => void;
};

export function Wallet({
  chainName = DEFAULT_CHAIN_NAME,
  isMultiChain = false,
  onChainChange = () => {},
}: WalletProps) {
  const {
    chain,
    status,
    wallet,
    username,
    address,
    message,
    connect,
    openView,
  } = useChain(chainName);
  const { getChainLogo } = useManager();

  const ConnectButton = {
    [WalletStatus.Connected]: <ButtonConnected onClick={openView} />,
    [WalletStatus.Connecting]: <ButtonConnecting />,
    [WalletStatus.Disconnected]: <ButtonDisconnected onClick={connect} />,
    [WalletStatus.Error]: <ButtonError onClick={openView} />,
    [WalletStatus.Rejected]: <ButtonRejected onClick={connect} />,
    [WalletStatus.NotExist]: <ButtonNotExist onClick={openView} />,
  }[status] || <ButtonConnect onClick={connect} />;

  function handleChainChange(chainName?: string) {
    onChainChange(chainName);
    if (chainName) {
      localStorage.setItem(CHAIN_NAME_STORAGE_KEY, chainName);
    } else {
      localStorage.removeItem(CHAIN_NAME_STORAGE_KEY);
    }
  }

  useEffect(() => {
    onChainChange(
      localStorage.getItem(CHAIN_NAME_STORAGE_KEY) || DEFAULT_CHAIN_NAME
    );
  }, []);

  return (
    <Box py="$16">
      <Box mx="auto" maxWidth="28rem" attributes={{ mb: '$12' }}>
        {isMultiChain ? (
          <Chain
            chainName={chain.chain_name}
            chainInfos={chains}
            onChange={handleChainChange}
          />
        ) : (
          <ChainCard
            prettyName={chain.pretty_name}
            icon={getChainLogo(chainName)}
          />
        )}
      </Box>
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
          ),
        }}
      >
        {username ? <User name={username} /> : null}
        {address ? (
          <ClipboardCopyText text={address} truncate="middle" />
        ) : null}
        <Box
          my="$8"
          flex="1"
          width="full"
          display="flex"
          height="$16"
          overflow="hidden"
          justifyContent="center"
          px={{ mobile: '$8', tablet: '$10' }}
        >
          {ConnectButton}
        </Box>

        {message &&
        [WalletStatus.Error, WalletStatus.Rejected].includes(status) ? (
          <Warning text={`${wallet?.prettyName}: ${message}`} />
        ) : null}
      </Stack>
    </Box>
  );
}

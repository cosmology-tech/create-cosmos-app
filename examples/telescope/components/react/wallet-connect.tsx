import React, { MouseEventHandler, ReactNode } from 'react';
import { Button, Icon, Stack, Text, useColorModeValue } from '@interchain-ui/react';
import { ConnectWalletType } from '../types';
import { WalletStatus } from 'cosmos-kit';

export const ConnectWalletButton = ({
  buttonText,
  isLoading,
  isDisabled,
  onClickConnectBtn
}: ConnectWalletType) => {
  return (
    <Button
      fluidWidth
      attributes={{
        minWidth: 'fit-content',
        backgroundImage: 'linear-gradient(109.6deg, rgba(157,75,199,1) 11.2%, rgba(119,81,204,1) 83.1%)',
        color: 'white',
        opacity: 1,
        transition: 'all .5s ease-in-out',
      }}
      size="lg"
      isLoading={isLoading}
      disabled={isDisabled}
      onClick={onClickConnectBtn}
    >
      <Icon
        name='walletFilled'
        attributes={{ marginRight: 2 }}
      />
      {buttonText ? buttonText : 'Connect Wallet'}
    </Button>
  );
};

export const Disconnected = ({
  buttonText,
  onClick
}: {
  buttonText: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    // @ts-ignore
    <ConnectWalletButton
      buttonText={buttonText} onClickConnectBtn={onClick} />
  );
};

export const Connected = ({
  buttonText,
  onClick
}: {
  buttonText: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    // @ts-ignore
    <ConnectWalletButton
      buttonText={buttonText} onClickConnectBtn={onClick} />
  );
};

export const Connecting = () => {
  // @ts-ignore
  return <ConnectWalletButton
    isLoading={true} />;
};

export const Rejected = ({
  buttonText,
  wordOfWarning,
  onClick
}: {
  buttonText: string;
  wordOfWarning?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  const bg = useColorModeValue('orange.200', 'orange.300');

  return (
    <Stack>
      {/* @ts-ignore */}
      <ConnectWalletButton
        buttonText={buttonText}
        isDisabled={false}
        onClickConnectBtn={onClick}
      />
      {wordOfWarning && (
        <Stack
          direction='horizontal'
          space={1}
          attributes={{
            borderRadius: 'md',
            backgroundColor: bg,
            color: 'blackAlpha.900',
            padding: 4,
          }}
        >
          <Icon name='errorWarningFill' attributes={{ marginTop: 1 }} />
          <Text>
            <Text fontWeight="semibold" as="span">
              Warning:&ensp;
            </Text>
            {wordOfWarning}
          </Text>
        </Stack>
      )}
    </Stack>
  );
};

export const Error = ({
  buttonText,
  wordOfWarning,
  onClick
}: {
  buttonText: string;
  wordOfWarning?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  const bg = useColorModeValue('orange.200', 'orange.300');

  return (
    <Stack>
      {/* @ts-ignore */}
      <ConnectWalletButton
        buttonText={buttonText}
        isDisabled={false}
        onClickConnectBtn={onClick}
      />
      {wordOfWarning && (
        <Stack
          direction='horizontal'
          space={1}
          attributes={{
            borderRadius: 'md',
            backgroundColor: bg,
            color: 'blackAlpha.900',
            padding: 4,
          }}
        >
          <Icon name='errorWarningFill' attributes={{ marginTop: 1 }} />
          <Text>
            <Text fontWeight="semibold" as="span">
              Warning:&ensp;
            </Text>
            {wordOfWarning}
          </Text>
        </Stack>
      )}
    </Stack>
  );
};

export const NotExist = ({
  buttonText,
  onClick
}: {
  buttonText: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    // @ts-ignore
    <ConnectWalletButton
      buttonText={buttonText}
      isDisabled={false}
      onClickConnectBtn={onClick}
    />
  );
};

export const WalletConnectComponent = ({
  walletStatus,
  disconnect,
  connecting,
  connected,
  rejected,
  error,
  notExist
}: {
  walletStatus: WalletStatus;
  disconnect: ReactNode;
  connecting: ReactNode;
  connected: ReactNode;
  rejected: ReactNode;
  error: ReactNode;
  notExist: ReactNode;
}) => {
  switch (walletStatus) {
    case WalletStatus.Disconnected:
      return <>{disconnect}</>;
    case WalletStatus.Connecting:
      return <>{connecting}</>;
    case WalletStatus.Connected:
      return <>{connected}</>;
    case WalletStatus.Rejected:
      return <>{rejected}</>;
    case WalletStatus.Error:
      return <>{error}</>;
    case WalletStatus.NotExist:
      return <>{notExist}</>;
    default:
      return <>{disconnect}</>;
  }
};

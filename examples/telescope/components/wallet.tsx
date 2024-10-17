import { useChain } from '@cosmos-kit/react';
import {
  Box,
  Center,
  Icon,
  Stack,
  useColorModeValue,
} from '@interchain-ui/react';
import { MouseEventHandler } from 'react';
import {
  Astronaut,
  Error,
  Connected,
  ConnectedShowAddress,
  ConnectedUserInfo,
  Connecting,
  ConnectStatusWarn,
  CopyAddressBtn,
  Disconnected,
  NotExist,
  Rejected,
  RejectedWarn,
  WalletConnectComponent,
  ChainCard,
} from '../components';
import { chainName } from '../config';

export const WalletSection = () => {
  const {
    connect,
    openView,
    status,
    username,
    address,
    message,
    wallet,
    chain: chainInfo,
    logoUrl,
  } = useChain(chainName);

  const chain = {
    chainName,
    label: chainInfo.pretty_name,
    value: chainName,
    icon: logoUrl,
  };

  // Events
  const onClickConnect: MouseEventHandler = async (e) => {
    e.preventDefault();
    await connect();
  };

  const onClickOpenView: MouseEventHandler = (e) => {
    e.preventDefault();
    openView();
  };

  // Components
  const connectWalletButton = (
    // @ts-ignore
    <WalletConnectComponent
      walletStatus={status}
      disconnect={
        // @ts-ignore
        <Disconnected buttonText="Connect Wallet" onClick={onClickConnect} />
      }
      // @ts-ignore
      connecting={<Connecting />}
      connected={
        // @ts-ignore
        <Connected buttonText={'My Wallet'} onClick={onClickOpenView} />
      }
      // @ts-ignore
      rejected={<Rejected buttonText="Reconnect" onClick={onClickConnect} />}
      // @ts-ignore
      error={<Error buttonText="Change Wallet" onClick={onClickOpenView} />}
      notExist={
        // @ts-ignore
        <NotExist buttonText="Install Wallet" onClick={onClickOpenView} />
      }
    />
  );

  const connectWalletWarn = (
    // @ts-ignore
    <ConnectStatusWarn
      walletStatus={status}
      rejected={
        // @ts-ignore
        <RejectedWarn
          icon={<Icon name='errorWarningFill' attributes={{ marginTop: 1 }} />}
          wordOfWarning={`${wallet?.prettyName}: ${message}`}
        />
      }
      error={
        // @ts-ignore
        <RejectedWarn
          icon={<Icon name='errorWarningFill' attributes={{ marginTop: 1 }} />}
          wordOfWarning={`${wallet?.prettyName}: ${message}`}
        />
      }
    />
  );

  const userInfo = username && (
    // @ts-ignore
    <ConnectedUserInfo username={username} icon={<Astronaut />} />
  );
  const addressBtn = (
    // @ts-ignore
    <CopyAddressBtn
      walletStatus={status}
      // @ts-ignore
      connected={<ConnectedShowAddress address={address} isLoading={false} />}
    />
  );

  return (
    <Center
      attributes={{
        paddingY: 16,
      }}
    >
      {/* @ts-ignore */}
      <Box
        gridTemplateColumns="1fr"
        rowGap={4}
        attributes={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 'full',
          maxWidth: 'sm',
        }}
      >
        {/* @ts-ignore */}
        <Box marginBottom={'20px'}>
          {/* @ts-ignore */}
          <ChainCard
            prettyName={chain?.label || chainName}
            icon={chain?.icon}
          />
        </Box>
        {/* @ts-ignore */}
        <Box
          px={6}
        >
          <Stack
            space={4}
            attributes={{
              borderRadius: 'lg',
              bg: useColorModeValue('white', 'blackAlpha.400'),
              boxShadow: useColorModeValue(
                '0 0 2px #dfdfdf, 0 0 6px -2px #d3d3d3',
                '0 0 2px #363636, 0 0 8px -2px #4f4f4f'
              ),
              justifyContent: 'center',
              alignItems: 'center',
              paddingX: 4,
              paddingY: { mobile: 6, mdMobile: 12 },
            }}
          >
            {userInfo}
            {addressBtn}
            {/* @ts-ignore */}
            <Box
              width='full'
              maxWidth={{ mobile: 52, mdMobile: 64 }}
            >
              {connectWalletButton}
            </Box>
            {connectWalletWarn &&
              // @ts-ignore
              <Box>
                {connectWalletWarn}
              </Box>
            }
          </Stack>
        </Box>
      </Box>
    </Center>
  );
};

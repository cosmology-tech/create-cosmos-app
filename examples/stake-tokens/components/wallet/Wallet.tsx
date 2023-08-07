import { useChain, useManager } from '@cosmos-kit/react';
import {
  Box,
  Center,
  Grid,
  GridItem,
  Icon,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { MouseEventHandler, useEffect, useMemo } from 'react';
import { FiAlertTriangle } from 'react-icons/fi';

import { ChainName } from '@cosmos-kit/core';
import { defaultChainName } from '@/config';
import {
  Connected,
  Connecting,
  Disconnected,
  NotExist,
  Error,
  Rejected,
  WalletConnectComponent,
  ConnectWalletButton,
} from './WalletConnect';
import { ConnectStatusWarn, RejectedWarn } from './WarnBlock';
import { ChooseChain } from './ChooseChain';
import { ConnectedShowAddress, CopyAddressBtn } from './AddressCard';
import { UserInfo } from './UserInfo';
import { Astronaut } from './Astronaut';
import { ChainCard } from './ChainCard';
import { ChainOption, HandleSelectChain } from './ChainDropdown';

export const WalletSection = ({
  isMultiChain,
  providedChainName,
  setChainName,
}: {
  isMultiChain: boolean;
  providedChainName?: ChainName;
  setChainName?: (chainName: ChainName | undefined) => void;
}) => {
  const { chainRecords, getChainLogo } = useManager();
  const {
    connect,
    openView,
    status,
    username,
    address,
    message,
    wallet,
    chain: chainInfo,
  } = useChain(providedChainName || defaultChainName);
  const { colorMode } = useColorMode();

  const chain = {
    chainName: defaultChainName,
    label: chainInfo.pretty_name,
    value: defaultChainName,
    icon: getChainLogo(defaultChainName),
  };

  const chainOptions = useMemo(
    () =>
      chainRecords.map((chainRecord) => {
        return {
          chainName: chainRecord?.name,
          label: chainRecord?.chain.pretty_name,
          value: chainRecord?.name,
          icon: getChainLogo(chainRecord.name),
        };
      }),
    [chainRecords, getChainLogo]
  );

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
    <WalletConnectComponent
      walletStatus={status}
      disconnect={
        <Disconnected buttonText="Connect Wallet" onClick={onClickConnect} />
      }
      connecting={<Connecting />}
      connected={
        <Connected buttonText={'My Wallet'} onClick={onClickOpenView} />
      }
      rejected={<Rejected buttonText="Reconnect" onClick={onClickConnect} />}
      error={<Error buttonText="Change Wallet" onClick={onClickOpenView} />}
      notExist={
        <NotExist buttonText="Install Wallet" onClick={onClickOpenView} />
      }
    />
  );

  const connectWalletWarn = (
    <ConnectStatusWarn
      walletStatus={status}
      rejected={
        <RejectedWarn
          icon={<Icon as={FiAlertTriangle} mt={1} />}
          wordOfWarning={`${wallet?.prettyName}: ${message}`}
        />
      }
      error={
        <RejectedWarn
          icon={<Icon as={FiAlertTriangle} mt={1} />}
          wordOfWarning={`${wallet?.prettyName}: ${message}`}
        />
      }
    />
  );

  useEffect(() => {
    setChainName?.(
      window.localStorage.getItem('selected-chain') || defaultChainName
    );
  }, [setChainName]);

  const onChainChange: HandleSelectChain = async (
    selectedValue: ChainOption | null
  ) => {
    setChainName?.(selectedValue?.chainName);
    if (selectedValue?.chainName) {
      window?.localStorage.setItem('selected-chain', selectedValue?.chainName);
    } else {
      window?.localStorage.removeItem('selected-chain');
    }
  };

  const chooseChain = (
    <ChooseChain
      chainName={providedChainName}
      chainInfos={chainOptions}
      onChange={onChainChange}
    />
  );

  const userInfo = username && (
    <UserInfo username={username} icon={<Astronaut />} />
  );

  const addressBtn = (
    <CopyAddressBtn
      walletStatus={status}
      connected={<ConnectedShowAddress address={address} isLoading={false} />}
    />
  );

  return (
    <Center py={16}>
      <Grid
        w="full"
        maxW="sm"
        templateColumns="1fr"
        rowGap={4}
        alignItems="center"
        justifyContent="center"
      >
        {isMultiChain ? (
          <GridItem>{chooseChain}</GridItem>
        ) : (
          <GridItem marginBottom={'20px'}>
            <ChainCard
              prettyName={chain?.label || defaultChainName}
              icon={chain?.icon}
            />
          </GridItem>
        )}
        {!providedChainName && isMultiChain ? (
          <ConnectWalletButton buttonText={'Connect Wallet'} isDisabled />
        ) : (
          <GridItem px={6}>
            <Stack
              justifyContent="center"
              alignItems="center"
              borderRadius="lg"
              bg={colorMode === 'light' ? 'white' : 'blackAlpha.400'}
              boxShadow={
                colorMode === 'light'
                  ? '0 0 2px #dfdfdf, 0 0 6px -2px #d3d3d3'
                  : '0 0 2px #363636, 0 0 8px -2px #4f4f4f'
              }
              spacing={4}
              px={4}
              py={{ base: 6, md: 12 }}
            >
              {userInfo}
              {addressBtn}
              <Box w="full" maxW={{ base: 52, md: 64 }}>
                {connectWalletButton}
              </Box>
              {connectWalletWarn && <GridItem>{connectWalletWarn}</GridItem>}
            </Stack>
          </GridItem>
        )}
      </Grid>
    </Center>
  );
};

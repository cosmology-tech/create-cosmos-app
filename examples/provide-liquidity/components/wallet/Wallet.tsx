import { useChain, useManager } from '@cosmos-kit/react';
import {
  Box,
  Center,
  Grid,
  GridItem,
  HStack,
  Icon,
  Stack,
  Text,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { MouseEventHandler, useEffect, useState } from 'react';
import { FiAlertTriangle } from 'react-icons/fi';

import {
  Connected,
  Connecting,
  Disconnected,
  NotExist,
  Error,
  Rejected,
  WalletConnectComponent,
} from './WalletConnect';
import { ConnectStatusWarn, RejectedWarn } from './WarnBlock';
import { ConnectedShowAddress, CopyAddressBtn } from './AddressCard';
import { UserInfo } from './UserInfo';
import { Astronaut } from './Astronaut';
import { ChainCard } from './ChainCard';
import { defaultChainName } from '@/config';
import { Coin } from '@cosmjs/amino';

export const WalletSection = () => {
  const {
    connect,
    openView,
    status,
    username,
    address,
    message,
    wallet,
    getSigningStargateClient,
    chain: chainInfo,
  } = useChain(defaultChainName);

  const { getChainLogo } = useManager();
  const [osmoBalance, setOsmoBalance] = useState<Coin>();
  const [balanceStaked, setBalanceStaked] = useState<Coin | null>();
  // console.log('balanceStaked', balanceStaked);

  const chain = {
    chainName: defaultChainName,
    label: chainInfo.pretty_name,
    value: defaultChainName,
    icon: getChainLogo(defaultChainName),
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

  const getBalance = async () => {
    try { 
      const client = await getSigningStargateClient();
      const balance = await client?.getBalance(address as string, 'uosmo');
      setOsmoBalance(balance); 
    } catch (error) {
      console.log(error)
    }
   
  };

  const getBalanceStaked = async () => {
    try {
     const client = await getSigningStargateClient();
     const staked = await client?.getBalanceStaked(address as string);
     setBalanceStaked(staked);
    } catch (error) {
      console.log(error)
    }
  
  };

  useEffect(() => {
    if (address) {
      getBalance();
      getBalanceStaked();
    }
  }, [address]);

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

  const userInfo = username && (
    <UserInfo username={username} icon={<Astronaut />} />
  );

  const addressBtn = (
    <CopyAddressBtn
      walletStatus={status}
      connected={<ConnectedShowAddress address={address} isLoading={false} />}
    />
  );

  const Balance = () => {
    return (
      <HStack w="256px" py={2} fontSize="13px" justify="space-between">
        <Flex gap={1}>
          <Text fontWeight="semibold">
            Balance: {osmoBalance?.amount ?? '--'}
          </Text>
          <Text pt="1px" fontSize="12px">
            {osmoBalance?.denom}
          </Text>
        </Flex>
        <Flex gap={1}>
          <Text fontWeight="semibold">
            Staked: {balanceStaked?.amount ?? '--'}
          </Text>
          <Text pt="2px" fontSize="12px">
            {balanceStaked?.denom}
          </Text>
        </Flex>
      </HStack>
    );
  };

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
        <GridItem marginBottom={'20px'}>
          <ChainCard
            prettyName={chain?.label || defaultChainName}
            icon={chain?.icon}
          />
        </GridItem>
        <GridItem px={6}>
          <Stack
            justifyContent="center"
            alignItems="center"
            borderRadius="lg"
            bg={useColorModeValue('white', 'blackAlpha.400')}
            boxShadow={useColorModeValue(
              '0 0 2px #dfdfdf, 0 0 6px -2px #d3d3d3',
              '0 0 2px #363636, 0 0 8px -2px #4f4f4f'
            )}
            spacing={4}
            px={4}
            py={{ base: 6, md: 12 }}
          >
            {userInfo}
            {addressBtn}
            {address && <Balance />}
            <Box w="full" maxW={{ base: 52, md: 64 }}>
              {connectWalletButton}
            </Box>
            {connectWalletWarn && <GridItem>{connectWalletWarn}</GridItem>}
          </Stack>
        </GridItem>
      </Grid>
    </Center>
  );
};

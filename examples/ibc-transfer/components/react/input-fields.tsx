import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Flex,
  Text,
  Icon,
  useColorMode,
  useToast,
} from '@chakra-ui/react';
import { useChain } from '@cosmos-kit/react';
import { WalletStatus } from '@cosmos-kit/core';
import { StdFee } from '@cosmjs/amino';
import { ConnectStatusWarn, RejectedWarn } from './warn-block';
import { FiAlertTriangle } from 'react-icons/fi';
import { ConnectWalletButton } from './wallet-connect';
import { ibc } from 'chain-registry';

import { denomToExponent, getCoin, getExponent } from './ibc-transfer';
import { Balance, TransactionResult } from '../types';
import store from '../../store';

export const getIbcInfo = (fromChainName: string, toChainName: string) => {
  let flipped = false;

  let ibcInfo = ibc.find(
    (i) =>
      i.chain_1.chain_name === fromChainName &&
      i.chain_2.chain_name === toChainName
  );

  if (!ibcInfo) {
    ibcInfo = ibc.find(
      (i) =>
        i.chain_1.chain_name === toChainName &&
        i.chain_2.chain_name === fromChainName
    );
    flipped = true;
  }

  if (!ibcInfo) {
    throw new Error('cannot find IBC info');
  }

  const key = flipped ? 'chain_2' : 'chain_1';
  const sourcePort = ibcInfo.channels[0][key].port_id;
  const sourceChannel = ibcInfo.channels[0][key].channel_id;

  return { sourcePort, sourceChannel };
};

const linearGradient =
  'linear-gradient(109.6deg, rgba(157,75,199,1) 11.2%, rgba(119,81,204,1) 83.1%)';

export const InputFields = ({
  balances,
  toChainName,
  updateBalance,
}: {
  balances: Balance[];
  toChainName: string;
  updateBalance: () => void;
}) => {
  const sourceChainName = store.sourceChain;

  const { address, connect, status, message, wallet } = useChain(toChainName);
  const { getSigningStargateClient } = useChain(sourceChainName);

  const { colorMode } = useColorMode();

  const [selectedToken, setSelectedToken] = useState<Balance>();
  const [amount, setAmount] = useState<number | string>('');
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  useEffect(() => {
    connect();
  }, [toChainName]);

  useEffect(() => {
    setSelectedToken(undefined);
  }, [sourceChainName]);

  const showToast = (code: number) => {
    toast({
      title: `Transaction ${code === 0 ? 'successful' : 'failed'}`,
      status: code === 0 ? 'success' : 'error',
      duration: 3000,
      isClosable: true,
      position: 'top-right',
    });
  };

  const onSelectChange = (e: any) => {
    setAmount('');
    setSelectedToken(
      balances.find((balance) => balance.denom === e.target.value)
    );
  };

  const onInputChange = (value: string) => {
    if (!selectedToken || Number(value) < selectedToken.displayAmount) {
      setAmount(value);
      return;
    }
    setAmount(selectedToken.displayAmount);
  };

  const onSubmitClick = async () => {
    if (!address || !selectedToken || !amount) return;

    setIsLoading(true);

    const fromAddress = store.sourceAddress;
    const toAddress = address;

    const coin = getCoin(store.sourceChain);
    const defaultExp = getExponent(toChainName);
    const exp = selectedToken.denom.startsWith('ibc/')
      ? denomToExponent(selectedToken.denom) || defaultExp
      : defaultExp;
    const transferAmount = (Number(amount) * 10 ** exp).toString();

    const currentTime = Math.floor(Date.now() / 1000);
    const timeoutTime = currentTime + 300; // 5 minutes

    const fromClient = await getSigningStargateClient();
    const { sourcePort, sourceChannel } = getIbcInfo(
      store.sourceChain,
      toChainName
    );

    const fee: StdFee = {
      amount: [
        {
          denom: coin.base,
          amount: '1000',
        },
      ],
      gas: '250000',
    };

    const token = {
      denom: selectedToken?.denom,
      amount: transferAmount,
    };

    fromClient
      .sendIbcTokens(
        fromAddress,
        toAddress,
        token,
        sourcePort,
        sourceChannel,
        undefined,
        timeoutTime,
        fee
      )
      .then((tx) => {
        console.log(tx);
        showToast(tx.code);
        updateBalance();
        setAmount('');
        setSelectedToken(undefined);
      })
      .catch((err) => {
        console.log(err);
        showToast(TransactionResult.Failed);
      })
      .finally(() => {
        fromClient.disconnect();
        setIsLoading(false);
      });
  };

  if (status === WalletStatus.Rejected || status === WalletStatus.Error) {
    return (
      <Box w="full" maxW="sm">
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
      </Box>
    );
  }

  if (status === WalletStatus.Disconnected) {
    return (
      <Box w="full" maxW="sm">
        <ConnectWalletButton
          buttonText="Connect Wallet"
          onClickConnectBtn={() => connect()}
        />
      </Box>
    );
  }

  return (
    <>
      <Box w="full" maxW="sm">
        <FormControl>
          <FormLabel
            color={colorMode === 'light' ? 'gray.600' : 'whiteAlpha.600'}
          >
            Token
          </FormLabel>
          <Select
            defaultValue="default"
            size="lg"
            bg={colorMode === 'light' ? 'white' : 'blackAlpha.400'}
            onChange={onSelectChange}
            value={selectedToken?.denom || 'default'}
          >
            <option value="default" key="default" disabled>
              Select a token
            </option>
            {balances.map((balance) => (
              <option value={balance.denom} key={balance.denom}>
                {balance.symbol}
              </option>
            ))}
          </Select>
        </FormControl>

        <FormControl mt={8}>
          <Flex justifyContent="space-between">
            <FormLabel
              color={colorMode === 'light' ? 'gray.600' : 'whiteAlpha.600'}
            >
              Amount
            </FormLabel>
            {selectedToken && (
              <Text
                cursor="pointer"
                onClick={() => setAmount(selectedToken?.displayAmount)}
              >
                Balance: {selectedToken?.displayAmount} {selectedToken?.symbol}
              </Text>
            )}
          </Flex>
          <NumberInput
            step={0.000001}
            precision={6}
            min={0}
            max={selectedToken?.displayAmount}
            size="lg"
            onChange={onInputChange}
            value={amount}
          >
            <NumberInputField
              bg={colorMode === 'light' ? 'white' : 'blackAlpha.400'}
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
      </Box>

      <Box w="full" maxW={{ base: 52, md: 64 }}>
        <Button
          isLoading={isLoading}
          loadingText="Submitting"
          w="full"
          size="lg"
          bgImage={linearGradient}
          color="white"
          opacity={1}
          transition="all .3s ease-in-out"
          _hover={{
            bgImage: linearGradient,
            opacity: 0.75,
          }}
          _active={{
            bgImage: linearGradient,
            opacity: 0.9,
          }}
          onClick={onSubmitClick}
          disabled={!Number(amount) || !selectedToken || isLoading}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

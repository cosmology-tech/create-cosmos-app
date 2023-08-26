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
} from '@chakra-ui/react';
import { useChain } from '@cosmos-kit/react';
import { WalletStatus } from '@cosmos-kit/core';
import { coins, StdFee } from '@cosmjs/amino';
import { FiAlertTriangle } from 'react-icons/fi';

import store from '@/store';
import {
  ConnectWalletButton,
  ConnectStatusWarn,
  RejectedWarn,
} from '@/components';
import { getCoin, PrettyBalance, getIbcInfo } from '@/utils';
import { ibc } from 'interchain-query';
import { useBalances, useTx } from '@/hooks';
import BigNumber from 'bignumber.js';

const { transfer } = ibc.applications.transfer.v1.MessageComposer.withTypeUrl;

const linearGradient =
  'linear-gradient(109.6deg, rgba(157,75,199,1) 11.2%, rgba(119,81,204,1) 83.1%)';

export const InputFields = ({ toChainName }: { toChainName: string }) => {
  const sourceChainName = store.sourceChain;

  const [amount, setAmount] = useState<number | string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedToken, setSelectedToken] = useState<PrettyBalance>();

  const { balances, refetch, isLoading: isFetchingBalances } = useBalances();
  const { address, connect, status, message, wallet } = useChain(toChainName);
  const { tx } = useTx(sourceChainName);

  const { colorMode } = useColorMode();

  useEffect(() => {
    connect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toChainName]);

  useEffect(() => {
    setSelectedToken(undefined);
  }, [sourceChainName]);

  const onSelectChange = (e: any) => {
    setAmount('');
    setSelectedToken(
      balances?.find((balance) => balance.denom === e.target.value)
    );
  };

  const onInputChange = (value: string) => {
    if (!selectedToken || Number(value) < selectedToken.displayAmount) {
      const val = new BigNumber(value || 0);
      const decimals = val.decimalPlaces()!;
      const formatted = decimals > 6 ? val.decimalPlaces(6).toString() : value;
      setAmount(formatted);
      return;
    }
    setAmount(selectedToken.displayAmount);
  };

  const onSubmitClick = async () => {
    if (!address || !selectedToken || !amount) return;

    setIsLoading(true);

    const coin = getCoin(store.sourceChain);
    const transferAmount = new BigNumber(amount)
      .shiftedBy(selectedToken.exponent)
      .toString();

    const fee: StdFee = {
      amount: coins('1000', coin.base),
      gas: '250000',
    };

    const { sourcePort, sourceChannel } = getIbcInfo(
      store.sourceChain,
      toChainName
    );

    const token = {
      denom: selectedToken.denom,
      amount: transferAmount,
    };

    const stamp = Date.now();
    const timeoutInNanos = (stamp + 1.2e6) * 1e6;

    const msg = transfer({
      sourcePort,
      sourceChannel,
      sender: store.sourceAddress,
      receiver: address,
      token,
      timeoutHeight: undefined,
      //@ts-ignore
      timeoutTimestamp: timeoutInNanos,
      memo: '',
    });

    await tx([msg], {
      fee,
      onSuccess: () => {
        refetch();
        setAmount('');
        setSelectedToken(undefined);
      },
    });

    setIsLoading(false);
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
            {(balances || []).map((balance) => (
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
          transition="all .3s ease-in-out"
          _hover={{
            bgImage: linearGradient,
            opacity: 0.8,
          }}
          _active={{
            bgImage: linearGradient,
            opacity: 0.9,
          }}
          _disabled={{
            cursor: 'not-allowed',
            opacity: 0.6,
          }}
          onClick={onSubmitClick}
          isDisabled={
            !Number(amount) || !selectedToken || isLoading || isFetchingBalances
          }
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Flex,
  Box,
  Center,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';
import {
  calculateShareOutAmount,
  calculateCoinsNeededInPoolForValue,
  calculateMaxCoinsForPool,
  makePoolsPretty,
  makePoolsPrettyValues,
  signAndBroadcast,
  getPricesFromCoinGecko,
  prettyPool,
  getBalancerPools,
} from '@cosmology/core';
import { coin } from '@cosmjs/amino';

import { Pool } from './provide-liquidity';
import { useChain } from '@cosmos-kit/react';
import { osmosis, FEES } from 'osmojs';
import { Coin } from 'osmojs/types/codegen/cosmos/base/v1beta1/coin';
import { chainName } from '../../config/defaults';
import Long from 'long';

const { joinPool } = osmosis.gamm.v1beta1.MessageComposer.withTypeUrl;

const AddLiquidityModal = ({
  isOpen,
  onClose,
  currentPool,
}: {
  isOpen: boolean;
  onClose: () => void;
  currentPool: Pool | undefined;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { getSigningStargateClient, address, getRpcEndpoint } =
    useChain(chainName);

  const poolId = currentPool?.id.low!;

  const handleClick = async () => {
    setIsLoading(true);

    const rpcEndpoint = await getRpcEndpoint();
    const stargateClient = await getSigningStargateClient();

    if (!stargateClient || !address) {
      console.error('stargateClient undefined or address undefined.');
      return;
    }

    const client = await osmosis.ClientFactory.createRPCQueryClient({
      rpcEndpoint,
    });

    const { pool } = await client.osmosis.gamm.v1beta1.pool({
      poolId: Long.fromNumber(poolId),
    });
    const { balances } = await client.cosmos.bank.v1beta1.allBalances({
      address,
    });
    const prices = await getPricesFromCoinGecko();

    const decodedPool = osmosis.gamm.v1beta1.Pool.decode(pool!.value);
    const poolInfo = prettyPool(decodedPool, { includeDetails: false });

    const max = false;
    const usdValue = 0.1;

    console.log('balances', balances);

    let coinsNeeded;
    if (!max) {
      coinsNeeded = calculateCoinsNeededInPoolForValue(
        prices,
        poolInfo,
        usdValue
      );
    } else {
      coinsNeeded = calculateMaxCoinsForPool(prices, poolInfo, balances);
    }
    const shareOutAmount = calculateShareOutAmount(poolInfo, coinsNeeded);

    const tokenInMaxs = coinsNeeded.map((c: Coin) => {
      return coin(c.amount, c.denom);
    });

    const msg = joinPool({
      poolId: Long.fromNumber(poolId),
      sender: address,
      shareOutAmount,
      tokenInMaxs,
    });

    const fee = FEES.osmosis.joinPool('low');

    try {
      const res = await stargateClient.signAndBroadcast(address, [msg], fee);

      console.log('res', res);

      stargateClient.disconnect();
      setIsLoading(false);

      // showToast(res.code);
      // updateData();

      // setTimeout(() => {
      //   onModalClose();
      // }, 1000);
    } catch (error) {
      console.log(error);
      stargateClient.disconnect();
      setIsLoading(false);
      // showToast(TransactionResult.Failed);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay bg="blackAlpha.800" />
      <ModalContent>
        <ModalHeader>
          <Text>Add liquidity</Text>
          <Text fontWeight="400" fontSize="14px">
            Pool #{poolId}
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex alignItems="center" justifyContent="space-between" mb="20px">
            <Box>
              <Text>ATOM</Text>
              <Text>Cosmos Hub</Text>
            </Box>
            <Box>
              <Flex justifyContent="flex-end">
                <Text mr="8px">Available</Text>
                <Text>0.374143 ATOM</Text>
              </Flex>
              <NumberInput precision={2}>
                <NumberInputField />
              </NumberInput>
            </Box>
          </Flex>
          <Flex alignItems="center" justifyContent="space-between" mb="30px">
            <Box>
              <Text>OSMO</Text>
              <Text>Osmosis</Text>
            </Box>
            <Box>
              <Flex justifyContent="flex-end">
                <Text mr="8px">Available</Text>
                <Text>0.227447 OSMO</Text>
              </Flex>
              <NumberInput precision={2}>
                <NumberInputField />
              </NumberInput>
            </Box>
          </Flex>
          <Center mb="10px">
            <Button
              isLoading={isLoading}
              disabled={isLoading}
              colorScheme="blue"
              mr={3}
              onClick={handleClick}
            >
              Add Liquidity
            </Button>
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddLiquidityModal;

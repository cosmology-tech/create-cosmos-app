import {
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  Button,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
import { useChain } from '@cosmos-kit/react';
import { useState } from 'react';
import { cosmos } from 'interchain';
import { getCoin } from '../../config';
import type { DelegationDelegatorReward as Reward } from 'interchain/types/codegen/cosmos/distribution/v1beta1/distribution';
import { TransactionResult } from '../types';
import { ChainName } from '@cosmos-kit/core';
import { useFeeEstimation, useTransactionToast } from '../../hooks';

export const Token = ({ token, color }: { token: string; color?: string }) => (
  <Text
    fontSize="sm"
    as="span"
    color={useColorModeValue(color || 'blackAlpha.600', 'whiteAlpha.600')}
  >
    {token}
  </Text>
);

const Stats = ({
  balance,
  rewards,
  staked,
  totalReward,
  updateData,
  chainName,
}: {
  balance: number;
  rewards: Reward[];
  staked: number;
  totalReward: number;
  updateData: () => void;
  chainName: ChainName;
}) => {
  const [isClaiming, setIsClaiming] = useState(false);
  const { getSigningStargateClient, address } = useChain(chainName);
  const { showToast } = useTransactionToast();
  const { estimateFee } = useFeeEstimation(chainName);

  const totalAmount = balance + staked + totalReward;
  const coin = getCoin(chainName);

  const onClaimClick = async () => {
    setIsClaiming(true);

    const stargateClient = await getSigningStargateClient();

    if (!stargateClient || !address) {
      console.error('stargateClient undefined or address undefined.');
      return;
    }

    const { withdrawDelegatorReward } =
      cosmos.distribution.v1beta1.MessageComposer.fromPartial;

    const msgs = rewards.map(({ validatorAddress }) =>
      withdrawDelegatorReward({
        delegatorAddress: address,
        validatorAddress,
      })
    );

    try {
      const fee = await estimateFee(address, msgs);
      const res = await stargateClient.signAndBroadcast(address, msgs, fee);
      showToast(res.code);
      updateData();
    } catch (error) {
      console.log(error);
      showToast(TransactionResult.Failed, error);
    } finally {
      stargateClient.disconnect();
      setIsClaiming(false);
    }
  };

  return (
    <StatGroup>
      <Stat py={2} minWidth="200px">
        <StatLabel
          color={useColorModeValue('blackAlpha.600', 'whiteAlpha.600')}
          fontWeight="semibold"
          fontSize="md"
        >
          Total {coin.symbol} Amount
        </StatLabel>
        <StatNumber>
          {totalAmount === 0 ? totalAmount : totalAmount.toFixed(6)}&nbsp;
          <Token token={coin.symbol} />
        </StatNumber>
      </Stat>

      <Stat py={2} minWidth="200px">
        <StatLabel
          color={useColorModeValue('blackAlpha.600', 'whiteAlpha.600')}
          fontWeight="semibold"
          fontSize="md"
        >
          Available Balance
        </StatLabel>
        <StatNumber>
          {balance} <Token token={coin.symbol} />
        </StatNumber>
      </Stat>

      <Stat py={2} minWidth="200px">
        <StatLabel
          color={useColorModeValue('blackAlpha.600', 'whiteAlpha.600')}
          fontWeight="semibold"
          fontSize="md"
        >
          Staked Amount
        </StatLabel>
        <StatNumber>
          {staked === 0 ? staked : staked.toFixed(6)}&nbsp;
          <Token token={coin.symbol} />
        </StatNumber>
      </Stat>

      <Stat
        pos="relative"
        py={2}
        px={4}
        bgColor={useColorModeValue('purple.50', 'purple.700')}
        borderRadius={10}
        minWidth="200px"
      >
        <StatLabel
          color={useColorModeValue('blackAlpha.600', 'whiteAlpha.600')}
          fontWeight="semibold"
          fontSize="md"
        >
          Claimable Rewards
        </StatLabel>
        <StatNumber>
          {totalReward}&nbsp;
          <Token
            color={useColorModeValue('blackAlpha.600', 'whiteAlpha.600')}
            token={coin.symbol}
          />
        </StatNumber>
        <Button
          pos="absolute"
          right={4}
          top={5}
          colorScheme="purple"
          size="sm"
          onClick={onClaimClick}
          isDisabled={!Number(totalReward)}
          isLoading={isClaiming}
        >
          Claim
        </Button>
      </Stat>
    </StatGroup>
  );
};

export default Stats;

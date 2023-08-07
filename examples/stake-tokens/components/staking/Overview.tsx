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
import { cosmos } from 'interchain-query';
import { getCoin } from '../../config';
import { ChainName } from '@cosmos-kit/core';
import { useTx } from '@/hooks';
import { type ParsedRewards as Rewards } from '@/utils/staking';
import { isGreaterThanZero, sum } from '@/utils';

const { withdrawDelegatorReward } =
  cosmos.distribution.v1beta1.MessageComposer.fromPartial;

export const Token = ({ token, color }: { token: string; color?: string }) => (
  <Text
    fontSize="sm"
    as="span"
    color={useColorModeValue(color || 'blackAlpha.600', 'whiteAlpha.600')}
  >
    {token}
  </Text>
);

const Overview = ({
  balance,
  rewards,
  staked,
  updateData,
  chainName,
}: {
  balance: string;
  rewards: Rewards;
  staked: string;
  updateData: () => void;
  chainName: ChainName;
}) => {
  const [isClaiming, setIsClaiming] = useState(false);
  const { address } = useChain(chainName);
  const { tx } = useTx(chainName);

  const totalAmount = sum(balance, staked, rewards.total);
  const coin = getCoin(chainName);

  const onClaimRewardClick = async () => {
    setIsClaiming(true);

    if (!address) return;

    const msgs = rewards.byValidators.map(({ validatorAddress }) =>
      withdrawDelegatorReward({
        delegatorAddress: address,
        validatorAddress,
      })
    );

    await tx(msgs, {
      onSuccess: updateData,
    });

    setIsClaiming(false);
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
          {totalAmount}&nbsp;
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
          {staked}&nbsp;
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
          {rewards.total}&nbsp;
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
          onClick={onClaimRewardClick}
          isDisabled={!isGreaterThanZero(rewards.total)}
          isLoading={isClaiming}
        >
          Claim
        </Button>
      </Stat>
    </StatGroup>
  );
};

export default Overview;

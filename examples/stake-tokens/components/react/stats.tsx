import {
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  Button,
  useColorModeValue,
  Text,
  useToast,
} from '@chakra-ui/react';
import { StdFee } from '@cosmjs/stargate';
import { useWallet } from '@cosmos-kit/react';
import { useState } from 'react';
import { cosmos } from 'interchain';
import { coin } from '../../config';
import { Reward } from '../types';

export const Token = ({ token, color }: { token?: string; color?: string }) => (
  <Text
    fontSize="sm"
    as="span"
    color={useColorModeValue(color || 'blackAlpha.600', 'whiteAlpha.600')}
  >
    {token || 'ATOM'}
  </Text>
);

const Stats = ({
  balance,
  rewards,
  staked,
  totalReward,
  updateData,
}: {
  balance: number;
  rewards: Reward[];
  staked: number;
  totalReward: number;
  updateData: () => void;
}) => {
  const toast = useToast();
  const [isClaiming, setIsClaiming] = useState(false);
  const { getSigningStargateClient, address } = useWallet();

  const totalAmount = balance + staked + totalReward;

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

    const fee: StdFee = {
      amount: [
        {
          denom: coin.base,
          amount: '1000',
        },
      ],
      gas: '500000',
    };

    const { code } = await stargateClient.signAndBroadcast(address, msgs, fee);

    stargateClient.disconnect();

    toast({
      title: `Transaction ${code === 0 ? 'successful' : 'failed'}`,
      status: code === 0 ? 'success' : 'error',
      duration: 3000,
      isClosable: true,
      position: 'top-right',
    });

    setIsClaiming(false);
    updateData();
  };

  return (
    <StatGroup>
      <Stat py={2} minWidth="200px">
        <StatLabel
          color={useColorModeValue('blackAlpha.600', 'whiteAlpha.600')}
          fontWeight="semibold"
          fontSize="md"
        >
          Total ATOM Amount
        </StatLabel>
        <StatNumber>
          {totalAmount === 0 ? totalAmount : totalAmount.toFixed(6)} <Token />
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
          {balance} <Token />
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
          {staked === 0 ? staked : staked.toFixed(6)} <Token />
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
          {totalReward}{' '}
          <Token
            color={useColorModeValue('blackAlpha.600', 'whiteAlpha.600')}
          />
        </StatNumber>
        <Button
          pos="absolute"
          right={4}
          top={5}
          colorScheme="purple"
          size="sm"
          onClick={onClaimClick}
          disabled={!Number(totalReward)}
          isLoading={isClaiming}
        >
          Claim
        </Button>
      </Stat>
    </StatGroup>
  );
};

export default Stats;

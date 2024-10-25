import { useState } from 'react';
import {
  Box,
  StakingAssetHeader,
  StakingClaimHeader,
} from '@interchain-ui/react';
import { useChain } from '@cosmos-kit/react';
import { ChainName } from 'cosmos-kit';
import { cosmos } from 'interchain-query';

import { getCoin } from '@/utils';
import { Prices, useTx } from '@/hooks';
import {
  sum,
  calcDollarValue,
  isGreaterThanZero,
  type ParsedRewards as Rewards,
} from '@/utils';

const { withdrawDelegatorReward } =
  cosmos.distribution.v1beta1.MessageComposer.fromPartial;

const Overview = ({
  balance,
  rewards,
  staked,
  updateData,
  chainName,
  prices,
}: {
  balance: string;
  rewards: Rewards;
  staked: string;
  updateData: () => void;
  chainName: ChainName;
  prices: Prices;
}) => {
  const [isClaiming, setIsClaiming] = useState(false);
  const { address } = useChain(chainName);
  const { tx } = useTx(chainName);

  const totalAmount = sum(balance, staked, rewards?.total ?? 0);
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
    <>
      <Box mb={{ mobile: '$8', tablet: '$12' }}>
        <StakingAssetHeader
          imgSrc={
            coin.logo_URIs?.png ||
            coin.logo_URIs?.svg ||
            coin.logo_URIs?.jpeg ||
            ''
          }
          symbol={coin.symbol}
          totalAmount={Number(totalAmount || 0)}
          totalPrice={calcDollarValue(coin.base, totalAmount, prices)}
          available={Number(balance || 0)}
          availablePrice={calcDollarValue(coin.base, balance, prices)}
        />
      </Box>

      <Box mb={{ mobile: '$12', tablet: '$14' }}>
        <StakingClaimHeader
          symbol={coin.symbol}
          rewardsAmount={Number(rewards?.total || 0)}
          stakedAmount={Number(staked || 0)}
          onClaim={onClaimRewardClick}
          isLoading={isClaiming}
          isDisabled={!isGreaterThanZero(rewards?.total || 0)}
        />
      </Box>
    </>
  );
};

export default Overview;

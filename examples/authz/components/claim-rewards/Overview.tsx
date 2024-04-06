// TODO fix type issues
// @ts-nocheck

import { useState } from 'react';
import {
  Box,
  StakingAssetHeader,
  StakingClaimHeader,
} from '@interchain-ui/react';
import { ChainName } from 'cosmos-kit';

import { getCoin } from '@/configs';
import { Prices, useAuthzTx } from '@/hooks';
import {
  sum,
  calcDollarValue,
  isGreaterThanZero,
  type ParsedRewards as Rewards,
} from '@/utils';
import { MsgWithdrawDelegatorReward } from '@/src/codegen/cosmos/distribution/v1beta1/tx';
import { useAuthzContext } from '@/context';

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

  const { permission } = useAuthzContext();
  const { authzTx, createExecMsg } = useAuthzTx(chainName);

  const totalAmount = sum(balance, staked, rewards?.total ?? 0);
  const coin = getCoin(chainName);

  const onClaimRewardClick = () => {
    if (!permission) return;

    setIsClaiming(true);

    const { grantee, granter, expiration } = permission;

    const msgs = rewards.byValidators.map(({ validatorAddress }) =>
      MsgWithdrawDelegatorReward.toProtoMsg({
        delegatorAddress: granter,
        validatorAddress,
      })
    );

    authzTx({
      msgs: [createExecMsg({ msgs, grantee })],
      execExpiration: expiration,
      onSuccess: () => {
        updateData();
      },
      onComplete: () => {
        setIsClaiming(false);
      },
    });
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
          totalAmount={Number(totalAmount) || 0}
          totalPrice={calcDollarValue(coin.base, totalAmount, prices)}
          available={Number(balance) || 0}
          availablePrice={calcDollarValue(coin.base, balance, prices)}
        />
      </Box>

      <Box mb={{ mobile: '$12', tablet: '$14' }}>
        <StakingClaimHeader
          symbol={coin.symbol}
          rewardsAmount={Number(rewards.total) || 0}
          stakedAmount={Number(staked) || 0}
          onClaim={onClaimRewardClick}
          isLoading={isClaiming}
          isDisabled={!isGreaterThanZero(rewards.total)}
        />
      </Box>
    </>
  );
};

export default Overview;

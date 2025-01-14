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
import { Prices, useAuthzTx, useSigningClientDirect } from '@/hooks';
import {
  sum,
  calcDollarValue,
  isGreaterThanZero,
  type ParsedRewards as Rewards,
} from '@/utils';
import { MsgWithdrawDelegatorReward } from 'interchain-react/cosmos/distribution/v1beta1/tx';
import { useAuthzContext } from '@/context';
import { useExec } from 'interchain-react/cosmos/authz/v1beta1/tx.rpc.func';
import { defaultContext } from '@tanstack/react-query';

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
  const { createExecMsg } = useAuthzTx(chainName);

  const { data: client } = useSigningClientDirect(chainName);

  const { mutate: exec } = useExec({
    clientResolver: client,
    options: {
      context: defaultContext,
    },
  });

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

    exec(
      {
        granter,
        message: createExecMsg({ msgs, grantee }),
        fee: 'auto',
        memo: 'executing permission',
      },
      {
        onSuccess: () => {
          updateData();
        },
        onError: () => {
          setIsClaiming(false);
        },
      }
    );
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

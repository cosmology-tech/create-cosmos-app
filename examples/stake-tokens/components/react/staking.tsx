import { useCallback, useEffect, useState } from 'react';
import { useWallet } from '@cosmos-kit/react';
import { Box, Skeleton } from '@chakra-ui/react';
import { cosmos } from 'interchain';
import BigNumber from 'bignumber.js';
import { decodeCosmosSdkDecFromProto } from '@cosmjs/stargate';
import Long from 'long';

import Stats from './stats';
import { Validator, DelegationResponse as Delegation, Reward } from '../types';
import MyValidators from './my-validators';
import AllValidators from './all-validators';
import { chainName, chainassets, coin } from '../../config';

export const exponentiate = (num: number | string, exp: number) => {
  return new BigNumber(num)
    .multipliedBy(new BigNumber(10).exponentiatedBy(exp))
    .toNumber();
};

// get the exponent from chain registry asset denom_units
export const exp = coin.denom_units.find((unit) => unit.denom === coin.display)
  ?.exponent as number;

interface StakingTokens {
  balance: number;
  rewards: Reward[];
  totalReward: number;
  staked: number;
  delegations: Delegation[];
  myValidators: Validator[];
  allValidators: Validator[];
}

export const StakingSection = () => {
  const { address, getRpcEndpoint } = useWallet();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<StakingTokens>({
    balance: 0,
    rewards: [],
    totalReward: 0,
    staked: 0,
    delegations: [],
    myValidators: [],
    allValidators: [],
  });

  const getData = useCallback(async () => {
    if (!address) {
      setData({
        balance: 0,
        rewards: [],
        totalReward: 0,
        staked: 0,
        delegations: [],
        myValidators: [],
        allValidators: [],
      });
      return;
    }

    setIsLoading(true);

    let rpcEndpoint = await getRpcEndpoint();

    if (!rpcEndpoint) {
      console.log('no rpc endpoint — using a fallback');
      rpcEndpoint = `https://rpc.cosmos.directory/${chainName}`;
    }

    // get RPC client
    const client = await cosmos.ClientFactory.createRPCQueryClient({
      rpcEndpoint,
    });

    // AVAILABLE BALANCE
    const { balance } = await client.cosmos.bank.v1beta1.balance({
      address,
      denom: chainassets?.assets[0].base as string,
    });

    const amount = exponentiate(balance!.amount, -exp);

    // MY VALIDATORS
    const { validators: myValidators } =
      await client.cosmos.staking.v1beta1.delegatorValidators({
        delegatorAddr: address,
      });

    // REWARDS
    const { rewards, total } =
      await client.cosmos.distribution.v1beta1.delegationTotalRewards({
        delegatorAddress: address,
      });

    const reward = decodeCosmosSdkDecFromProto(total[0].amount).toString();

    const totalReward = Number(exponentiate(reward, -exp).toFixed(6));

    // ALL VALIDATORS
    const { validators: allValidators } =
      await client.cosmos.staking.v1beta1.validators({
        status: cosmos.staking.v1beta1.bondStatusToJSON(
          cosmos.staking.v1beta1.BondStatus.BOND_STATUS_BONDED
        ),
        pagination: {
          key: new Uint8Array(),
          offset: Long.fromNumber(0),
          limit: Long.fromNumber(200),
          countTotal: false,
          reverse: false,
        },
      });

    // DELEGATIONS
    const { delegationResponses: delegations } =
      await client.cosmos.staking.v1beta1.delegatorDelegations({
        delegatorAddr: address,
      });
    console.log('delegations', delegations);

    const stakedAmount = delegations
      .map((delegation) => exponentiate(delegation.balance!.amount, -exp))
      .reduce((a, b) => a + b, 0);

    setData({
      rewards,
      totalReward,
      balance: amount,
      staked: stakedAmount,
      delegations,
      myValidators,
      allValidators,
    });
    setIsLoading(false);
  }, [address, getRpcEndpoint]);

  useEffect(() => {
    getData();
  }, [address, getData]);

  return (
    <Box my={14}>
      <Skeleton isLoaded={!isLoading}>
        <Stats
          balance={data.balance}
          rewards={data.rewards}
          totalReward={data.totalReward}
          staked={data.staked}
          updateData={getData}
        />
      </Skeleton>
      {data.myValidators.length > 0 && (
        <Skeleton isLoaded={!isLoading}>
          <MyValidators
            validators={data.myValidators}
            allValidator={data.allValidators}
            delegations={data.delegations}
            rewards={data.rewards}
            balance={data.balance}
            updateData={getData}
          />
        </Skeleton>
      )}
      {data.allValidators.length > 0 && (
        <Skeleton isLoaded={!isLoading}>
          <AllValidators
            balance={data.balance}
            validators={data.allValidators}
            delegations={data.delegations}
            updateData={getData}
          />
        </Skeleton>
      )}
    </Box>
  );
};

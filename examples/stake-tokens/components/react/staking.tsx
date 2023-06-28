/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import { useChain } from '@cosmos-kit/react';
import { Box, SkeletonText } from '@chakra-ui/react';
import { cosmos } from 'interchain';
import BigNumber from 'bignumber.js';
import { decodeCosmosSdkDecFromProto } from '@cosmjs/stargate';
import Long from 'long';
import type {
  Validator,
  DelegationResponse as Delegation,
} from 'interchain/types/codegen/cosmos/staking/v1beta1/staking';
import type { DelegationDelegatorReward as Reward } from 'interchain/types/codegen/cosmos/distribution/v1beta1/distribution';
import Stats from './stats';
import MyValidators from './my-validators';
import AllValidators from './all-validators';
import { getCoin } from '../../config';
import { ChainName } from '@cosmos-kit/core';
import {
  getExponent,
  exponentiate,
  getImgUrls,
  decodeUint8Arr,
  shiftDigits,
} from '../../utils';
import { getAnnualProvisions } from '../../api';
import { ChainInfo } from '../types';

interface StakingTokens {
  balance: number;
  rewards: Reward[];
  totalReward: number;
  staked: number;
  delegations: Delegation[];
  myValidators: Validator[];
  allValidators: Validator[];
  unbondingDays: number;
  chainInfo: ChainInfo;
  thumbnails: {
    [key: string]: string;
  };
}

export const StakingSection = ({ chainName }: { chainName: ChainName }) => {
  const { address, getRpcEndpoint } = useChain(chainName);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<StakingTokens>();

  const coin = getCoin(chainName);
  const exp = getExponent(chainName);

  const getData = useCallback(async () => {
    if (!address) return;

    setIsLoading(true);
    try {
      let rpcEndpoint = await getRpcEndpoint();

      if (!rpcEndpoint) {
        console.log('no rpc endpoint — using a fallback');
        rpcEndpoint = `https://rpc.cosmos.directory/${chainName}`;
      }

      // get RPC client
      const { cosmos: cosmosClient } =
        await cosmos.ClientFactory.createRPCQueryClient({
          rpcEndpoint:
            typeof rpcEndpoint === 'string' ? rpcEndpoint : rpcEndpoint.url,
        });

      const [
        { balance },
        { validators: myValidators },
        { rewards, total },
        { validators },
        { delegationResponses: delegations },
        { params },
      ] = await Promise.all([
        cosmosClient.bank.v1beta1.balance({
          address,
          denom: coin.base,
        }),
        cosmosClient.staking.v1beta1.delegatorValidators({
          delegatorAddr: address,
        }),
        cosmosClient.distribution.v1beta1.delegationTotalRewards({
          delegatorAddress: address,
        }),
        cosmosClient.staking.v1beta1.validators({
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
        }),
        cosmosClient.staking.v1beta1.delegatorDelegations({
          delegatorAddr: address,
        }),
        cosmosClient.staking.v1beta1.params(),
      ]);

      // AVAILABLE BALANCE
      const amount = exponentiate(balance!.amount, -exp);

      // REWARDS
      const delegatorReward = total.find((item) => item.denom === coin.base);

      const reward = decodeCosmosSdkDecFromProto(
        delegatorReward ? delegatorReward.amount : '0'
      ).toString();

      const totalReward = Number(exponentiate(reward, -exp).toFixed(6));

      // ALL VALIDATORS
      const allValidators = validators.sort((a, b) =>
        new BigNumber(b.tokens).minus(new BigNumber(a.tokens)).toNumber()
      );

      // APR
      let chainInfo: ChainInfo = {};
      let annualProvisions: string | undefined;

      await getAnnualProvisions(chainName)
        .then((data) => (annualProvisions = data.annual_provisions))
        .catch((err) => console.log(err));

      if (!annualProvisions) {
        await cosmosClient.mint.v1beta1
          .annualProvisions()
          .then((data) => {
            const provisions = decodeUint8Arr(data?.annualProvisions);
            annualProvisions = shiftDigits(provisions, -18);
          })
          .catch((err) => {
            console.log(err);
          });
      }

      if (annualProvisions) {
        const [{ pool }, { params }] = await Promise.all([
          cosmosClient.staking.v1beta1.pool(),
          cosmosClient.distribution.v1beta1.params(),
        ]);
        const communityTax = shiftDigits(params?.communityTax || 0, -18);
        chainInfo = { annualProvisions, communityTax, pool };
      }

      // DELEGATIONS
      const stakedAmount = delegations
        .map((delegation) => exponentiate(delegation.balance!.amount, -exp))
        .reduce((a, b) => a + b, 0);

      // UNBONDING DAYS
      const unbondingDays = params?.unbondingTime
        ? Number((params?.unbondingTime?.seconds.low / 86400).toFixed(0))
        : 0;

      // THUMBNAILS
      let thumbnails = {};

      const validatorThumbnails = localStorage.getItem(
        `${chainName}-validator-thumbnails`
      );

      if (validatorThumbnails) {
        thumbnails = JSON.parse(validatorThumbnails);
      } else {
        thumbnails = await getImgUrls(validators, chainName);
        localStorage.setItem(
          `${chainName}-validator-thumbnails`,
          JSON.stringify(thumbnails)
        );
      }

      setData({
        rewards,
        totalReward,
        balance: amount,
        staked: stakedAmount,
        delegations,
        myValidators,
        allValidators,
        unbondingDays,
        thumbnails,
        chainInfo,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [address]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Box my={14}>
      <SkeletonText
        isLoaded={!isLoading}
        mt="0"
        noOfLines={4}
        spacing="4"
        skeletonHeight="4"
      >
        {data && (
          <Stats
            balance={data.balance}
            rewards={data.rewards}
            totalReward={data.totalReward}
            staked={data.staked}
            updateData={getData}
            chainName={chainName}
          />
        )}
        {data && data.myValidators.length > 0 && (
          <MyValidators
            validators={data.myValidators}
            allValidator={data.allValidators}
            delegations={data.delegations}
            rewards={data.rewards}
            balance={data.balance}
            updateData={getData}
            unbondingDays={data.unbondingDays}
            chainName={chainName}
            chainInfo={data.chainInfo}
            thumbnails={data.thumbnails}
          />
        )}
        {data && data.allValidators.length > 0 && (
          <AllValidators
            balance={data.balance}
            validators={data.allValidators}
            delegations={data.delegations}
            updateData={getData}
            unbondingDays={data.unbondingDays}
            chainName={chainName}
            thumbnails={data.thumbnails}
            chainInfo={data.chainInfo}
          />
        )}
      </SkeletonText>
    </Box>
  );
};

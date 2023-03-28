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
import { ImageSource } from '../types';

export const exponentiate = (num: number | string, exp: number) => {
  return new BigNumber(num)
    .multipliedBy(new BigNumber(10).exponentiatedBy(exp))
    .toNumber();
};

export const getExponent = (chainName: string) => {
  return getCoin(chainName).denom_units.find(
    (unit) => unit.denom === getCoin(chainName).display
  )?.exponent as number;
};

const splitIntoChunks = (arr: any[], chunkSize: number) => {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
};

const convertChainName = (chainName: string) => {
  if (chainName.endsWith('testnet')) {
    return chainName.replace('testnet', '-testnet');
  }

  switch (chainName) {
    case 'cosmoshub':
      return 'cosmos';
    case 'assetmantle':
      return 'asset-mantle';
    case 'cryptoorgchain':
      return 'crypto-org';
    case 'dig':
      return 'dig-chain';
    case 'gravitybridge':
      return 'gravity-bridge';
    case 'kichain':
      return 'ki-chain';
    case 'oraichain':
      return 'orai-chain';
    case 'terra':
      return 'terra-classic';
    default:
      return chainName;
  }
};

const isUrlValid = async (url: string) => {
  const res = await fetch(url, { method: 'HEAD' });
  const contentType = res?.headers?.get('Content-Type') || '';
  return contentType.startsWith('image');
};

const getCosmostationUrl = (chainName: string, validatorAddr: string) => {
  const cosmostationChainName = convertChainName(chainName);
  return `https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${cosmostationChainName}/moniker/${validatorAddr}.png`;
};

const addImageSource = async (
  validator: Validator,
  chainName: string
): Promise<Validator & ImageSource> => {
  const url = getCosmostationUrl(chainName, validator.operatorAddress);
  const isValid = await isUrlValid(url);
  return { ...validator, imageSource: isValid ? 'cosmostation' : 'keybase' };
};

const getKeybaseUrl = (identity: string) => {
  return `https://keybase.io/_/api/1.0/user/lookup.json?key_suffix=${identity}&fields=pictures`;
};

const getImgUrls = async (validators: Validator[], chainName: string) => {
  const validatorsWithImgSource = await Promise.all(
    validators.map((validator) => addImageSource(validator, chainName))
  );

  // cosmostation urls
  const cosmostationUrls = validatorsWithImgSource
    .filter((validator) => validator.imageSource === 'cosmostation')
    .map(({ operatorAddress }) => {
      return {
        address: operatorAddress,
        url: getCosmostationUrl(chainName, operatorAddress),
      };
    });

  // keybase urls
  const keybaseIdentities = validatorsWithImgSource
    .filter((validator) => validator.imageSource === 'keybase')
    .map((validator) => ({
      address: validator.operatorAddress,
      identity: validator.description?.identity || '',
    }));

  const chunkedIdentities = splitIntoChunks(keybaseIdentities, 20);

  let responses: any[] = [];

  for (const chunk of chunkedIdentities) {
    const thumbnailRequests = chunk.map(({ address, identity }) => {
      if (!identity) return { address, url: '' };

      return fetch(getKeybaseUrl(identity))
        .then((response) => response.json())
        .then((res) => ({
          address,
          url: res.them?.[0]?.pictures?.primary.url || '',
        }));
    });
    responses = [...responses, await Promise.all(thumbnailRequests)];
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  const keybaseUrls = responses.flat();

  const allUrls = [...cosmostationUrls, ...keybaseUrls].reduce(
    (prev, cur) => ({ ...prev, [cur.address]: cur.url }),
    {}
  );

  return allUrls;
};

interface StakingTokens {
  balance: number;
  rewards: Reward[];
  totalReward: number;
  staked: number;
  delegations: Delegation[];
  myValidators: Validator[];
  allValidators: Validator[];
  unbondingDays: number;
  thumbnails: {
    [key: string]: string;
  };
}

export const StakingSection = ({ chainName }: { chainName: ChainName }) => {
  const { address, getRpcEndpoint } = useChain(chainName);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<StakingTokens>({
    balance: 0,
    rewards: [],
    totalReward: 0,
    staked: 0,
    delegations: [],
    myValidators: [],
    allValidators: [],
    unbondingDays: 0,
    thumbnails: {},
  });

  const coin = getCoin(chainName);
  const exp = getExponent(chainName);

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
        unbondingDays: 0,
        thumbnails: {},
      });
      return;
    }

    setIsLoading(true);

    let rpcEndpoint = await getRpcEndpoint();

    if (!rpcEndpoint) {
      console.log('no rpc endpoint — using a fallback');
      rpcEndpoint = `https://rpc.cosmos.directory/${chainName}`;
    }

    // get RPC client
    const client = await cosmos.ClientFactory.createRPCQueryClient({
      rpcEndpoint:
        typeof rpcEndpoint === 'string' ? rpcEndpoint : rpcEndpoint.url,
    });

    // AVAILABLE BALANCE
    const { balance } = await client.cosmos.bank.v1beta1.balance({
      address,
      denom: coin.base,
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

    const delegatorReward = total.find((item) => item.denom === coin.base);

    const reward = decodeCosmosSdkDecFromProto(
      delegatorReward ? delegatorReward.amount : '0'
    ).toString();

    const totalReward = Number(exponentiate(reward, -exp).toFixed(6));

    // ALL VALIDATORS
    const { validators } = await client.cosmos.staking.v1beta1.validators({
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

    const allValidators = validators.sort((a, b) =>
      new BigNumber(b.tokens).minus(new BigNumber(a.tokens)).toNumber()
    );

    // DELEGATIONS
    const { delegationResponses: delegations } =
      await client.cosmos.staking.v1beta1.delegatorDelegations({
        delegatorAddr: address,
      });

    const stakedAmount = delegations
      .map((delegation) => exponentiate(delegation.balance!.amount, -exp))
      .reduce((a, b) => a + b, 0);

    // UNBONDING DAYS
    const { params } = await client.cosmos.staking.v1beta1.params();
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
    });
    setIsLoading(false);
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
        <Stats
          balance={data.balance}
          rewards={data.rewards}
          totalReward={data.totalReward}
          staked={data.staked}
          updateData={getData}
          chainName={chainName}
        />
        {data.myValidators.length > 0 && (
          <MyValidators
            validators={data.myValidators}
            allValidator={data.allValidators}
            delegations={data.delegations}
            rewards={data.rewards}
            balance={data.balance}
            updateData={getData}
            unbondingDays={data.unbondingDays}
            chainName={chainName}
            thumbnails={data.thumbnails}
          />
        )}
        {data.allValidators.length > 0 && (
          <AllValidators
            balance={data.balance}
            validators={data.allValidators}
            delegations={data.delegations}
            updateData={getData}
            unbondingDays={data.unbondingDays}
            chainName={chainName}
            thumbnails={data.thumbnails}
          />
        )}
      </SkeletonText>
    </Box>
  );
};

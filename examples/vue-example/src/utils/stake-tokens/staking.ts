import { Pool, Validator } from "../../codegen/cosmos/staking/v1beta1/staking";
import BigNumber from 'bignumber.js';
import { isGreaterThanZero, shiftDigits, toNumber } from "./math";
import { QueryDelegationTotalRewardsResponse } from "../../codegen/cosmos/distribution/v1beta1/query";
import { Coin, decodeCosmosSdkDecFromProto } from "@cosmjs/stargate";
import { QueryDelegatorDelegationsResponse, QueryParamsResponse } from "../../codegen/cosmos/staking/v1beta1/query";
import { QueryAnnualProvisionsResponse } from "../../codegen/cosmos/mint/v1beta1/query";

const DAY_TO_SECONDS = 24 * 60 * 60;
const ZERO = '0';

export const calcStakingApr = ({
  pool,
  commission,
  communityTax,
  annualProvisions,
}: ChainMetaData & { commission: string }) => {
  const totalSupply = new BigNumber(pool?.bondedTokens || 0).plus(
    pool?.notBondedTokens || 0
  );

  const bondedTokensRatio = new BigNumber(pool?.bondedTokens || 0).div(
    totalSupply
  );

  const inflation = new BigNumber(annualProvisions || 0).div(totalSupply);

  const one = new BigNumber(1);

  return inflation
    .multipliedBy(one.minus(communityTax || 0))
    .div(bondedTokensRatio)
    .multipliedBy(one.minus(commission))
    .shiftedBy(2)
    .decimalPlaces(2, BigNumber.ROUND_DOWN)
    .toString();
};

export const decodeUint8Arr = (uint8array: Uint8Array | undefined) => {
  if (!uint8array) return '';
  return new TextDecoder('utf-8').decode(uint8array);
};

const formatCommission = (commission: string) => {
  return new BigNumber(commission).isLessThan(1)
    ? commission
    : shiftDigits(commission, -18);
};

const findAndDecodeReward = (
  coins: Coin[],
  denom: string,
  exponent: number
) => {
  const amount = coins.find((coin) => coin.denom === denom)?.amount || ZERO;
  const decodedAmount = decodeCosmosSdkDecFromProto(amount).toString();
  return shiftDigits(decodedAmount, exponent);
};

export const parseRewards = (
  { rewards, total }: QueryDelegationTotalRewardsResponse,
  denom: string,
  exponent: number
) => {
  if (!rewards || !total) return { byValidators: [], total: ZERO };

  const totalReward = findAndDecodeReward(total, denom, exponent);

  const rewardsParsed = rewards.map(({ reward, validatorAddress }) => ({
    validatorAddress,
    amount: findAndDecodeReward(reward, denom, exponent),
  }));

  return { byValidators: rewardsParsed, total: totalReward };
};

export type ExtendedValidator = ReturnType<typeof extendValidators>[0];

export const parseValidators = (validators: Validator[]) => {
  return validators.map((validator) => ({
    description: validator.description?.details || '',
    name: validator.description?.moniker || '',
    identity: validator.description?.identity || '',
    address: validator.operatorAddress,
    commission: formatCommission(
      validator.commission?.commissionRates?.rate || '0'
    ),
    votingPower: toNumber(shiftDigits(validator.tokens, -6, 4), 4),
  }));
};

export const formatValidatorMetaInfo = (
  validator: ExtendedValidator
): string => {
  const commissionStr = `Commission ${shiftDigits(validator.commission, 2)}%`;
  const aprStr = validator.apr ? `APR ${validator.apr}%` : '';

  return [commissionStr, aprStr].filter(Boolean).join(' | ');
};

export const parseDelegations = (
  delegations: QueryDelegatorDelegationsResponse['delegationResponses'],
  exponent: number
) => {
  if (!delegations) return [];
  return delegations.map(({ balance, delegation }) => ({
    validatorAddress: delegation?.validatorAddress || '',
    amount: shiftDigits(balance?.amount || ZERO, exponent),
  }));
};

export type ParsedDelegations = ReturnType<typeof parseDelegations>;

export const calcTotalDelegation = (delegations: ParsedDelegations) => {
  if (!delegations) return ZERO;

  return delegations
    .reduce((prev, cur) => prev.plus(cur.amount), new BigNumber(0))
    .toString();
};

export const parseUnbondingDays = (params: QueryParamsResponse['params']) => {
  return new BigNumber(Number(params?.unbondingTime?.seconds || 0))
    .div(DAY_TO_SECONDS)
    .decimalPlaces(0)
    .toString();
};

export const parseAnnualProvisions = (data: QueryAnnualProvisionsResponse) => {
  console.log('dat>', data)
  const res = shiftDigits(decodeUint8Arr(data?.annualProvisions), -18);
  return isGreaterThanZero(res) ? res : null;
};

export type ParsedRewards = ReturnType<typeof parseRewards>;

export type ParsedValidator = ReturnType<typeof parseValidators>[0];

export type ChainMetaData = {
  annualProvisions: string;
  communityTax: string;
  pool: Pool;
};

export const extendValidators = (
  validators: ParsedValidator[] = [],
  delegations: ParsedDelegations = [],
  rewards: ParsedRewards['byValidators'] = [],
  chainMetadata: ChainMetaData
) => {
  const { annualProvisions, communityTax, pool } = chainMetadata;

  return validators.map((validator) => {
    const { address, commission } = validator;

    const delegation =
      delegations.find(({ validatorAddress }) => validatorAddress === address)
        ?.amount || ZERO;
    const reward =
      rewards.find(({ validatorAddress }) => validatorAddress === address)
        ?.amount || ZERO;

    const apr =
      annualProvisions && communityTax && pool && commission
        ? calcStakingApr({ annualProvisions, commission, communityTax, pool })
        : null;

    return { ...validator, delegation, reward, apr };
  });
};
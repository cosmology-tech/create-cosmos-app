import { Validator } from "../../codegen/cosmos/staking/v1beta1/staking";
import BigNumber from 'bignumber.js';
import { shiftDigits, toNumber } from "./calc";

const formatCommission = (commission: string) => {
  return new BigNumber(commission).isLessThan(1)
    ? commission
    : shiftDigits(commission, -18);
};

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
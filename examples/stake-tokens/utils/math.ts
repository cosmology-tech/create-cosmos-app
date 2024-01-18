import { Prices } from '@/hooks';
import BigNumber from 'bignumber.js';

export const isGreaterThanZero = (val: number | string | undefined) => {
  return new BigNumber(val || 0).gt(0);
};

export const shiftDigits = (
  num: string | number,
  places: number,
  decimalPlaces?: number
) => {
  return new BigNumber(num)
    .shiftedBy(places)
    .decimalPlaces(decimalPlaces || 6)
    .toString();
};

export const toNumber = (val: string, decimals: number = 6) => {
  return new BigNumber(val).decimalPlaces(decimals).toNumber();
};

export const sum = (...args: string[]) => {
  return args
    .reduce((prev, cur) => prev.plus(cur), new BigNumber(0))
    .toString();
};

export const calcDollarValue = (
  denom: string,
  amount: string | number,
  prices: Prices
) => {
  return new BigNumber(prices[denom] || 0)
    .times(amount)
    .decimalPlaces(2)
    .toNumber();
};

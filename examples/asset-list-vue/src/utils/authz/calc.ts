import BigNumber from 'bignumber.js';

export const shiftDigits = (
  num: string | number | undefined | null,
  places: number,
  decimalPlaces?: number
) => {
  return new BigNumber(num ?? 0)
    .shiftedBy(places)
    .decimalPlaces(decimalPlaces || 6)
    .toString();
};
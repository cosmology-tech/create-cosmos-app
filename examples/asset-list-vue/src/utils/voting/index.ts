import dayjs from 'dayjs';
import BigNumber from 'bignumber.js';

export function formatDate(date?: Date) {
  if (!date) return null;
  return dayjs(date).format('YYYY-MM-DD hh:mm:ss');
};

export function paginate(limit: bigint, reverse: boolean = false) {
  return {
    limit,
    reverse,
    key: new Uint8Array(),
    offset: 0n,
    countTotal: true,
  }
}

export function decodeUint8Array(value?: Uint8Array) {
  return value ? new TextDecoder('utf-8').decode(value) : '';
}

export function parseQuorum(value?: Uint8Array) {
  const quorum = decodeUint8Array(value);
  return new BigNumber(quorum).shiftedBy(-quorum.length).toNumber();
}

export const exponentiate = (num: number | string | undefined, exp: number) => {
  if (!num) return 0;
  return new BigNumber(num)
    .multipliedBy(new BigNumber(10).exponentiatedBy(exp))
    .toNumber();
};

export function percent(num: number | string = 0, total: number, decimals = 2) {
  return total ? new BigNumber(num).dividedBy(total).multipliedBy(100).decimalPlaces(decimals).toNumber() : 0;
}
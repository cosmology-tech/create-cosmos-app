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
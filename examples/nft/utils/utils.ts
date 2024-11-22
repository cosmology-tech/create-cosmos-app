import BigNumber from 'bignumber.js';
import { chains } from 'chain-registry';
import { Asset, Chain } from '@chain-registry/types';
import { STARGAZE_ADDRESS_LENGTH, STARGAZE_TOKEN_DENOM, STARGAZE_TOKEN_EXPONENT } from '@/config';

export function ipfs(url: string = '') {
  if (url.startsWith('http')) return url;
  if (url.startsWith('ipfs')) {
    return `https://ipfs-gw.stargaze-apis.com/ipfs/${url.slice(7)}`;
  }
  return url;
};

export function tweet(
  tokenId: string,
  tokenName: string,
  collectionAddr: string
) {
  const name = tokenName.split(' ').slice(0, -1).join('%20');
  const text = `text=${name}%20%23${tokenId}%20on%20%40StargazeZone%20%24STARS`;
  const url = `url=https://www.stargaze.zone/media/${collectionAddr}/${tokenId}`;

  return `https://twitter.com/intent/tweet?${[text, url].join('&')}`;
};

export async function download(url: string, name: string) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(await fetch(url).then(r => r.blob()));
  a.download = name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export function expires(days: number) {
  const future = new Date();
  future.setDate(future.getDate() + days);
  return new BigNumber(+future).shiftedBy(6).toString();
}

export function ellipsis(text: string = '', max = 200) {
  return text.length > max ? text.slice(0, max) + '...' : text;
}

export function percent(value: string | number, decimals = 0) {
  return new BigNumber(value).multipliedBy(100).decimalPlaces(decimals, BigNumber.ROUND_DOWN).toString()
}

export function display(amount: string | number = 0, exponent = STARGAZE_TOKEN_EXPONENT) {
  return new BigNumber(amount || 0).shiftedBy(-exponent).decimalPlaces(2).toString();
}

export function coin(amount: number | string = 0, exponent = STARGAZE_TOKEN_EXPONENT) {
  if (!amount) return { amount: '0', denom: STARGAZE_TOKEN_DENOM };
  return {
    denom: STARGAZE_TOKEN_DENOM,
    amount: new BigNumber(amount).shiftedBy(exponent).toString()
  };
};

export function shorten(address: string = '', first = 10, last = 6) {
  if (!address) return '';
  return address.slice(0, first) + '...' + address.slice(-last);
}

export function multiply(
  num1: string | number,
  num2: string | number,
  decimals: number = 2
) {
  return new BigNumber(num1)
    .multipliedBy(num2)
    .decimalPlaces(decimals)
    .toString();
};

export function sum(...args: (string | number)[]) {
  return args
    .reduce((total, current) => total.plus(current), new BigNumber(0))
    .toString();
};

export function minus(
  minuend: string | number,
  subtrahend: string | number
) {
  return new BigNumber(minuend).minus(subtrahend).toString();
};

export function isValidAddress(address = '') {
  return address.startsWith('stars') && address.length === STARGAZE_ADDRESS_LENGTH;
}

export function getLogo(from: Asset | Chain) {
  return from.logo_URIs?.svg || from.logo_URIs?.png;
}

export function getChainLogo(name: string) {
  const chain = chains.find(chain => chain.chain_name === name)
  return chain ? getLogo(chain as any) : null;
}

export function getStargazeProfileLink(address: string | undefined) {
  if (!address) return 'https://www.stargaze.zone';
  return `https://www.stargaze.zone/p/${address}/tokens`;
}
import BigNumber from 'bignumber.js';
import { Coin } from 'stargazejs/types/codegen/Marketplace.types';
import { coin, exponent } from '../config';

export const toDisplayAmount = (
  amount: number | string | undefined,
  exponent: number
) => {
  if (!amount) return '0';
  return new BigNumber(amount).shiftedBy(-exponent).decimalPlaces(2).toString();
};

export const toRawAmount = (
  amount: number | string | undefined,
  exponent: number
) => {
  if (!amount) return '0';
  return new BigNumber(amount).shiftedBy(exponent).toString();
};

export const getHttpUrl = (ipfsLink: string | undefined) => {
  if (!ipfsLink) return '';
  return `https://ipfs-gw.stargaze-apis.com/ipfs/${ipfsLink.slice(7)}`;
};

export const shortenAddress = (
  address: string | undefined,
  frontLen = 10,
  backLen = 6
) => {
  if (!address) return '';
  return address.slice(0, frontLen) + '...' + address.slice(-backLen);
};

export const getStargazeProfileLink = (address: string | undefined) => {
  if (!address) return 'https://www.stargaze.zone';
  return `https://www.stargaze.zone/profile/${address}/all`;
};

export const download = async (url: string, imageName: string) => {
  const a = document.createElement('a');
  a.href = await toDataURL(url);
  a.download = imageName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

const toDataURL = (url: string) => {
  return fetch(url)
    .then((response) => {
      return response.blob();
    })
    .then((blob) => {
      return URL.createObjectURL(blob);
    });
};

export const getTwitterShareLink = (
  tokenId: string,
  tokenName: string,
  collectionAddr: string
) => {
  const formattedName = tokenName.split(' ').slice(0, -1).join('%20');
  const twitterUrl = 'https://twitter.com/intent/tweet?';
  const text = `text=${formattedName}%20%23${tokenId}%20on%20%40StargazeZone%20%24STARS`;
  const url = `url=https://www.stargaze.zone/media/${collectionAddr}/${tokenId}`;
  const params = [text, url].join('&');

  return twitterUrl + params;
};

export const daysToMilliseconds = (days: number | string) => {
  return new BigNumber(days).multipliedBy(24 * 60 * 60 * 1000).toString();
};

export const getStarsCoin = (displayAmount: string | number): Coin => {
  return {
    amount: toRawAmount(displayAmount, exponent),
    denom: coin.base,
  };
};

export const getExpirationTime = (days: string | number) => {
  return new BigNumber(Date.now())
    .plus(daysToMilliseconds(days))
    .shiftedBy(6)
    .toString();
};

export const isAddressValid = (address: string) => {
  return address.startsWith('stars') && address.length === 44;
};

export const multiply = (
  num1: string | number,
  num2: string | number,
  decimals: number = 2
) => {
  return new BigNumber(num1)
    .multipliedBy(num2)
    .decimalPlaces(decimals)
    .toString();
};

export const sum = (...args: (string | number)[]) => {
  return args
    .reduce((total, current) => total.plus(current), new BigNumber(0))
    .toString();
};

export const minus = (
  minuend: string | number,
  subtrahend: string | number
) => {
  return new BigNumber(minuend).minus(subtrahend).toString();
};

export const isGtZero = (num: string | number) => {
  return new BigNumber(num).gt(0);
};

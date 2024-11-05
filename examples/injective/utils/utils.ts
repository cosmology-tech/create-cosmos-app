import BigNumber from 'bignumber.js';
import { chains } from '@chain-registry/v2';
import { Asset, Chain } from '@chain-registry/types';

export function integer(number: number | string) {
  return new BigNumber(number).decimalPlaces(0, BigNumber.ROUND_DOWN).toString();
}

export function getLogo(from: Asset | Chain) {
  return from.logo_URIs?.svg || from.logo_URIs?.png || from.logo_URIs?.jpeg;
}

export function getChainLogo(name: string) {
  const chain = chains.find(chain => chain.chainName === name) as unknown as Chain;
  return chain ? getLogo(chain) : null;
}
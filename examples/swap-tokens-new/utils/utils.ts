import BigNumber from 'bignumber.js';
import { chains } from 'chain-registry';
import { Asset } from '@chain-registry/types';

export function integer(number: number | string) {
  return new BigNumber(number).decimalPlaces(0, BigNumber.ROUND_DOWN).toString();
}

export function getAssetLogo(asset: Asset) {
  return asset.logo_URIs?.svg || asset.logo_URIs?.png || asset.logo_URIs?.jpeg;
}

export function getChainLogo(name: string) {
  const chain = chains.find(chain => chain.chain_name === name)
  return chain ? chain.logo_URIs?.svg || chain.logo_URIs?.png || chain.logo_URIs?.jpeg : ''
}
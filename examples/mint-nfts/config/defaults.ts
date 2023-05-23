import { assets } from 'chain-registry';
import { AssetList, Asset } from '@chain-registry/types';
import BigNumber from 'bignumber.js';

export const chainName = 'stargaze';

export const chainassets: AssetList = assets.find(
  (chain) => chain.chain_name === chainName
) as AssetList;

export const coin: Asset = chainassets.assets.find(
  (asset) => asset.base === 'ustars'
) as Asset;

export const exponent = coin.denom_units.find(
  (unit) => unit.denom === coin.display
)?.exponent as number;

export const toDisplayAmount = (amount: string, exponent: number) => {
  return new BigNumber(amount).shiftedBy(-exponent).decimalPlaces(2).toString();
};

export const getHttpUrl = (ipfsLink: string | undefined) => {
  if (!ipfsLink) return '';
  return `https://ipfs-gw.stargaze-apis.com/ipfs/${ipfsLink.slice(7)}`;
};
